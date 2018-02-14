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
		const result = charMove(arrowUp, floor2, heroCoordsfloor2, oldChar)
		expect(result).toEqual(action)
	})
	
	it("will return the correct action when attempt to walk UP into EMPTY (W Key)",() => {
		const result = charMove(keyW, floor2, heroCoordsfloor2, oldChar)
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
//NSEW (both keys), TO DIRT (dig/without dig)
//NSEW (both keys), to ENEMY (combat) - will require mocking functions that create random multipliers
//NSEW (both keys), to STAIRSDOWN
//NSEW (both keys), to STAIRSUP
