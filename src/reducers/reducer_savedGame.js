import { PRE_LOAD, CHAR_MOVE } from "../actions/actionTypes";

export default function(state = {}, action) {
  switch (action.type) {
    case PRE_LOAD:
      return action.payload;
    case CHAR_MOVE:
      if(action.payload){
        if(action.payload.combatDetails){
          if(action.payload.combatDetails.win || action.payload.combatDetails.death){
            return {}
          }
        }
      }
      return state;
    default:
      return state;
  }
}
