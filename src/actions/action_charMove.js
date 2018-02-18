//does all the action for any move attempt including combat or hitting a wall,  also carries an array of messages
//does all the action for any move attempt including combat or hitting a wall,  also carries an array of messages
import { CHAR_MOVE } from "./actionTypes";
import processCombat from "../helpers/processCombat"

export default function(keycode, floor, heroCoordsArr, character) {
  if (
    keycode !== 37 &&
    keycode !== 39 &&
    keycode !== 38 &&
    keycode !== 40 &&
    keycode !== 65 &&
    keycode !== 68 &&
    keycode !== 87 &&
    keycode !== 83
  ) {
    return { type: "NO_ACTION" };
  }
  const action = { type: CHAR_MOVE, payload: {} };
  const pl = action.payload;
  if (keycode === 37 || keycode === 65) {
    pl.attemptedDirection = "West";
  }
  if (keycode === 39 || keycode === 68) {
    pl.attemptedDirection = "East";
  }
  if (keycode === 38 || keycode === 87) {
    pl.attemptedDirection = "North";
  }
  if (keycode === 40 || keycode === 83) {
    pl.attemptedDirection = "South";
  }
  if (pl.attemptedDirection === "West") {
    pl.destinationContents = floor[heroCoordsArr[0]][heroCoordsArr[1] - 1];
  }
  if (pl.attemptedDirection === "East") {
    pl.destinationContents = floor[heroCoordsArr[0]][heroCoordsArr[1] + 1];
  }
  if (pl.attemptedDirection === "North") {
    pl.destinationContents = floor[heroCoordsArr[0] - 1][heroCoordsArr[1]];
  }
  if (pl.attemptedDirection === "South") {
    pl.destinationContents = floor[heroCoordsArr[0] + 1][heroCoordsArr[1]];
  }
  if (!pl.attemptedDirection) {
    return;
  }
  if (pl.destinationContents.contains === "wall") {
    pl.success = false;
    pl.combat = false;
    pl.combatDetails = {};
  }
  if (pl.destinationContents.contains === "dirtWall") {
    pl.success = false;
    pl.combat = false;
    pl.combatDetails = {};
  }
  if (pl.destinationContents.contains === "enemy") {
    pl.success = false;
    pl.combat = true;
    pl.combatDetails = {};
  }
  if (pl.destinationContents.contains === "none") {
    pl.success = true;
    pl.combat = false;
    pl.combatDetails = {};
  }
  if (!pl.success) {
    pl.newHeroCoords = heroCoordsArr;
  }
  //combat occurs
  if(pl.success===false){
    pl.combatDetails = processCombat(character, heroCoordsArr, pl.attemptedDirection, floor)
  }
  if(pl.combatDetails.received){pl.combat = true}

  if (pl.success && pl.attemptedDirection === "West") {
    pl.newHeroCoords = [heroCoordsArr[0], heroCoordsArr[1] - 1];
  }
  if (pl.success && pl.attemptedDirection === "East") {
    pl.newHeroCoords = [heroCoordsArr[0], heroCoordsArr[1] + 1];
  }
  if (pl.success && pl.attemptedDirection === "North") {
    pl.newHeroCoords = [heroCoordsArr[0] - 1, heroCoordsArr[1]];
  }
  if (pl.success && pl.attemptedDirection === "South") {
    pl.newHeroCoords = [heroCoordsArr[0] + 1, heroCoordsArr[1]];
  }
  pl.prevHeroCoords = heroCoordsArr;
  pl.character = character;
  return action;
}
