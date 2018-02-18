/*global expect*/
import applyOddsWithinArray from "../../helpers/applyOddsWithinArray"

const arr = [1,2,3]

///takes an array and randomly selects an item from that array

describe("basic applyOddsWithinArray function", () => {
	const result = applyOddsWithinArray(arr);
	it("returns a member of the array supplied to it", () => {
		const greatExpectation = (result === arr[0] || result === arr[1] || result === arr[2]) ? true : false
		expect(greatExpectation).toBe(true);
	})
})