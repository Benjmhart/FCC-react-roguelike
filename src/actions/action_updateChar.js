//takes in the new stat as an object, it wraps it up into an action with type UPDATE_CHAR
import { UPDATE_CHAR } from "./actionTypes";

export default function(object) {
  console.log(UPDATE_CHAR);
  console.log({ ...object });
  return {
    type: UPDATE_CHAR,
    payload: { ...object }
  };
}
