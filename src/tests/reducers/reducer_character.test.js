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
  //cannot return a negative stat
  //cannot have a total stats greater than 30 if the character isNew=true
});

/*
it("passes any changes to the character  into state when passed a MOVE_CHARACTER action");
it("removes the isNew property on the character when passed a FINISH_CHARACTER action")
*/
