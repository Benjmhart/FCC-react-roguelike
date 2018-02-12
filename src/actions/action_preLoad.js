/*global localStorage*/
// difficult to test due to interaction with localStorage
import { PRE_LOAD } from "./actionTypes"

export default function(){
	const action = {type: PRE_LOAD}
	const character = JSON.parse(localStorage.getItem("character"))
	const gameBoard = JSON.parse(localStorage.getItem("gameBoard"))
	const messages = JSON.parse(localStorage.getItem("messages"))
	action.payload = { character, gameBoard, messages}
	return action
}
