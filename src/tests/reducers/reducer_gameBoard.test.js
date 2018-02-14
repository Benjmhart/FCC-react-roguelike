/*global expect jest*/
/*
when the character is completed it generates the first floor
accepts the UPDATE_CHARACTER action if and only if the payload has isnew=false to trigger 
the initial level thereafter, accepts the CHAR_MOVE action add runs all enemy moves, 
adjusts the heros coordinates, and generates a level iff and only if the MOVE-TO part of 
the CHAR_MOVE payload is a STAIRDOWN(also changes current floor), if it is a STAIR-UP it .
only changes current floor.
*/


// map has a currentfloor and a 3D array [FLOORS],[ROWS],[COLUMNS]
//if move successful, moves the hero object to correspond with moving hero coordinates on the character object
//ongamestart injects the hero object into the array?
//a cell is always empty after the hero leaves...

// this reducer needs to take a generate floor seed random number function as a dependancy
//it also needs to take a floor seed and an empty array and pass it to a procedural generator
// this procedural generator will be a pure function that takes an array and a seed and uses the seed as an instruction to build a floor.

//2nd delivery
//when the current level increments to a new level, it generates a level
//allows the current level to ascend and descent
//causes enemies to move when a character move event occurs
//turns a visible property on and off depending on coordinates
//

import GameBoardReducer from "../../reducers/reducer_gameBoard";
import { UPDATE_CHAR, CHAR_MOVE, LOAD_GAME } from "../../actions/actionTypes";
import { wall, hero, emptySpace } from "../../assets/mapObjects";
import mapObject3x3 from "../../mockObjects/mapObject3x3";
import mapObjectVisible from "../../mockObjects/mapObjectVisible"
import createFloorReal from "../../helpers/createFloorFromSeed"
import charWithStats from "../../mockObjects/charWithStats"
const empty = {};
const createFloorFromSeed = jest.fn();
const action = {type: UPDATE_CHAR, payload:{ isNew: false, perception:4 }}
const localStorfunc=jest.fn()
createFloorFromSeed.mockReturnValueOnce(mapObject3x3.dungeon[mapObject3x3.currentFloor])
describe("initial functions", ()=>{
	it("returns basic state when passed unrelated actions", () => {
		const sillyaction = {type:"UNRELATED", payload:"BLAH BLAH"}
		expect(GameBoardReducer(empty, sillyaction, createFloorReal, localStorfunc)).toEqual(empty);
	})
	it("calls the createFloorFromSeed function with the correct arguments when passed update_Char with isnew=false", () => {
		GameBoardReducer(empty, action, createFloorFromSeed, localStorfunc)
		expect(createFloorFromSeed).toHaveBeenCalledTimes(1);
	})
	it('returns a basic gameBoard object when passed an update_char action with isNew=false in payload', ()=> {
		expect(GameBoardReducer(empty, action, createFloorReal, localStorfunc).currentFloor).toBe(0);
	});
	it("returns a map property on the gameBoard Object, which contains a 3d array with a wall object in the corner when passed  update_Char with isNew=false", () =>{
		expect(GameBoardReducer(empty, action, createFloorReal, localStorfunc).dungeon[0][0][0]).toEqual(wall);
	})
})
describe("Character move functionality - cases: wall, emptySpace", () => {
	const checkVisfunc = jest.fn()
	const actionFail= {
		type: CHAR_MOVE,
		payload: {
			success:false,
			prevHeroCoords: [1,1],
			newHeroCoords: [1,1],
			destinationContents: wall,
			combat:false,
			combatDetails: {},
			attemptedDirection: "North",
			character: {...charWithStats}
		}
	}
	
	const actionSucceed = {
		type: CHAR_MOVE,
		payload: {
			success: true,
			prevHeroCoords: [2,2],
			newHeroCoords: [1,2],
			destinationContents: emptySpace,
			combat: false,
			combatDetails: {},
			attemptedDirection: "North",
			character: {...charWithStats}
		}
	}
	it("returns state with hero unmoved if payload.success=false", () => {
		const newdungeon = GameBoardReducer(mapObject3x3, actionFail, createFloorReal, localStorfunc)
		expect(newdungeon.dungeon[0][1][1]).toEqual({...hero})
	});
	const prevState = {...mapObject3x3}
		prevState.currentFloor = 1;
		const newdungeon = GameBoardReducer(prevState, actionSucceed, createFloorReal, localStorfunc)
	it("puts the hero in new coordinates if payload.success=true", () => {
		
		expect(newdungeon.dungeon[1][1][2]).toEqual({...hero, visible:true})
	});
	it("empties out old coordinates if payload.success=true", () => {
		expect(newdungeon.dungeon[1][2][2]).toEqual({...emptySpace, visible:true})
	})
})

describe("localSave functionality", () => {
	it("will perform localSave on CHAR_MOVE", ()=>{
		const actionFail= {
			type: CHAR_MOVE,
			payload: {
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: wall,
				combat:false,
				combatDetails: {},
				attemptedDirection: "North"
			}
		}
		localStorfunc.mockClear()
		GameBoardReducer(mapObject3x3, actionFail, createFloorReal, localStorfunc)
		expect(localStorfunc).toHaveBeenCalled()
	})
})

describe("LoadGame functionality", () => {
	it("loads a game", ()=> {
		const action= {
			type:LOAD_GAME,
			payload: {
				character: "test1",
				messages: "test2",
				gameBoard: mapObject3x3
			}
		}
		expect(GameBoardReducer({}, action)).toEqual(mapObject3x3);
	})
})