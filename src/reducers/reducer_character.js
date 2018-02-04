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
      if (action.payload.CLASS) {
        newstate.CLASS = action.payload.CLASS;
        return newstate;
      }
      const keys = Object.keys(action.payload);
      keys.forEach((key, index) => {
        newstate[key] = action.payload[key] >= 0 ? action.payload[key] : 0;
      });
      const sum =
        newstate.STR +
        newstate.AGI +
        newstate.WIS +
        newstate.PER +
        newstate.CHA +
        newstate.LUK;
      if (sum >= 30 && state.isNew === true) {
        return state;
      }
      newstate.AVL = 30 - sum;
      return newstate;
    }
    default:
      return state;
  }
}
