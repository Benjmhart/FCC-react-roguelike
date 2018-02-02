/*global expect jest*/
import React from "react";
import { shallow } from "enzyme";
import { TitleScreen } from "../../components/TitleScreen";
import mockSave from "../../mockObjects/mockSave";



describe("TitleScreen", () => {
  it("renders without crashing", () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    shallow(<TitleScreen beginCharCreate={mock1} loadGame={mock2} />);
  });
  it("has className of title-screen", () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    const tree = shallow(
      <TitleScreen beginCharCreate={mock1} loadGame={mock2} />
    );
    expect(tree.is(".title-screen")).toBe(true);
  });

  it("has an h1 tag with content of Dungeon Game", () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    const tree = shallow(
      <TitleScreen beginCharCreate={mock1} loadGame={mock2} />
    );
    expect(tree.find("h1").length).toBe(1);
    expect(tree.find("h1").text()).toBe("Dungeon Game");
  });
  it("will load a New Game Button and a saved game button", () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    const tree = shallow(
      <TitleScreen beginCharCreate={mock1} loadGame={mock2} />
    );
    expect(tree.find("button.new-game-button").length).toBe(1);
    expect(tree.find("button.saved-game").length).toBe(1);
  });
  it("renders Resume game button disabled if savedGame prop is an empty object", () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    const emptysave = {};
    const tree = shallow(
      <TitleScreen
        beginCharCreate={mock1}
        loadGame={mock2}
        savedGame={emptysave}
      />
    );
    expect(tree.find("button.saved-game").prop("disabled")).toBe(true);
  });
  it("renders Resume game button with disabled=false if savedGame has usable contents", () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();
    const tree = shallow(
      <TitleScreen
        beginCharCreate={mock1}
        loadGame={mock2}
        savedGame={mockSave}
      />
    );
    console.log(tree.debug())
    console.log(mockSave);
    expect(tree.find("button.saved-game").prop("disabled")).toBe(false);
  });
  /*

	
	
	it("will load a resume game button if hasSave prop is true");
	it("calls begin char creator action when newgame is clicked");
	it("calls resume game action when resume game is clicked");
	*/
});
