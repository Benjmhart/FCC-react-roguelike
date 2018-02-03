import { CREATE_CHARACTER, LOAD_GAME } from "../actions/actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_CHARACTER:
      return action.payload;
    case LOAD_GAME:
      return action.payload.character;
    default:
      return state;
  }
}
