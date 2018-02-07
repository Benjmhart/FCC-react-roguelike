/*global expect*/
import React from "react";
import { shallow } from "enzyme";
import GameView from "../../components/GameView";

describe("GameView", () => {
	it("renders without crashing", () => {
		shallow(<GameView />);
	});
	
	const tree = shallow(<GameView />);
	it("renders a div with classname of game-view", () => {
		expect(tree.find('div.game-view').length).toBe(1);
	})
	it("Contains a HUD component", ()=>{
		expect(tree.find('HUD').length).toBe(1);
	});
	it("contains a Map component", () => {
		expect(tree.find('Map').length).toBe(1);
	});
});

