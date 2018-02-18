/*global expect*/
import applyOddsBool from "../../helpers/applyOddsBool"
const anything = Math.round(Math.random())

describe("basic applyoddsbool functions", () =>{
	it("returns a boolean", () => {
		expect(typeof applyOddsBool(anything)).toBe('boolean')
	})
	it("returns false if supplied 0", () => {
		expect(applyOddsBool(0)).toBe(false)
	})
	it("returns true if supplied 100", () => {
		expect(applyOddsBool(100)).toBe(true)
	})
})