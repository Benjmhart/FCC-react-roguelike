// takes the savedgame object and spits it into a payload with a character object and a map 3D array [FLOORS],[ROWS],[COLUMNS]

import { LOAD_GAME } from "./actionTypes";

export default function(savedGame) {
  return { type: LOAD_GAME, payload: savedGame };
}
