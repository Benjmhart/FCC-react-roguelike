/*global expect jest*/
//takes in messages array from payloads in move-actions, which should generate all messages

import MessagesReducer from "../../reducers/reducer_messages";
import { UPDATE_CHAR, CHAR_MOVE, LOAD_GAME } from "../../actions/actionTypes";
import { wall, emptySpace } from "../../assets/mapObjects"
import { getLVLup, getWin, getDead, getHealthItem, getItemDrop, getNothing, getNoKill } from "../../mockObjects/combatObjects"
import enemies from "../../assets/enemies"

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
describe("combat functionality", () => {
	
	//calls will resemble MessagesReducer([], action, localStorfunc)
	const actionWithDeath = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getDead,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
	const actionWithWin = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getWin,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
	const actionWithGetNothing = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getNothing,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
	const actionWithGetNoKill = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getNoKill,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
    };
	const actionWithGetHealthItem = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getHealthItem,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
	const actionWithGetEquipment = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getItemDrop
       ,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
	const actionWithGetLVLup = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getLVLup,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
	const empty = []
	
	it("wipes state when passed a death object", () => {
		const result = MessagesReducer(['diabeetus'], actionWithDeath, localStorfunc)
		expect(result).toEqual([])
	})
	it("wipes state with passed a win object", () => {
		const result = MessagesReducer(['diabeetus'], actionWithWin, localStorfunc)
		expect(result).toEqual([])
	})
	it("provides a message when you do damage and receive damage (received damage case)", () => {
		const result = MessagesReducer(['diabeetus'], actionWithGetNoKill, localStorfunc)
		expect(result[result.length-2]).toBe('the goblin at [2,1] hit you for 5')
	})
	//add case for multiple successful enemy attacks
	//add case for dodge
	//add case for enemy miss
	it("provides a message when you do damage and receive damage (dealt damage case)", () => {
		const result = MessagesReducer(['diabeetus'], actionWithGetNoKill, localStorfunc)
		expect(result[result.length-1]).toBe('you hit the goblin at [2,1] for 8')
	})
	//add case for multiple successful hits
	//add case for enemy dodge
	//add case for miss
	it("provides a message when you kill something", () => {
		const result = MessagesReducer(['diabeetus'], actionWithGetNothing, localStorfunc)
		expect(result[result.length-1]).toBe('you killed the goblin at [2,1]')
	})
	it("provides a message when you get a health item", () => {
		const result = MessagesReducer(['diabeetus'], actionWithGetHealthItem, localStorfunc)
		expect(result[result.length-1]).toBe('received a mega sandwich')
	})
	it("provides a message when you get an equipment item", () => {
		const result = MessagesReducer(['diabeetus'], actionWithGetEquipment, localStorfunc)
		expect(result[result.length-1]).toBe('received a glasses')
	})
	it("provides a message when you get a levelup", () => {
		const result = MessagesReducer(['diabeetus'], actionWithGetLVLup, localStorfunc)
		expect(result[result.length-1]).toBe('you gained a level! next level at 160 EXP')
	})
	
	
})