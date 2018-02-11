export default function (character/*, changeEvent*/) {
	//first make truestats equal natural stats
	const outputCharacter  = {...character}
	outputCharacter.trueSTR=outputCharacter.STR
	outputCharacter.trueAGI=outputCharacter.AGI
	outputCharacter.trueWIS=outputCharacter.WIS
	outputCharacter.truePER=outputCharacter.PER
	outputCharacter.trueCHA=outputCharacter.CHA
	outputCharacter.trueLUK=outputCharacter.LUK
	outputCharacter.totalArmor=0
	if(outputCharacter.isNew===true){
		outputCharacter.LVL=1
	}
	//then go through each piece of equipment if there is a mod, apply it to the relevant truestat
	const equipmentTypes = ["armor","weapon", "shoes", "helmet", "ring"];
	equipmentTypes.forEach((type)=>{
		if(outputCharacter[type].mod){
			const mods = Object.keys(outputCharacter[type].mod)
			mods.forEach(modStat => {
				outputCharacter[`true${modStat}`] += outputCharacter[type].mod[modStat];
			})
		}
		//then get armor on each piece of equipment and put it on totalArmor
		if(outputCharacter[type].armor){
			outputCharacter.totalArmor += outputCharacter[type].armor 
		}
	})
	//then calculate HPMAX and set HP equal to HPMAX
	//HPMAX = sum of all truestats *0.5 *level
	
	const sum = outputCharacter.trueSTR + 
		outputCharacter.trueAGI + 
		outputCharacter.trueWIS + 
		outputCharacter.truePER +
		outputCharacter.trueCHA + 
		outputCharacter.trueLUK;
	outputCharacter.HPMAX = sum * 0.5 * outputCharacter.LVL;
	if(outputCharacter.isNew===true){
		outputCharacter.HP = outputCharacter.HPMAX
		outputCharacter.isNew=false;
	}
	return outputCharacter;
}