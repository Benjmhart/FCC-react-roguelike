/*global expect*/
// gets the date,   runs a hash on it, outputs a string
//testable impure function
import generateSeed from "../../helpers/generateSeed"

describe("seed generation basics", () => {
	it("generates a randomized 40 number array", () => {
		expect(generateSeed(40).length).toBe(40);
	})
})