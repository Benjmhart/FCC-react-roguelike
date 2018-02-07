import createFloorFromSeed from "../helpers/createFloorFromSeed";
import { UPDATE_CHAR } from "../actions/actionTypes";

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
    default:
      return state;
  }
}
