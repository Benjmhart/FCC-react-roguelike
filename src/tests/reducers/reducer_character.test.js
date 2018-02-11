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
  UPDATE_CHAR
} from "../../actions/actionTypes";
import newCharacter from "../../mockObjects/newCharacter";
import oldCharacter from "../../mockObjects/oldCharacter";

jest.mock("../../index.js", () => "root");

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
    const newstate = CharacterReducer(newCharacter,action7);
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
	  const newstate = CharacterReducer(modcharacternew, action7)
	  expect(newstate).toEqual(modcharacter)
  })
});

/*
it("passes any changes to the character  into state when passed a MOVE_CHARACTER action");
*/
