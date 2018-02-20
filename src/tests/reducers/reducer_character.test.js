/*global expect jest*/

//inits with an empty object
//receives a load game or begin character creation action
//load game action should come with a character object in its payload
//import a blank character object,  if new game,  adds the blank character object to state
import _ from "lodash";
import CharacterReducer from "../../reducers/reducer_character";
import {
  CREATE_CHARACTER,
  LOAD_GAME,
  UPDATE_CHAR, 
  CHAR_MOVE
} from "../../actions/actionTypes";
import newCharacter from "../../mockObjects/newCharacter";
import oldCharacter from "../../mockObjects/oldCharacter";
import charWithStats from "../../mockObjects/charWithStats";
import { getLVLup, getWin, getDead, getHealthItem, getStatItem, getItemDrop, getNothing, getNoKill } from "../../mockObjects/combatObjects"
import enemies from "../../assets/enemies"

jest.mock("../../index.js", () => "root");
const localStorefunc = jest.fn();

describe("character reducer tests for initial state, LOAD_GAME and CREATE_CHARACTER actions", () => {
  it("returns an empty object when passed a nonrelevant action", () => {
    const action = {
      type: "something silly",
      payload: "you look like a monkey"
    };
    const empty = {};
    expect(_.isEmpty(CharacterReducer(empty, action))).toBe(true);
  });

  it("passes the character received as action.payload into state when passed a CREATE_CHARACTER action", () => {
    const empty = {};
    const action = {
      type: CREATE_CHARACTER,
      payload: newCharacter
    };
    expect(CharacterReducer(empty, action)).toEqual(newCharacter);
  });
  it("passes the character received as action.payLoad.Character into state when passed a LOAD_GAME action", () => {
    const empty = {};
    const action = {
      type: LOAD_GAME,
      payload: {
        character: oldCharacter
      }
    };

    expect(CharacterReducer(empty, action)).toEqual(oldCharacter);
  });
});

describe("testing for UPDATE_CHAR action", () => {
  const action = {
    type: UPDATE_CHAR,
    payload: { STR: 1 }
  };
  const newstate = CharacterReducer(newCharacter, action);
  it("can receive an UPDATE_CHAR action and return an updated character with changed stat", () => {
    expect(newstate.STR).toBe(1);
  });

  it("can receive an UPDATE_CHAR action and return an updated character with changed AVL", () => {
    expect(newstate.AVL).toBe(29);
  });
  it("cannot return a negative stat", () => {
    const action2 = {
      type: UPDATE_CHAR,
      payload: { STR: -1 }
    };
    const newstate2 = CharacterReducer(newCharacter, action2)
    expect(newstate2.STR).toBe(0);
  });
  it("cannot have a total stats greater than 30 if the character isNew=true", () => {
    const action3 = {
      type: UPDATE_CHAR,
      payload: { STR: 6 }
    };
    const modCharacter = {...newCharacter}
    modCharacter.STR=5;
    modCharacter.AGI=25;
    const newstate3 = CharacterReducer(modCharacter, action3);
    expect(newstate3.STR).toBe(5);
  });
  it("can have total stats greater than 30 if the character isNew=false", () => {
    const action4 = {
      type: UPDATE_CHAR,
      payload: { STR: 6 }
    };
    const modCharacter = {...oldCharacter}
    modCharacter.STR=5;
    modCharacter.AGI=25;
    const newstate4 = CharacterReducer(modCharacter, action4)
    expect(newstate4.STR).toBe(6);
  })
  it("will pass CLASS changes without changing stats", () =>{
    const action5 = {
      type: UPDATE_CHAR,
      payload: { CLASS: "barbarian" }
    }
    const newState = CharacterReducer(newCharacter, action5)
    expect(newState.CLASS).toBe("barbarian");
  });
  it("will select armor for rollout to match class selected", ()=>{
    const action6 = {
      type: UPDATE_CHAR,
      payload: { CLASS: "archaeologist" }
    }
      const newstate = CharacterReducer(newCharacter,action6)
      expect(newstate.armor).toEqual(oldCharacter.armor);
  })
  it("will select weapon for rollout to match class selected", ()=>{
    const action6 = {
      type: UPDATE_CHAR,
      payload: { CLASS: "archaeologist" }
    }
      const newstate = CharacterReducer(newCharacter,action6)
      expect(newstate.weapon).toEqual(oldCharacter.weapon);
  })
  
  it("will select shoes for rollout to match class selected", ()=>{
    const action6 = {
      type: UPDATE_CHAR,
      payload: { CLASS: "archaeologist" }
    }
      const newstate = CharacterReducer(newCharacter,action6)
      expect(newstate.shoes).toEqual(oldCharacter.shoes);
  })
  
  it("will select helmet for rollout to match class selected", ()=>{
    const action6 = {
      type: UPDATE_CHAR,
      payload: { CLASS: "archaeologist" }
    }
      const newstate = CharacterReducer(newCharacter,action6)
      expect(newstate.helmet).toEqual(oldCharacter.helmet);
  })
  
  it("will select ring for rollout to match class selected", ()=>{
    const action6 = {
      type: UPDATE_CHAR,
      payload: { CLASS: "archaeologist" }
    }
      const newstate = CharacterReducer(newCharacter,action6)
      expect(newstate.ring).toEqual(oldCharacter.ring);
  })
  it("will accept a payload with isNew:false from the finish button", ()=>{
    const action7 = {
      type:UPDATE_CHAR,
      payload: ({isNew:false})
    } 
    const newstate = CharacterReducer(newCharacter,action7,localStorefunc);
    expect(newstate.isNew).toBe(false)
  })
  it("will calculate truestats for when the isNew:false action is received as well", () => {
    const action7 = {
      type:UPDATE_CHAR,
      payload: ({isNew:false})
    } 
    const modcharacternew = {...oldCharacter}
    modcharacternew.isNew=true
    const modcharacter = {...oldCharacter}
    modcharacter.trueSTR=5
	  modcharacter.trueAGI=5
	  modcharacter.trueWIS=6
	  modcharacter.truePER=6
	  modcharacter.trueCHA=5
	  modcharacter.trueLUK=5
	  modcharacter.totalArmor=2
	  modcharacter.HP=16
	  modcharacter.HPMAX=16
	  modcharacter.LVL=1
	  modcharacter.nextLVL=80
	  const newstate = CharacterReducer(modcharacternew, action7, localStorefunc)
	  expect(newstate).toEqual(modcharacter)
    localStorefunc.mockClear();
	  
  })
});
describe("localStorage function", () =>{
  it("removes previous localStorage and writes new localStorage on every CHAR_MOVE", ()=> {
    
    const empty = {};
    const action = {
      type: CHAR_MOVE,
      payload: {}
    };
    CharacterReducer(oldCharacter, action, localStorefunc)
    expect(localStorefunc).toHaveBeenCalled();
    localStorefunc.mockClear();
  })
  it("removes previous localStorage and writes new localStorage on every UPDATE_CHAR", ()=> {
    
    const prevState = oldCharacter;
    const action = {
      type: UPDATE_CHAR,
      payload: { isNew:false, test: "localStorage-updatecharacter"}
    };
    CharacterReducer(prevState, action, localStorefunc)
    expect(localStorefunc).toHaveBeenCalled();
    localStorefunc.mockClear();
  })
})

