/*global expect jest*/
import createFloorFromSeed, { floorSize, startingPoint } from "../../helpers/createFloorFromSeed";
import { wall, hero, emptySpace } from "../../assets/mapObjects";

describe("createFloorFromSeed basic functions", () => {
	it("builds a 2D array with walls at perimeter - test 1 - uppper left", () => {
		
		expect(createFloorFromSeed()[0][0]).toEqual(wall)
	})
	it("builds a 2D array with walls at perimeter - test 2 - lower left", () => {
		expect(createFloorFromSeed()[floorSize-1][0]).toEqual(wall)
	})
	it("builds a 2D array with walls at perimeter - test 3 - upper right", () => {
		
		expect(createFloorFromSeed()[0][floorSize-1]).toEqual(wall);
	})
	
	it("builds a 2D array with walls at perimeter - test 4 - lower right", () => {
		expect(createFloorFromSeed()[floorSize-1][floorSize-1]).toEqual(wall)
	})
	it("builds a 2D array and places the hero at a starting point", () => {
		expect(createFloorFromSeed()[startingPoint][startingPoint]).toEqual(hero);
	})
	//add snapshot tests of a particular seed
})