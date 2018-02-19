import {
  CREATE_CHARACTER,
  LOAD_GAME,
  UPDATE_CHAR,
  CHAR_MOVE
} from "../actions/actionTypes";
import equipment from "../assets/equipment";
import trueStats from "../helpers/trueStats";
import removeAndSetLocalStorage from "../helpers/removeAndSetLocalStorage";
//need to expand to accomodate update character action

export default function(
  state = {},
  action,
  localStore = removeAndSetLocalStorage
) {
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
      //character is finalized in creator, create truestats
      if (action.payload.isNew === false) {
        const charWithTrueStats = trueStats(newstate);
        localStore(charWithTrueStats, "character");
        return charWithTrueStats;
      }
      //assigns stat during charactercreation
      const keys = Object.keys(action.payload);
      keys.forEach(key => {
        newstate[key] = action.payload[key] >= 0 ? action.payload[key] : 0;
      });
      //verifies nobody is cheating character creation
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
    case CHAR_MOVE: {
      //clone the state
      const newState = {...state}
      //update character with combat outcomes
      
      if(action.payload.combat){
        if(action.payload.combatDetails.death || action.payload.combatDetails.win){
          localStore(null, "character", true);
          return {}
        }
        //change HP by combat.totalDamage
        newState.HP = state.HP - action.payload.combatDetails.totalDamage;
        // change EXP by combat.totalEXP
        newState.EXP = state.EXP + action.payload.combatDetails.totalEXPGain
        //if statItem Drop,   adjust base stats/HP
        //if EquipItem drop,  change equipment
        action.payload.combatDetails.dealt.forEach(target => {
          if(target.healthDrop){
            console.log(target.healthDrop)
            const modKeys = Object.keys(target.healthDrop.mod)
            modKeys.forEach(key=>{
              newState[key] = newState[key] + target.healthDrop.mod[key]
            })
          }
          if(target.getEquipment){
            newState[target.equipDropType] = target.equipmentDrop
          }
        })
        //if LevelUp,  change base stats and heal
        if(action.payload.combatDetails.LVLmod){
          const LVLkeys = Object.keys(action.payload.combatDetails.LVLmod)
          LVLkeys.forEach(key => {
            newState[key] = newState[key] + action.payload.combatDetails.LVLmod[key];
          })
        }
      
      }
      const charWithTrueStats = trueStats(newState)
      localStore(charWithTrueStats, "character");
      return charWithTrueStats;
    }
    default:
      return state;
  }
}
