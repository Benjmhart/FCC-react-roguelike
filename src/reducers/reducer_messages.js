import { CHAR_MOVE, UPDATE_CHAR } from "../actions/actionTypes";
import shrinkArray from "../helpers/shrinkArray";

export default function(state = [], action) {
	switch(action.type) {
		case UPDATE_CHAR: {
			const responseArr = [
				"Welcome to the dungeon!", 
				"Click the map and use arrows keys to move"]
			if(action.payload.perception < 2) {
				responseArr.push("Can't see anything? maybe perception is important")
			}
			return responseArr
		}
		case CHAR_MOVE: {
			const pl = action.payload
			const newState = [...state]
			if(pl.success===false){
				if(pl.destinationContents.contains==="wall"){
					
					newState.push("You bumped into a wall")
					
				}
				//combat messages will go here
			}
			if(pl.success===true){newState.push(`You walked ${pl.attemptedDirection} [${pl.newHeroCoords[0]},${pl.newHeroCoords[1]}]`)}
			const shrunkstate = shrinkArray(newState)
			return shrunkstate;
		}
		default:
			return state;
	}
}
