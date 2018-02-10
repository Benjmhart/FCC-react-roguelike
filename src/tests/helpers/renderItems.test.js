/*global expect jest*/
import { shallow } from 'enzyme'
import renderItems from "../../helpers/renderItems"
import mapObject3x3 from "../../mockObjects/mapObject3x3"
import { wall, hero, empty } from "../../assets/mapObjects"
import exampleArr from "../../mockObjects/viewArr"

jest.mock("../../index.js", () => "root");
jest.mock("../../components/MapItem.js", () => "MapItem");



const floor = mapObject3x3.dungeon[mapObject3x3.currentFloor];

/*
	takes viewArr, floor, maxX, maxY, perception
	runs a map on the view array, if either of the coordinates are less than zero, or 
	>= maxX for x or >= maxY for y -pass only disabled info to mapitem. 
	
	if the coordinates are such that x-herox + y-heroy are >= character.PER*-1 
	and <= character.PER then the cell is visible
	
	if the fogofwar setting is enabled, then it will render out the mapitem with the 
	visible class only if the cell is marked visible
*/

describe("basic functions of renderItems", () => {
	
	it("renders 25 total mapItem components", () => {
		const result = renderItems(exampleArr, floor, 0)
		const totalItems = result.reduce((total, row) => {
			const rowTotal = row.reduce((subtotal, cell) => {
				return subtotal +1
			}, 0)
			return total+rowTotal;
		}, 0)
		expect(totalItems).toBe(25);
	})
	it("given visibility 0, it renders 24 disabled mapItem components", () => {
		const result = renderItems(exampleArr, floor, 0)
		const totalDisabled = result.reduce((total, row) => {
			const rowTotal = row.reduce((subtotal, cell) => {
				const tree = shallow(cell)
				if(tree.prop('disbool')===true){return subtotal +1}
				return subtotal
			}, 0)
			return rowTotal+total;
		}, 0)
		expect(totalDisabled).toBe(24)
	})
	it("given visiblity 1, it renders 20 disabled mapItem components", ()=>{
		const result = renderItems(exampleArr, floor, 1)
		const totalDisabled = result.reduce((total, row) => {
			const rowTotal = row.reduce((subtotal, cell) => {
				if(shallow(cell).prop('disbool')===true){return subtotal +1}
				return subtotal
			}, 0)
			return rowTotal+total;
		}, 0)
		expect(totalDisabled).toBe(20)
	})
	it("given visibility 2, it renders 16 disabled mapItem components", () => {
		const result = renderItems(exampleArr, floor,  2)
		const totalDisabled = result.reduce((total, row) => {
			const rowTotal = row.reduce((subtotal, cell) => {
				if(shallow(cell).prop('disbool')===true){return subtotal +1}
				return subtotal
			}, 0)
			return rowTotal+total;
		}, 0)
		expect(totalDisabled).toBe(16)
	})
	it("given visibility 0 && fogofwar=false, it renders 16 disabled mapItem components", () => {
		const result = renderItems(exampleArr, floor, 0, false)
		const totalDisabled = result.reduce((total, row) => {
			const rowTotal = row.reduce((subtotal, cell) => {
				if(shallow(cell).prop('disbool')===true){return subtotal +1}
				return subtotal
			}, 0)
			return rowTotal+total;
		}, 0)
		expect(totalDisabled).toBe(16)
	})
	it("renders one hero component at result[2][2]", () => {
		const premonition = [[[2,2]]]
		const result = renderItems(exampleArr, floor, 0)
		const totalherocoords = result.reduce((total, row, x) => {
			const rowTotal = row.reduce((subtotal, cell, y) => {
				const tree = shallow(cell)
				if(tree.prop('contents')){
					if(tree.prop('contents').contains==="hero"){
						subtotal.push([x,y])
						return subtotal;
					}
				}
				return subtotal
			}, [])
			if(rowTotal.length > 0){total.push(rowTotal);}
			
			return total
		}, [])
		expect(totalherocoords).toEqual(premonition)
	})
	it("renders 8 wall components, given unimpared visibility", () => {
		const result = renderItems(exampleArr, floor, 0, false)
		const totalWalls = result.reduce((total, row) => {
			const rowTotal = row.reduce((subtotal, cell) => {
				const tree = shallow(cell)
				if(tree.prop('contents')){
					if(tree.prop('contents').contains==="wall"){return subtotal +1}
				}
				return subtotal
			}, 0)
			return rowTotal+total;
		}, 0)
		expect(totalWalls).toBe(8)
	});
})
	/*
	
	
	
	
	
	
	
	
	*/
