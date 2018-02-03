/*global expect jest*/

//inits with an empty object
//receives a load game or begin character creation action
//load game action should come with a character object in its payload
//import a blank character object,  if new game,  adds the blank character object to state
import _ from "lodash";
import CharacterReducer from "../../reducers/reducer_character";
import { CREATE_CHARACTER, LOAD_GAME } from "../../actions/actionTypes";
import newCharacter from "../../mockObjects/newCharacter";
import oldCharacter from "../../mockObjects/oldCharacter";

jest.mock("../../index.js", () => "root");

describe("character reducer positive tests", () => {
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
    console.log(action);
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
    console.log(action);

    expect(CharacterReducer(empty, action)).toEqual(oldCharacter);
  });
});

/*
it("passes any changes to the character  into state when passed a MOVE_CHARACTER action");
*/
