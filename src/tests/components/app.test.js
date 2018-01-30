/*global expect*/
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import App from "../../components/App";

describe("App", () => {
	it("renders without crashing", () => {
		shallow(<App />);
	});
	it("renders titleScreen depending if gamboard does not exist");
	it("renders the character creator if character prop is blank template")
	it("renders a GameView Component if gameboard exists");
});
