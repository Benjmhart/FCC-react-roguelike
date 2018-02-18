/*global expect*/
import processCombat from "../../helpers/processCombat"
import mapObject3x3 from "../../mockObjects/mapObject3x3"
import charWithStats from "../../mockObjects/charWithStats"
import enemies from "../../assets/enemies"


const combatFloor = [...mapObject3x3.dungeon[1]]
combatFloor[2][1] = {...enemies[0], contains:"enemy"}
combatFloor[1][2] = {...enemies[1], contains:"enemy"}
const heroCoords = [2,2]
const direction = "West"
const result = processCombat(charWithStats, heroCoords, direction, combatFloor)
describe("basic combat functions", () => {
	it("deals damage to target", () => {
		expect(result.dealt.length === 1).toBe(true)
	})
	it("receives damage from neighbor enemies", () =>{
		expect(result.received.length > 1).toBe(true)
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