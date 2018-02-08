import { SET_SIZE}  from "./actionTypes";

export default function (w, h) {
	return {
		type: SET_SIZE,
		payload: {
			w, h
		}
	}
}