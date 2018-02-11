import createFloorFromSeed from "../helpers/createFloorFromSeed";
import { UPDATE_CHAR, CHAR_MOVE } from "../actions/actionTypes";
import { hero, emptySpace } from "../assets/mapObjects";


export default function(state = {}, action, createFloor = createFloorFromSeed) {
  switch (action.type) {
    case UPDATE_CHAR: {
      if ("isNew" in action.payload) {
        const newState = {
          currentFloor: 0,
          dungeon: []
        };
        /*get seed function goes here and then is passed to createFloor*/
        const floor = createFloor();
        newState.dungeon.push(floor);
        return newState;
      }
      return state;
    }
    //case for character_move action
    case CHAR_MOVE: {
      //this will eventually handle creature movement
      if(action.payload.success === false){return state}
      //handle stairs here - NEVER move character directly onto stairs (potentially overwrite stairs)
      const newCoords = action.payload.newHeroCoords;
      const oldCoords = action.payload.prevHeroCoords;
      const newState = {...state}
      newState.dungeon[newState.currentFloor][oldCoords[0]][oldCoords[1]] = emptySpace;
      newState.dungeon[newState.currentFloor][newCoords[0]][newCoords[1]] = hero;
      return newState
    }
    
    default:
      return state;
  }
}
