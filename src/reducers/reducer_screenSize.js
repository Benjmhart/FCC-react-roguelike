import { SET_SIZE } from "../actions/actionTypes";

export default function(state = {}, action) {
  if (action.type === SET_SIZE) {
    return action.payload;
  }
  return state;
}
