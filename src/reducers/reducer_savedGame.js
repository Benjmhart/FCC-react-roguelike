import { PRE_LOAD } from "../actions/actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case PRE_LOAD:
      return action.payload;
    default:
      return state;
  }
}
