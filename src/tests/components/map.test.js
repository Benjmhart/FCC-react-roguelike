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
import viewArr from "../../mockObjects/viewArr"

const fogofwar=true

jest.mock("../../index.js", () => "root");
const heroCoords = [1, 1]

const makeViewfunc = jest.fn();
makeViewfunc.mockReturnValue(viewArr);
const getHerofunc = jest.fn();
getHerofunc.mockReturnValue(heroCoords);
const renderItemfunc = jest.fn();
const charMovefunc = jest.fn();

const testWindowSize = {
	w:100,
	h:100
}


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
		const tree2 = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} makeView={makeViewfunc} />)
		expect(makeViewfunc).toBeCalledWith(testWindowSize, heroCoords);
	})
	
})

describe("Map Behaviour with mocked getHero", () => {
	
	
	it("calls  gethero with the correct arguments", () => {
		const floor = mapObject3x3.dungeon[mapObject3x3.currentFloor]
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} getHero={getHerofunc}/>);
		//console.log(tree.debug());
		expect(getHerofunc).toBeCalledWith(floor);
	})
})
/*
describe("Map behaviours with no mocked helpers", () => {
	const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={false} />)
	console.log(tree.debug());
})
*/
//doesn't pass mocked renderItems
describe("map behaviours with mocked renderItems function", () => {
	it("calls renderItems", () => {
		shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} renderItem={renderItemfunc} />)
		expect(renderItemfunc).toHaveBeenCalled();
	})
})
describe("event listener function calls keycode and floor", () => {
	const floor = mapObject3x3.dungeon[mapObject3x3.currentFloor]
	it("fires the charMove action with argument 37 when the left key is pressed", () => {
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} charMove={charMovefunc} />)
		tree.find('.control-div').simulate('keyDown', {nativeEvent:{keyCode: 37}});
		expect(charMovefunc).toBeCalledWith(37, floor, heroCoords, oldChar);
		jest.clearAllMocks()
	})
	it("fires the charMove action with argument 65 when the A key is pressed", () => {
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} charMove={charMovefunc} />)
		tree.find('.control-div').simulate('keyDown', {nativeEvent:{keyCode: 65}});
		expect(charMovefunc).toBeCalledWith(65, floor, heroCoords, oldChar);
		jest.clearAllMocks()
	})
	it("fires the charMove action with argument 39 when the right key is pressed", () => {
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} charMove={charMovefunc} />)
		tree.find('.control-div').simulate('keyDown', {nativeEvent:{keyCode: 39}});
		expect(charMovefunc).toBeCalledWith(39, floor, heroCoords, oldChar);
		jest.clearAllMocks()
	})
	it("fires the charMove action with argument 68 when the D key is pressed", () => {
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} charMove={charMovefunc} />)
		tree.find('.control-div').simulate('keyDown', {nativeEvent:{keyCode: 68}});
		expect(charMovefunc).toBeCalledWith(68, floor, heroCoords, oldChar);
		jest.clearAllMocks()
	})
	it("fires the charMove action with argument 38 when the UP key is pressed", () => {
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} charMove={charMovefunc} />)
		tree.find('.control-div').simulate('keyDown', {nativeEvent:{keyCode: 38}});
		expect(charMovefunc).toBeCalledWith(38, floor, heroCoords, oldChar);
		jest.clearAllMocks()
	})
	it("fires the charMove action with argument 87 when the W key is pressed", () => {
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} charMove={charMovefunc} />)
		tree.find('.control-div').simulate('keyDown', {nativeEvent:{keyCode: 87}});
		expect(charMovefunc).toBeCalledWith(87, floor, heroCoords, oldChar);
		charMovefunc.mockClear()
	})
	it("fires the charMove action with argument 40 when the DOWN key is pressed", () => {
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} charMove={charMovefunc} />)
		tree.find('.control-div').simulate('keyDown', {nativeEvent:{keyCode: 40}});
		expect(charMovefunc).toBeCalledWith(40, floor, heroCoords, oldChar);
		jest.clearAllMocks()
	})
	it("fires the charMove action with argument 83 when the S key is pressed", () => {
		const tree = shallow(<Map screenSize={testWindowSize} gameBoard={mapObject3x3} character={oldChar} fogofwar={fogofwar} charMove={charMovefunc} />)
		tree.find('.control-div').simulate('keyDown', {nativeEvent:{keyCode: 65}});
		expect(charMovefunc).toBeCalledWith(65, floor, heroCoords, oldChar);
		jest.clearAllMocks()
	})
})
	