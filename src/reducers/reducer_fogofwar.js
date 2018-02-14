import { TOGGLE_FOG } from "../actions/actionTypes"

export default function(state = true, action) {
	const opp = !state
	if(action.type===TOGGLE_FOG){
		return opp}
	return state
}