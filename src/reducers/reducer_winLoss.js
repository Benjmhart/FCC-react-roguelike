import { CHAR_MOVE } from "../actions/actionTypes";

const initialState = { winLoss: { win: false, death: false } };
export default function(state = initialState, action) {
  const newstate = { ...state };
  if (action.type === CHAR_MOVE && action.payload.combatDetails) {
    if (action.payload.combatDetails.win) {
      newstate.winLoss.win = true;
    }
    if (action.payload.combatDetails.death) {
      newstate.winLoss.death = true;
    }
  }
  return newstate;
}
