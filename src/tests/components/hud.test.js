/*global expect jest*/
//contains a life bar, an experience bar,  a hero stats and hero inventory bar, messages crawl, option to turn fog of war off and on.
import React from "react";
import { shallow } from "enzyme";
import { HUD } from '../../components/HUD'
import charWithStats from "../../mockObjects/charWithStats"
//needs to know about character and messages
//needs to know how to calculate levels


jest.mock("../../index.js", () => "root");
jest.mock("../../components/StatDisplay", () => "StatDisplay");
jest.mock("../../components/InvDisplay", () => "InvDisplay");
jest.mock("../../components/DisplayBar", () => "DisplayBar");
jest.mock("../../components/MsgBox", () => "MsgBox");

describe("basic HUD behaviours", () =>{
	it("renders without crashing", ()=>{
		shallow(<HUD character={charWithStats} />)
	}) 
	const tree = shallow(<HUD character={charWithStats} />);
	it("renders a div with classname hud-component", () => {
		expect(tree.find('div.hud-component').length).toBe(1);
	})
	it("has a health bar and an experience bar", () => {
		expect(tree.find('DisplayBar').length).toBe(2)
	})
	it("renders 7 stat displays (one for each stat, plus totalArmor", () =>{
		expect(tree.find('StatDisplay').length).toBe(7)
	})
	it("renders 5 InvDisplays", () => {
		expect(tree.find('InvDisplay').length).toBe(5)	
	})
	it("renders a MsgBox", () => {
		expect(tree.find('MsgBox').length).toBe(1)
	})
})