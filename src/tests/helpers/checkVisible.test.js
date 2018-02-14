/*global expect*/
import checkVisible from "../../helpers/checkVisible"
import mapObject3x3 from "../../mockObjects/mapObject3x3"
import { hero, emptySpace } from "../../assets/mapObjects"
mapObject3x3.currentFloor = 1
const floor = mapObject3x3.dungeon[mapObject3x3.currentFloor]

describe("basic checkVisible operation", () =>{
	
	const processedMap = checkVisible([2,2], mapObject3x3, 2)
	const newfloor = processedMap.dungeon[processedMap.currentFloor];
	it("renders a circular view", ()=>{
		const totalvisible = newfloor.reduce((total,row, x)=>{
			const subTotal = row.reduce((rowtotal, cell, y) => {
				if (cell.visible===true){return rowtotal+1}
				return rowtotal;
			},0)
			return subTotal+total;
		}, 0)
		expect(totalvisible).toBe(7)
	})
	newfloor[2][2]= { ...emptySpace }
	newfloor[2][3]={ ...hero }
	
	const processedMap2 = checkVisible([2,3], processedMap, 2)
	const newfloor2 = processedMap2.dungeon[processedMap2.currentFloor]
	it("marks previously viewed cells as explored and not visible", () => {
		const totalexplored = newfloor2.reduce((total, row, x)=>{
			const subTotal = row.reduce((rowtotal,cell, y) => {
				if (cell.visible===false &&cell.explored===true){return rowtotal+1}
				return rowtotal;
			}, 0)
			return subTotal+total
		}, 0)
		expect(totalexplored).toBe(3)
	})
})