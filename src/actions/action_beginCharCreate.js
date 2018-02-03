import newCharacter from "../mockObjects/newCharacter";
import { CREATE_CHARACTER } from "./actionTypes";

export default function() {
  return {
    type: CREATE_CHARACTER,
    payload: newCharacter
  };
}
