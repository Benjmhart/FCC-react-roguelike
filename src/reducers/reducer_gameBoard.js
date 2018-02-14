import createFloorFromSeed from "../helpers/createFloorFromSeed";
import { UPDATE_CHAR, CHAR_MOVE, LOAD_GAME } from "../actions/actionTypes";
import { hero, emptySpace } from "../assets/mapObjects";
import removeAndSetLocalStorage from "../helpers/removeAndSetLocalStorage";
import checkVisible from "../helpers/checkVisible"

const startingpoint = [50,50];

export default function(state = {}, action, createFloor = createFloorFromSeed, localStor = removeAndSetLocalStorage, checkVis = checkVisible) {
  switch (action.type) {
    case UPDATE_CHAR: {
      if ("isNew" in action.payload) {
        const newState = {
          currentFloor: 0,
          dungeon: []
        };
        /*get seed function goes here and then is passed to createFloor*/
        const floor = createFloor();
        newState.dungeon.push(floor);
        //helper function to change visibility and set explored flags
        const newStateWithVisible = checkVis(startingpoint, newState, action.payload.perception) 
        localStor(newStateWithVisible, "gameBoard")
        return newStateWithVisible
      }
      return state;
    }
    //case for character_move action
    case CHAR_MOVE: {
      //this will eventually handle creature movement & combat
      if(action.payload.success === false){
        localStor(state, "gameBoard")
        return state}
      //handle stairs here - NEVER move character directly onto stairs (potentially overwrite stairs)
      const newCoords = action.payload.newHeroCoords;
      const oldCoords = action.payload.prevHeroCoords;
      const newState = {...state}
      newState.dungeon[newState.currentFloor][oldCoords[0]][oldCoords[1]] = {...emptySpace};
      newState.dungeon[newState.currentFloor][newCoords[0]][newCoords[1]] = {...hero};
      //helper function to change visibility and set explored flags
      
      const newStateWithVisible = checkVis(newCoords, newState, action.payload.character.truePER) 
      localStor(newStateWithVisible, "gameBoard")
      return newStateWithVisible
    }
    case LOAD_GAME: 
      return action.payload.gameBoard
    default:
      return state;
  }
}
