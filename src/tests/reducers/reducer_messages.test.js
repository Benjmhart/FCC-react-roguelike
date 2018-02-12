/*global expect jest*/
//takes in messages array from payloads in move-actions, which should generate all messages

import MessagesReducer from "../../reducers/reducer_messages";
import { UPDATE_CHAR, CHAR_MOVE, LOAD_GAME } from "../../actions/actionTypes";
import { wall, emptySpace } from "../../assets/mapObjects"

const empty = [];
const localStorfunc = jest.fn();

describe("basic actions for Default, UPDATE_CHAR and CHAR_MOVE (no combat or abilities)", () => {
	it("returns empty object/prevstate when called with unrelated action", () => {
		const action = {type:"SILLY ACTION", payload: "silly"}
		
		expect(MessagesReducer(empty, action, localStorfunc)).toEqual(empty);
	});
	it("returns initial messages when it receives UPDATE_CHAR", () => {
		const action = {type: UPDATE_CHAR, payload:{}}
		const result = [
			"Welcome to the dungeon!", 
			"Click the map and use arrows keys to move"
		]
		expect(MessagesReducer(empty, action, localStorfunc)).toEqual(result);
	});
	it("returns an extra message if perception is < 2", () =>{
		const resultStr = "Can't see anything? maybe perception is important"
		const action = {type: UPDATE_CHAR, payload: {isNew:false, perception: 1}}
		const outcome = MessagesReducer(empty, action, localStorfunc)
		expect(outcome[outcome.length - 1]).toBe(resultStr)
	})
	it("returns a wall bump message if action shows a wall bump", () => {
		const action = {
			type: CHAR_MOVE,
			payload: {
				success: false,
				destinationContents: wall
			}
		}
		const result = "You bumped into a wall"
		const outcome = MessagesReducer(empty, action, localStorfunc);
		const lastPost = outcome[outcome.length-1];
		expect(lastPost).toBe(result);
	})
	it("Tells you what direction you went if you succeeded", () => {
		const action = {
			type: CHAR_MOVE,
			payload: {
				success: true,
				attemptedDirection: "North",
				newHeroCoords: [1,2]
			}
		}
		
		const result = "You walked North [1,2]"
		const outcome = MessagesReducer(empty, action, localStorfunc);
		const lastPost = outcome[outcome.length-1];
		expect(lastPost).toBe(result);
	})
	it("cannot return an array of length > 10", ()=>{
		const action = {
			type: CHAR_MOVE,
			payload: {
				success: true,
				attemptedDirection: "North",
				newHeroCoords: [1,2]
			}
		}
		
		const prevstate = ['1','2','3','4','5','6','7','8','9', '10', '11']
		const outcome = MessagesReducer(prevstate, action, localStorfunc);
		expect(outcome.length <= 10).toBe(true);
	})
	
})

describe("local storage functionality", () => {
	const prevstate= [
			"Welcome to the dungeon!", 
			"Click the map and use arrows keys to move"
		]
		const action = {
			type: CHAR_MOVE,
			payload: {
				success: true,
				attemptedDirection: "North",
				newHeroCoords: [1,2]
			}
		}
	const newState = [
			"Welcome to the dungeon!", 
			"Click the map and use arrows keys to move", 
			"You walked North [1,2]"
		]
		localStorfunc.mockClear();
	MessagesReducer(prevstate, action, localStorfunc)
	expect(localStorfunc).toHaveBeenCalled();
})
describe("loadGame functionality", () => {
	const action = {
		type: LOAD_GAME,
		payload: {
			character: "test1",
			gameBoard: "test2",
			messages: ["1", "2"]
		}
	}
	const premonition = ["1", "2", "you took a nap"]
	expect(MessagesReducer([], action)).toEqual(premonition);
})