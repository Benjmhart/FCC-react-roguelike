import applyOddsBool from "./applyOddsBool"
import applyOddsWithinRange from "./applyOddsWithinRange"
import applyOddsWithinArray from "./applyOddsWithinArray"
import equipment from "../assets/equipment"
import healthItems from "../assets/healthItems"


//takes character, heroCoords, Direction, floor
export default function(character, [herox, heroy], direction, floor, ) {
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
		receivedItem.dodge = applyOddsBool(trueAGI + truePER +trueWIS + trueLUK*2)
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
		targets.push({coords: destinationCoords, enemyCellObject:{...floor[destinationCoords[0]][destinationCoords[1]]}})
	} else{neighbors.forEach(neighbor => targets.push(neighbor))}
	const dealt = targets.map( target => {
		const {STR, AGI, WIS, PER, CHA, LUK, atkMin, atkMax, armor} = target.enemyCellObject;
		const dealtItem = {}
		dealtItem.target = {...target}
		dealtItem.hit = applyOddsBool(AGI * (truePER*trueWIS)+(trueLUK*2))
		dealtItem.dodge = applyOddsBool(AGI + PER + WIS + LUK*2)
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
			dealtItem.willDrop = applyOddsBool(20 + (trueLUK*2))
			if(dealtItem.willDrop){
				dealtItem.getEquipment = applyOddsBool(20)
				if(dealtItem.getEquipment){
					const equipTypes = ["weapon", "armor", "ring", "shoes", "helmet"]
					const equipChoice = applyOddsWithinArray([equipTypes])
					console.log(equipChoice)
					console.log(character[equipChoice])
					//const equipDrop = equipment[character.CLASS][equipChoice][character[equipChoice].rarity + 1]
					//dealtItem.equipmentDrop[equipChoice] = equipDrop
				}
				else{ 
					dealtItem.healthDrop = applyOddsWithinArray([healthItems])
				}
			}
		}
		return dealtItem
	})
	console.log({ received, dealt })
	return { received, dealt }
}


//processes kills/rewards  depending on character speed

// returns a master combatDetails object