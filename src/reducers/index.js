import { combineReducers } from "redux";
import GameBoardReducer from "./reducer_gameBoard";
import CharacterReducer from "./reducer_character";
import SavedGameReducer from "./reducer_savedGame";
import MessagesReducer from "./reducer_messages";
import ScreenSizeReducer from "./reducer_screenSize";
import FogOfWarReducer from "./reducer_fogofwar";


const rootReducer = combineReducers({
  gameBoard: GameBoardReducer,
  character: CharacterReducer,
  savedGame: SavedGameReducer,
  messages: MessagesReducer,
  screenSize: ScreenSizeReducer,
  fogofwar: FogOfWarReducer
});

export default rootReducer;
