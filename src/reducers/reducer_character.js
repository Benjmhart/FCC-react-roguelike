import {
  CREATE_CHARACTER,
  LOAD_GAME,
  UPDATE_CHAR
} from "../actions/actionTypes";
import equipment from "../assets/equipment";
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
        newstate.armor = equipment[newstate.CLASS].armor[0];
        newstate.weapon = equipment[newstate.CLASS].weapon[0];
        newstate.shoes = equipment[newstate.CLASS].shoes[0];
        newstate.helmet = equipment[newstate.CLASS].helmet[0];
        newstate.ring = equipment[newstate.CLASS].ring[0];
        return newstate;
      }
      const keys = Object.keys(action.payload);
      keys.forEach(key => {
        newstate[key] = action.payload[key] >= 0 ? action.payload[key] : 0;
      });
      const sum =
        newstate.STR +
        newstate.AGI +
        newstate.WIS +
        newstate.PER +
        newstate.CHA +
        newstate.LUK;
      if (sum > 30 && state.isNew === true) {
        return state;
      }
      newstate.AVL = 30 - sum;
      return newstate;
    }
    default:
      return state;
  }
}
