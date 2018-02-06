

import createFloorFromSeed from "../helpers/createFloorFromSeed";
import { UPDATE_CHAR} from "../actions/actionTypes"

export default function(state = {}, action, createFloor = createFloorFromSeed) {
	switch(action.type){
		case UPDATE_CHAR: {
			if(action.payload.isNew){return state}
			const newState = {
				currentFloor: 0,
				dungeon: []
			}
			/*get seed function goes here and then is passed to createFloor*/
			const floor = createFloor();
			newState.dungeon.push(floor)
			return newState;
		}
		//case for character_move action
		default:
			return state;
	}
}
