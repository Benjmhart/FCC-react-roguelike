/*global expect*/
import toggleFog from "../../actions/action_toggleFog";
import { TOGGLE_FOG } from "../../actions/actionTypes"

describe("basic toggleFog functions",()=>{
	it("fires a toggleFog action when it gets called", ()=>{
		expect(toggleFog()).toEqual({type:TOGGLE_FOG})
	})
})