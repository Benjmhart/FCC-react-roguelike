/*global expect*/
import { PRE_LOAD } from "../../actions/actionTypes";
import SavedGameReducer from "../../reducers/reducer_savedGame"

describe("preloade functionality", () => {
	it("preloads a game", ()=>{
		const action = {
			type: PRE_LOAD,
			payload: {
				character: "test1",
				gameBoard: "test2",
				messages: "test3"
			}
		}
		const empty = {}
		expect(SavedGameReducer(empty, action)).toEqual(action.payload);
	})
})