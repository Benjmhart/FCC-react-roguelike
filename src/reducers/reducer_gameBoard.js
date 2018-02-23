import createFloorFromSeed from "../helpers/createFloorFromSeed";
import { UPDATE_CHAR, CHAR_MOVE, LOAD_GAME } from "../actions/actionTypes";
import { hero, emptySpace } from "../assets/mapObjects";
import removeAndSetLocalStorage from "../helpers/removeAndSetLocalStorage";
import checkVisible from "../helpers/checkVisible";
import enemiesMove from "../helpers/enemiesMove";

const startingpoint = [50, 50];

export default function(
  state = {},
  action,
  createFloor = createFloorFromSeed,
  localStor = removeAndSetLocalStorage,
  checkVis = checkVisible
) {
  switch (action.type) {
    case UPDATE_CHAR: {
      if ("isNew" in action.payload) {
        const newState = {
          currentFloor: 0,
          dungeon: []
        };
        const floor = createFloor(newState.currentFloor);
        newState.dungeon.push(floor);
        //helper function to change visibility and set explored flags
        const newStateWithVisible = checkVis(
          startingpoint,
          newState,
          action.payload.perception
        );
        localStor(newStateWithVisible, "gameBoard");
        return newStateWithVisible;
      }
      return state;
    }
    //case for character_move action
    case CHAR_MOVE: {
      //this will eventually handle creature movement & combat
      if (action.payload.success === false) {
        const newState = { ...state };
        newState.dungeon[newState.currentFloor] = enemiesMove(
          newState.dungeon[newState.currentFloor],
          action.payload.prevHeroCoords
        );
        if(action.payload.combat){
          if(action.payload.combatDetails.death || action.payload.combatDetails.win){
            localStor(null, "gameBoard", true)
            return {}
          }
          action.payload.combatDetails.dealt.forEach(dealtItem => {
            newState.dungeon[newState.currentFloor][dealtItem.target.coords[0]][dealtItem.target.coords[1]].HP =  newState.dungeon[newState.currentFloor][dealtItem.target.coords[0]][dealtItem.target.coords[1]].HP - dealtItem.damage
            if(dealtItem.kill){
              newState.dungeon[newState.currentFloor][dealtItem.target.coords[0]][dealtItem.target.coords[1]] = { contains:"none", visible:true, explored:"true" }
            }
          })
        }
        localStor(newState, "gameBoard");
        return newState;
      }
      //handle stairs here - NEVER move character directly onto stairs (potentially overwrite stairs)
      if(action.payload.destinationContents.contains==="stairs"){
        const newState = {...state}
        newState.currentFloor ++
        const newFloor = createFloor(newState.currentFloor)
        newState.dungeon.push(newFloor)
        const newStateWithVisible = checkVis(
          startingpoint,
          newState,
          action.payload.character.truePER
        );
        localStor(newStateWithVisible, "gameBoard");
        return newStateWithVisible;
      }
      const newCoords = action.payload.newHeroCoords;
      const oldCoords = action.payload.prevHeroCoords;
      const newState = { ...state };
      newState.dungeon[newState.currentFloor][oldCoords[0]][oldCoords[1]] = {
        ...emptySpace
      };
      newState.dungeon[newState.currentFloor][newCoords[0]][newCoords[1]] = {
        ...hero
      };
      //helper function to change visibility and set explored flags
      newState.dungeon[newState.currentFloor] = enemiesMove(
        newState.dungeon[newState.currentFloor],
        newCoords
      );
      const newStateWithVisible = checkVis(
        newCoords,
        newState,
        action.payload.character.truePER
      );
      localStor(newStateWithVisible, "gameBoard");
      return newStateWithVisible;
    }
    case LOAD_GAME:
      return action.payload.gameBoard;
    default:
      return state;
  }
}
