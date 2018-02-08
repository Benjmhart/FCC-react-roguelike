/*global expect*/
import { SET_SIZE } from "../../actions/actionTypes";
import ScreenSizeReducer from "../../reducers/reducer_screenSize";

describe("basic reducer behaviour", () => {
		const prevstate = {
			w:100,
			h:100
		}
	it("returns previous state when passed irrelevant actions", () => {
		const sillyaction = {
			type:"SILLY",
			payload: {
				w:303,
				h:202
			}
		}
		expect(ScreenSizeReducer(prevstate, sillyaction)).toEqual(prevstate);
	})
	it("outputs a new state with w and h properties when passed the SET_SIZE action", () => {
		const action = {
			type: SET_SIZE,
			payload: {
				w: 102,
				h: 104
			}
		}
		expect(ScreenSizeReducer(prevstate, action)).toEqual(action.payload);
	})
})