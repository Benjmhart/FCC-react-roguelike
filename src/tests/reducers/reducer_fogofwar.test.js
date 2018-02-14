/*global expect*/
import FogOfWarReducer from "../../reducers/reducer_fogofwar";
import { TOGGLE_FOG } from "../../actions/actionTypes"

describe("fogofwar reducer basic function", () => {
	it("returns true by default", () => {
		const action = {
			type: "SILLY_ACTION",
			payload:false
		}
		expect(FogOfWarReducer(true, action)).toBe(true)
	})
		const action = {
			type: TOGGLE_FOG
		}
	it("returns the opposite of its previous state when it receives a TOGGLE_FOG action, case 1", () =>{
		expect(FogOfWarReducer(true, action)).toBe(false)
	})
	it("returns the opposite of its previous state when it receives a TOGGLE_FOG action, case 1", () =>{
		expect(FogOfWarReducer(false, action)).toBe(true)
	})
	
})
