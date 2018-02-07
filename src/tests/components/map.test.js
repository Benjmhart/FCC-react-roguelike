/*global expect*/

//automatic grid,   always renders hero coordinates at center, always finds the ODD maximum amount of cells amount of cells and renders them as grid items.
//uses character.coords prop to determine a beginning cell position and an ending cell position
//then moves the board around

//finds the hero on the board,  then gives each div in the grid a set of coordinates in relation to the hero
//if the board is length 9 and the hero is at position 5, then if the coordinates are lower than 0
//or greater than 9,  they will just render blank

import React from "react";
import { shallow } from "enzyme";
import Map from '../../components/Map'

describe("basic Map behaviours", () =>{
	it("renders without crashing", ()=>{
		shallow(<Map />)
	})
	const tree = shallow(<Map />);
	it("renders a div with classname map-component", () => {
		expect(tree.find('div.map-component').length).toBe(1);
	})
})