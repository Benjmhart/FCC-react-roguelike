import { CHAR_MOVE, UPDATE_CHAR } from "../actions/actionTypes";
import shrinkArray from "../helpers/shrinkArray";

export default function(state = [], action) {
	switch(action.type) {
		case UPDATE_CHAR: 
			return [
				"Welcome to the dungeon!", 
				"Click the map and use arrows keys to move",
				"Can't see anything? maybe perception is important"]
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
