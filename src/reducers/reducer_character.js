import {
  CREATE_CHARACTER,
  LOAD_GAME,
  UPDATE_CHAR
} from "../actions/actionTypes";
//need to expand to accomodate update character action

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_CHARACTER:
      return action.payload;
    case LOAD_GAME:
      return action.payload.character;
    case UPDATE_CHAR: {
      const newstate = { ...state };
      const keys = Object.keys(action.payload);
      keys.forEach((key, index) => {
        newstate[key] = action.payload[key];
      });
      console.log(newstate);
      const sum =
        newstate.STR +
        newstate.AGI +
        newstate.WIS +
        newstate.PER +
        newstate.CHA +
        newstate.LUK;
      newstate.AVL = 30 - sum;
      console.log(newstate);
      return newstate;
    }
    default:
      return state;
  }
}
