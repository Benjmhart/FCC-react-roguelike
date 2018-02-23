import applyOddsBoolfunc from "./applyOddsBool"
import applyOddsWithinRangefunc from "./applyOddsWithinRange"
import applyOddsWithinArrayfunc from "./applyOddsWithinArray"
import equipment from "../assets/equipment"
import healthItems from "../assets/healthItems"


//takes character, heroCoords, Direction, floor
export default function(character, [herox, heroy], direction, floor, applyOddsBool = applyOddsBoolfunc, applyOddsWithinRange = applyOddsWithinRangefunc, applyOddsWithinArray = applyOddsWithinArrayfunc) {
	//extracts all the enemies and allprocesses their damage
	//neighbors [west, north, east south]
	const directionsList = ["West", "North", "East", "South"]
	const neighborCells = [[herox, heroy -1], [herox-1, heroy], [herox, heroy+1], [herox+1, heroy]]
	const destinationCoords = neighborCells[directionsList.indexOf(direction)]
	const neighbors = neighborCells.reduce((array, pair) => {
		const enemyCellObject = {...floor[pair[0]][pair[1]]}
		if(enemyCellObject.contains === "enemy") {
			array.push({ coords:pair, enemyCellObject}) 
		}
		return array
	}, [])
	const { trueSTR, trueAGI, trueWIS, truePER, trueCHA, trueLUK, totalArmor, weapon } = character
	const received = neighbors.map( neighbor => {
		const {STR, AGI, WIS, PER, CHA, LUK, atkMin, atkMax} = neighbor.enemyCellObject;
		const receivedItem = {}
		receivedItem.origin = {...neighbor};
		receivedItem.hit = applyOddsBool(AGI * (PER*WIS)+(LUK*2))
		const dodgerate = (trueAGI + truePER +trueWIS + trueLUK*2) > 60 ? 60 : (trueAGI + truePER +trueWIS + trueLUK*2)
		receivedItem.dodge = applyOddsBool(dodgerate)
		receivedItem.crit = applyOddsBool(CHA + LUK)
		receivedItem.minDamage = (!receivedItem.dodge && receivedItem.hit) ? Math.ceil(atkMin + (0.8*STR) + (0.4*AGI)) : 0
		receivedItem.maxDamage = (!receivedItem.dodge && receivedItem.hit) ? Math.ceil(atkMax + (0.8*STR) + (0.4*AGI)) : 0
		receivedItem.damage = applyOddsWithinRange(receivedItem.minDamage, receivedItem.maxDamage) - totalArmor;
		if(receivedItem.damage < 0){receivedItem.damage = 0}
		if(receivedItem.crit){receivedItem.damage *= 2}
		return receivedItem
	})
	const targets = []
	if(character.weapon.ability !== "beserk"){
		if(floor[destinationCoords[0]][destinationCoords[1]].contains==="enemy"){
			targets.push({coords: destinationCoords, enemyCellObject:{...(floor[destinationCoords[0]][destinationCoords[1]])}})
		}
	} else{neighbors.forEach(neighbor => {targets.push(neighbor)})}
	const dealt = targets.map( target => {
		const { AGI, WIS, PER, LUK, armor} = target.enemyCellObject;
		const dealtItem = {}
		dealtItem.target = {...target}
		dealtItem.hit = applyOddsBool(AGI * (truePER*trueWIS)+(trueLUK*2))
		const dodgerate = (AGI + PER + WIS + LUK*2)>30 ? 30 : (AGI + PER + WIS + LUK*2)
		dealtItem.dodge = applyOddsBool(dodgerate)
		dealtItem.crit = applyOddsBool(trueCHA + trueLUK)
		dealtItem.minDamage = (!dealtItem.dodge && dealtItem.hit) ? Math.ceil(weapon.attackMin + (0.8*trueSTR) + (0.4*trueAGI)) : 0
		dealtItem.maxDamage = (!dealtItem.dodge && dealtItem.hit) ? Math.ceil(weapon.attackMax + (0.8*trueSTR) + (0.4*trueAGI)) : 0
		dealtItem.damage = applyOddsWithinRange(dealtItem.minDamage, dealtItem.maxDamage) - armor;
		
		if(dealtItem.crit){dealtItem.damage *= 2}
		if(dealtItem.target.enemyCellObject.HP <= dealtItem.damage){
			dealtItem.kill = true
			dealtItem.expGain = dealtItem.target.enemyCellObject.EXP
		}
		if(dealtItem.kill===true){
			dealtItem.willDrop = applyOddsBool(70 + (trueLUK))
			if(dealtItem.willDrop){
				dealtItem.getEquipment = applyOddsBool(20)
				if(dealtItem.getEquipment){
				
					const equipTypes = ["weapon", "armor", "ring", "shoes", "helmet"]
					dealtItem.equipDropType = applyOddsWithinArray(equipTypes)
					if(character[[dealtItem.equipDropType].rarity+1]===equipment[character.CLASS][dealtItem.equipDropType].length){
						dealtItem.willDrop=false;
						dealtItem.getEquipment=false
						
					}else{
						console.log('drop occuring')
						const equipDrop = equipment[character.CLASS][dealtItem.equipDropType][character[dealtItem.equipDropType].rarity + 1]
						dealtItem.equipmentDrop = {}
						dealtItem.equipmentDrop[dealtItem.equipDropType] = equipDrop
						console.log(equipDrop)
						if(!equipDrop){
						dealtItem.willDrop=false;
						dealtItem.getEquipment=false}
					}
				}
				else{ 
					dealtItem.healthDrop = applyOddsWithinArray(healthItems)
				}
			}
		}
		return dealtItem
	})
	const responseObject = { received, dealt}
	//if hero died,  add a death boolean
	responseObject.totalDamage = received.reduce((total, item) => {
		return total + item.damage
	}, 0)
	responseObject.death = (character.HP <= responseObject.totalDamage) ? true : false 
	//if one of the targets was a boss and it died, add a win boolean
	responseObject.win =  dealt.reduce((bool, item) => {
		if(item.target.enemyCellObject.boss && item.kill){return true}
		return bool;
	}, false)
	//process levelup
	responseObject.totalEXPGain = dealt.reduce((total, item) => {
		if(item.kill){return total+ item.target.enemyCellObject.EXP}
		return total
	}, 0)
	if(responseObject.totalEXPGain + character.EXP >= character.nextLVL){
		responseObject.LVLup = true
		responseObject.LVLmod={}
		const statOptions = ["STR","AGI","WIS","PER","CHA", "LUK"]
		const statToChange = applyOddsWithinArray(statOptions)
		responseObject.LVLmod[statToChange] = 2
	}
	if(received.length === 0 && dealt.length===0){return {}}
	return responseObject
}


//processes kills/rewards  depending on character speed

// returns a master combatDetails object