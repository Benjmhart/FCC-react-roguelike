// takes the savedgame object and spits it into a payload with a character object and a map

// map is an object with 2 values,  currentfloor and a map 3D array [FLOORS],[ROWS],[COLUMNS]
/*global expect*/
import loadGame from "../../actions/action_loadGame";
import { LOAD_GAME } from "../../actions/actionTypes";

it("returns its own argument as a payload key on an action object", () => {
  const action = loadGame("Testy McTesterson");
  expect(action.type).toBe(LOAD_GAME);
  expect(action.payload).toBe("Testy McTesterson");
});
