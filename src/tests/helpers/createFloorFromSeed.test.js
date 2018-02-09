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
		const arr2D = createFloorFromSeed();
		const totalheroes = arr2D.reduce((result, row, x) => {
			const rowresult = row.reduce((subresult, cell, y) => {
				if(cell.contains==="hero") {
					subresult.push([x, y])
					return subresult
				}
				return subresult;
			}, [])
			if(rowresult.length > 0) {
				result.push(rowresult);
				return result
			}
			return result
		}, [])
		expect(totalheroes.length).toBe(1);
	});
	//add snapshot tests of a particular seed
})