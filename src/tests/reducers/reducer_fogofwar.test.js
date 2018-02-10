/*global expect*/
import FogOfWarReducer from "../../reducers/reducer_fogofwar";

describe("fogofwar reducer basic function without toggle", () => {
	it("returns true by default", () => {
		const action = {
			type: "SILLY_ACTION",
			payload:false
		}
		expect(FogOfWarReducer(true, action)).toBe(true)
	})
})
