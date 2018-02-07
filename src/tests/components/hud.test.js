/*global expect*/
//contains a life bar, an experience bar,  a hero stats and hero inventory bar, messages crawl, option to turn fog of war off and on.
import React from "react";
import { shallow } from "enzyme";
import HUD from '../../components/HUD'

describe("basic Map behaviours", () =>{
	it("renders without crashing", ()=>{
		shallow(<HUD />)
	}) 
	const tree = shallow(<HUD />);
	it("renders a div with classname hud-component", () => {
		expect(tree.find('div.hud-component').length).toBe(1);
	})
})