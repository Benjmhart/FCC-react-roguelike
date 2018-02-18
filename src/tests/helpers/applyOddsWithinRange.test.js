/*global expect*/
import applyOddsWithinRange from "../../helpers/applyOddsWithinRange";

describe("basic applyOddsWithinRange operations", () => {
		const result = applyOddsWithinRange(20, 30)
	it("returns a number higher than the first arguement", () => {
		expect(result >= 20).toBe(true)
	})
	it("returns a number lower than the second argument", () => {
		expect(result <= 30).toBe(true)
	})
})