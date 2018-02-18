/*global expect jest*/
import processCombat from "../../helpers/processCombat"
import mapObject3x3 from "../../mockObjects/mapObject3x3"
import charWithStats from "../../mockObjects/charWithStats"
import enemies from "../../assets/enemies"

const applyOddsBoolfunc = jest.fn()
const applyOddsWithinArrayfunc = jest.fn()
const applyOddsWithinRangefunc = jest.fn()

const combatFloor = [...mapObject3x3.dungeon[1]]
combatFloor[2][1] = {...enemies[0], contains:"enemy", HP:2}
combatFloor[1][2] = {...enemies[1], contains:"enemy", HP:2}
const heroCoords = [2,2]
const direction = "West"

describe("basic combat functions", () => {
	const result = processCombat(charWithStats, heroCoords, direction, combatFloor)
	//mocking a kill with equipment drop
	//first enemy attack
	applyOddsBoolfunc.mockReturnValueOnce(false)//enemy hit
	applyOddsBoolfunc.mockReturnValueOnce(true)// dodge enemy attack
	applyOddsBoolfunc.mockReturnValueOnce(false)//no enemy crit
	applyOddsWithinRangefunc.mockReturnValueOnce(0)//enemy hits for 0
	//second enemy attack
	applyOddsBoolfunc.mockReturnValueOnce(false)//enemy hit
	applyOddsBoolfunc.mockReturnValueOnce(true)// dodge enemy attack
	applyOddsBoolfunc.mockReturnValueOnce(false)//no enemy crit
	applyOddsWithinRangefunc.mockReturnValueOnce(0)//enemy hits for 0
	//hero attack
	applyOddsBoolfunc.mockReturnValueOnce(true)//hero hit
	applyOddsBoolfunc.mockReturnValueOnce(false)// enemy dodge
	applyOddsBoolfunc.mockReturnValueOnce(true)//hero crit
	applyOddsWithinRangefunc.mockReturnValueOnce(100)//hero hits for 100
	//drops
	
	applyOddsBoolfunc.mockReturnValueOnce(true)//will the kill give a drop?
	applyOddsBoolfunc.mockReturnValueOnce(true)//will the drop be equipment?
	applyOddsWithinArrayfunc.mockReturnValueOnce("weapon")//what kind of drop will it be??
	
	const result2 = processCombat(charWithStats, heroCoords, direction, combatFloor,applyOddsBoolfunc, applyOddsWithinRangefunc, applyOddsWithinArrayfunc)
	it("deals damage to target", () => {
		expect(result.dealt.length === 1).toBe(true)
	})
	it("receives damage from neighbor enemies", () =>{
		expect(result.received.length > 1).toBe(true)
	})
	it("properly assigns an equipmentDrop", () => {
		expect(result2.dealt[0].equipmentDrop.weapon.rarity).toBe(1)
	})
	//additional tests to investigate combatDetails received/dealt array properties
})

/*
descibe ("functions with special character attack skills", () => {
	// beserk
	// slash
	// flash
	
})
*/