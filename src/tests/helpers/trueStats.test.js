/*global expect*/
import trueStats from "../../helpers/trueStats"
import oldCharacter from "../../mockObjects/oldCharacter"

const youngCharacter = {...oldCharacter}
youngCharacter.isNew = true;

const olderCharacter = {...oldCharacter}
	olderCharacter.trueSTR=5
	olderCharacter.trueAGI=5
	olderCharacter.trueWIS=6
	olderCharacter.truePER=6
	olderCharacter.trueCHA=5
	olderCharacter.trueLUK=5
	olderCharacter.LVL=1
	olderCharacter.totalArmor=2
	olderCharacter.HP=16
	olderCharacter.HPMAX=16
describe("initial receive finished character & get stats from equipment", () => {
	it("updates stats properly based on initial equipment loadout", () => {
		expect(trueStats(youngCharacter)).toEqual(olderCharacter)
	})
	
	
})

//describe ("get stats from combat outcomes (exp gain, levelup, combat damage, healing item, stat item, new equipment")