describe("combat tests", () => {
  //create actions with getLVLup, getWin, getDead, getHealthItem, getEquipment, getNothing, getNoKill on them
  const actionWithNoKill = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getNoKill,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
    };
    const charForCombat = {...charWithStats}
    charForCombat.HP=50
    charForCombat.HPMAX=50
    
    const resultWithNoKill = CharacterReducer(charForCombat, actionWithNoKill, localStorefunc);
  it('reduces HP when attack received', ()=>{
    expect(resultWithNoKill.HP).toBe(30);
  })
  const actionWithEXPGain = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getNothing,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
  const resultWithExpGain = CharacterReducer(charForCombat, actionWithEXPGain, localStorefunc);
  it('changes exp on kill', () => {
    expect(resultWithExpGain.EXP).toBe(20)
  })
  
  const actionWithHealthItem = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getHealthItem,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
  const resultWithHealthItem = CharacterReducer(charForCombat, actionWithHealthItem, localStorefunc);
  it("changes HP for a health Item", () => {
    expect(resultWithHealthItem.HP).toBe(37);
  })
  const actionWithStatItem = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getStatItem,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
  const resultWithStatItem = CharacterReducer(charForCombat, actionWithStatItem, localStorefunc);
  it("changes Stats for a stat Item", () =>{
    expect(resultWithStatItem.STR).toBe(7)
  })
  
  const actionWithEquipItem = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getItemDrop
       ,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
  const resultWithEquipItem = CharacterReducer(charForCombat, actionWithEquipItem, localStorefunc);
  it("changes equipment and stats for an equipment Item", () => {
    expect(resultWithEquipItem.helmet.name).toBe("glasses")
  })
  
  const actionWithLVLup = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getLVLup,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
  const resultWithLVLup = CharacterReducer(charForCombat, actionWithLVLup, localStorefunc);
  it("changes stats on a levelup", () => {
    expect(resultWithLVLup.STR).toBe(7)
  })
  it("sets a new LVL on a levelup - truestats job", () => {
    expect(resultWithLVLup.LVL).toBe(2)
  })
  
  it("sets a new nextLVL on a levelup - truestats job", () => {
    expect(resultWithLVLup.nextLVL).toBe(160)
  })
  it("resets EXP amount on levelup -truestats?", () => {
    expect(resultWithLVLup.EXP).toBe(20)
  })
  it("resets health on a levelup - this may be truestats job", () => {
    expect(resultWithLVLup.HP).toEqual(resultWithLVLup.HPMAX)
  })
  const actionWithDeath = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getDead,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
  const resultWithDeath = CharacterReducer(charForCombat, actionWithDeath, localStorefunc);
  const emptyObj = {}
  it("clears the state on a death", () => {
    expect(resultWithDeath).toEqual(emptyObj);
  })
  
  const actionWithWin = {
      type: CHAR_MOVE,
      payload: {
       combat: true,
       combatDetails: getWin,
				success:false,
				prevHeroCoords: [1,1],
				newHeroCoords: [1,1],
				destinationContents: {...enemies[1], contains:"enemy", visible:true, explored:true},
				attemptedDirection: "North"
      }
  }
  const resultWithWin = CharacterReducer(charForCombat, actionWithWin, localStorefunc);
  it("clears the state on a win", () =>{
    expect(resultWithWin).toEqual(emptyObj)
  })
  it("trues the stats at the end of any combat", () => {
    expect (resultWithStatItem.trueSTR).toBe(charForCombat.trueSTR+2)
  })
})

/*
it("passes any changes to the character  into state when passed a MOVE_CHARACTER action");
*/
