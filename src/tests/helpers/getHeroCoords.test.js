/* global expect*/ 
import getHeroCoords from "../../helpers/getHeroCoords"
import mapObject3x3 from "../../mockObjects/mapObject3x3"

describe("basic getHeroCoords operation", () => {
	it("returns a single coordinate pair from a 2d array containing a hero", () =>{
		const testfodder = mapObject3x3.dungeon[0];
		const precognition = [1,1]
		expect(getHeroCoords(testfodder)).toEqual(precognition)
	})
})