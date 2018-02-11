/*global expect*/
import shrinkArray from "../../helpers/shrinkArray";

const longArray = ['1','2','3','4','5','6','7','8','9', '10', '11', '12', '13'];

describe("basic shrink function", ()=> {
	it("returns an array of length 10", ()=>{
		expect(shrinkArray(longArray).length <= 10).toBe(true)
	})
	it("maintains the last entries", () => {
		const result = shrinkArray(longArray);
		const lastPost = result[result.length - 1];
		expect(lastPost).toBe('13');
	})
})