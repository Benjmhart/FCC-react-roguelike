/*global expect jest*/

//automatic grid,   always renders hero coordinates at center, always finds the ODD maximum amount of cells amount of cells and renders them as grid items.
//uses character.coords prop to determine a beginning cell position and an ending cell position
//then moves the board around

//finds the hero on the board,  then gives each div in the grid a set of coordinates in relation to the hero
//if the board is length 9 and the hero is at position 5, then if the coordinates are lower than 0
//or greater than 9,  they will just render blank

import React from "react";
import { shallow } from "enzyme";
import { Map } from '../../components/Map';
import mapObject3x3 from "../../mockObjects/mapObject3x3";
import oldChar from "../../mockObjects/oldCharacter";

const fogofwar=true

jest.mock("../../index.js", () => "root");

const makeViewfunc = jest.fn();
const getHerofunc = jest.fn();
const renderItemfunc = jest.fn();

const testWindowSize = {
	w:100,
	h:100
}
const heroCoords = [1, 1]

//isn't passing mocked viewgenerator
describe("basic Map behaviours with mocked view generator function", () =>{
	it("renders without crashing", ()=>{
		shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} />)
		makeViewfunc.mockClear()
	})
	const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} />);
	it("renders a div with classname map-component", () => {
		expect(tree.find('div.map-component').length).toBe(1);
	})
	it("calls a function to create a view array with correct arguments", () => {
		const tree2 = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} />)
		expect(makeViewfunc).toBeCalledWith(testWindowSize, heroCoords);
	})
	
})
//doesn't pass mocked gethero
describe("Map Behaviour with mocked getHero", () => {
	
	
	it("calls  gethero with the correct arguments", () => {
		const floor = mapObject3x3.dungeon[mapObject3x3.currentFloor]
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} />);
		//console.log(tree.debug());
		expect(getHerofunc).toBeCalledWith(floor);
	})
})
describe("Map behaviours with non mocked view generator function", () => {
	const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={false} />)
	it("renders a certain number of wall divs given an initial state", () => {
		expect(tree.find('div.wall').length).toBe(8);
	})
	it("renders a single hero div at any given time", () => {
		expect(tree.find('div.wall').length).toBe(1);
	})
})

//doesn't pass mocked renderItems
describe("map behaviours with mocked renderItems function", () => {
	it("calls renderItems", () => {
		shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} />)
		expect(renderItemfunc).toHaveBeenCalled();
	})
})
	