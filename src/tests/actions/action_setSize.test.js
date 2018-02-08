/*global expect*/
import setSize from "../../actions/action_setSize";
import { SET_SIZE } from "../../actions/actionTypes";

//takes in a width and a height and passes an action

describe("basic action functions", () => {
	it("returns an action object", () => {
		const w = 100
		const h = 100
		const result = {
			type:SET_SIZE,
			payload: {
				w:100,
				h:100
			}
		}
		expect(setSize(w,h)).toEqual(result);
	});
})