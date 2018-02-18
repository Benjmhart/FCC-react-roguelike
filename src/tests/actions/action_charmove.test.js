/*global expect*/
//does all the action for any move attempt including combat or hitting a wall,  also carries an array of messages
//takes the contents of the next cell as an argument,  also takes the character object as an argument
//takes the direction as an arguement
//sends back an action with a TYPE, DIRECTION: SUCCESS: and optional COMBAT options

import charMove from "../../actions/action_charMove"
import { CHAR_MOVE } from "../../actions/actionTypes"
import mapObject3x3 from "../../mockObjects/mapObject3x3"
import { wall, emptySpace } from "../../assets/mapObjects"
import oldChar from "../../mockObjects/oldCharacter"
import charWithStats from "../../mockObjects/charWithStats"
import enemies from "../../assets/enemies"

const arrowLeft = 37
const keyA = 65
const arrowRight = 39
const keyD = 68
const arrowUp = 38
const keyW = 87
const arrowDown = 40
const keyS = 83
const floor1 = mapObject3x3.dungeon[mapObject3x3.currentFloor]
const heroCoordsfloor1 = [1,1]
const floor2 = mapObject3x3.dungeon[1]
const heroCoordsfloor2 = [2,2]
const cleanFloor2 = [...floor2]

describe("NSEW (both keys), TO WALL", () => {
	//note if using below action as template to code from, include attemptedDirection
	const action = {
		type:CHAR_MOVE,
		payload: {
			newHeroCoords:heroCoordsfloor1,
			prevHeroCoords:heroCoordsfloor1,
			character: oldChar,
			success: false,
			combat: false,
			destinationContents: wall,
			combatDetails: {}
		}
	}
	it("will return the correct action when attempt to walk LEFT into a wall (arrow Key)",() => {
		action.payload.attemptedDirection="West"
		const result = charMove(arrowLeft, floor1, heroCoordsfloor1, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk LEFT into a wall (A Key)",() => {
		const result = charMove(keyA, floor1, heroCoordsfloor1, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk RIGHT into a wall (arrow Key)",() => {
		action.payload.attemptedDirection="East"
		const result = charMove(arrowRight, floor1, heroCoordsfloor1, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk RIGHT into a wall (D Key)",() => {
		const result = charMove(keyD, floor1, heroCoordsfloor1, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk UP into a wall (arrow Key)",() => {
		action.payload.attemptedDirection="North"
		const result = charMove(arrowUp, floor1, heroCoordsfloor1, oldChar)
		expect(result).toEqual(action)
	})
	
	it("will return the correct action when attempt to walk UP into a wall (W Key)",() => {
		const result = charMove(keyW, floor1, heroCoordsfloor1, oldChar)
		expect(result).toEqual(action)
	})
	
	it("will return the correct action when attempt to walk DOWN into a wall (arrow Key)",() => {
		action.payload.attemptedDirection="South"
		const result = charMove(arrowDown, floor1, heroCoordsfloor1, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk DOWN into a wall (S Key)",() => {
		const result = charMove(keyS, floor1, heroCoordsfloor1, oldChar)
		expect(result).toEqual(action)
	})
})
//NSEW (both keys), TO EMPTY
describe("NSEW (both keys), TO WALL", () => {
	//note if using below action as template to code from, include attemptedDirection
	const action = {
		type:CHAR_MOVE,
		payload: {
			prevHeroCoords:heroCoordsfloor2,
			character: oldChar,
			success: true,
			combat: false,
			destinationContents: emptySpace,
			combatDetails: {}
		}
	}
	it("will return the correct action when attempt to walk LEFT into EMPTY (arrow Key)",() => {
		action.payload.attemptedDirection="West"
		action.payload.newHeroCoords=[2,1]
		const result = charMove(arrowLeft, floor2, heroCoordsfloor2, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk LEFT into EMPTY (A Key)",() => {
		const result = charMove(keyA, floor2, heroCoordsfloor2, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk RIGHT into EMPTY (arrow Key)",() => {
		action.payload.attemptedDirection="East"
		action.payload.newHeroCoords=[2,3]
		const result = charMove(arrowRight, floor2, heroCoordsfloor2, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk RIGHT into EMPTY (D Key)",() => {
		const result = charMove(keyD, floor2, heroCoordsfloor2, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk UP into EMPTY (arrow Key)",() => {
		action.payload.attemptedDirection="North"
		action.payload.newHeroCoords=[1,2]
		// fixing initial conditions for test due to object pollution I can't identify
		cleanFloor2[1][1] = { contains:"none"}
		cleanFloor2[1][2] = { contains: "none"}
		cleanFloor2[2][2] = { contains:"hero"}
		const result = charMove(arrowUp, cleanFloor2, heroCoordsfloor2, oldChar)
		expect(result).toEqual(action)
	})
	
	it("will return the correct action when attempt to walk UP into EMPTY (W Key)",() => {
		const result = charMove(keyW, cleanFloor2, heroCoordsfloor2, oldChar)
		expect(result).toEqual(action)
	})
	
	it("will return the correct action when attempt to walk DOWN into EMPTY (arrow Key)",() => {
		action.payload.attemptedDirection="South"
		action.payload.newHeroCoords=[3,2]
		const result = charMove(arrowDown, floor2, heroCoordsfloor2, oldChar)
		expect(result).toEqual(action)
	})
	it("will return the correct action when attempt to walk DOWN into EMPTY (S Key)",() => {
		const result = charMove(keyS, floor2, heroCoordsfloor2, oldChar)
		expect(result).toEqual(action)
	})
})

describe("combat tests", () => {
	const combatFloor = [...floor2]
	const enemysquare = {...enemies[1], contains:"enemy"}
	combatFloor[2][2] = {...emptySpace}
	combatFloor[1][2] = {contains:"hero"}
	combatFloor[1][1] = {...enemysquare}
	const heroCoordsCombat = [1,2]
	//player moves into wall
	const action1 = charMove(keyW, combatFloor, heroCoordsCombat, charWithStats)
	//player moves into enemy
	const action2 = charMove(keyA, combatFloor, heroCoordsCombat, charWithStats)
	it("has combat marked true if player fails to move and is next to enemy", () => {
		expect(action1.payload.combat).toBe(true)
	})
	it("has combat marked true if player attempts to move into an enemy", () => {
		expect(action2.payload.combat).toBe(true)
	})
	it("has combatDetails output received if player attempts to move into an enemy", () => {
		expect(action2.payload.combatDetails.received.length > 0).toBe(true)
	})
	it("has combatDetails output dealt if player attempts to move into an enemy", () => {
		expect(action2.payload.combatDetails.dealt.length > 0).toBe(true)
	})
	it("has combatDetails output received if player attempts to move into a wall with an enemy nearby", () => {
		expect(action1.payload.combatDetails.received.length > 0).toBe(true)
	})
})
//move to stairs
//move to dirtwall with DIG action