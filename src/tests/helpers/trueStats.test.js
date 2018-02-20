/*global expect*/
import trueStats from "../../helpers/trueStats"
import oldCharacter from "../../mockObjects/oldCharacter"
import { charGainingLevelBeforeTrueStats, charGainingLevelAfterTrueStats } from "../../mockObjects/charGainingLevel"

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
	olderCharacter.nextLVL=80
describe("initial receive finished character & get stats from equipment", () => {
	it("updates stats properly based on initial equipment loadout", () => {
		expect(trueStats(youngCharacter)).toEqual(olderCharacter)
	})
})
describe("stat correction following combat", () => {
	const result = trueStats(charGainingLevelBeforeTrueStats)
	it("corrects stats for a character gaining a level or receiving new stats from an item or equipment", () => {
		expect(result).toEqual(charGainingLevelAfterTrueStats);
	})
})