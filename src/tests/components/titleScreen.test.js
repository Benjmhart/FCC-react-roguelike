import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import TitleScreen from "../../components/TitleScreen";

describe("TitleScreen", () => {
	it("renders without crashing", () => {
		shallow(<TitleScreen />);
	});
	it("renders and matches our snapshot");
	it("will load a New Game Button");
	it("does not render Resume game button if hasSave prop is false");
	it("will load a resume game button if hasSave prop is true");
	it("calls begin char creator action when newgame is clicked");
	it("calls resume game action when resume game is clicked");
});
