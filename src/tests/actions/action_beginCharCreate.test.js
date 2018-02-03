//fires a generic action with no payload for the character reducer to start up
/*global expect */
import BeginCharCreate from "../../actions/action_beginCharCreate";
import newCharacter from "../../mockObjects/newCharacter";
import { CREATE_CHARACTER } from "../../actions/actionTypes";

it("it passes the newGame action correctly", () => {
  const action = BeginCharCreate();
  expect(action.type).toBe(CREATE_CHARACTER);
  expect(action.payload).toBe(newCharacter);
});
