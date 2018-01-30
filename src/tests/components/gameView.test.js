import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import GameView from "../../components/GameView";

describe("GameView", () => {
	it("renders without crashing", () => {
		shallow(<GameView />);
	});
	it("Contains a HUD component");
	it("contains a Map component");
});
