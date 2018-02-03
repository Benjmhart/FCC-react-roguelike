/*global expect jest*/
import React from "react";
import { shallow } from "enzyme";
import newCharacter from "../../mockObjects/newCharacter";
import oldCharacter from "../../mockObjects/oldCharacter";
import mapObject3x3 from "../../mockObjects/mapObject3x3";
import { App } from "../../components/App";

jest.mock("../../components/TitleScreen", () => "TitleScreen");
jest.mock("../../components/GameView", () => "GameView");
jest.mock("../../components/CharacterCreator", () => "CharacterCreator");
jest.mock("../../index.js", () => "root");

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
  it("renders titleScreen if gameboard and character do not exist", () => {
    const tree = shallow(<App />);
    expect(tree.find("TitleScreen").length).toBe(1);
    expect(tree.find("CharacterCreator").length).toBe(0);
    expect(tree.find("GameView").length).toBe(0);
  });
  it("renders character creator if character.isNew and the gameboard doesn't exist", () => {
    const tree = shallow(<App character={newCharacter} />);
    expect(tree.find("TitleScreen").length).toBe(0);
    expect(tree.find("CharacterCreator").length).toBe(1);
    expect(tree.find("GameView").length).toBe(0);
  });
  it("renders a GameView Component if gameboard exists and character isNewKey=false", () => {
    const tree = shallow(
      <App character={oldCharacter} gameBoard={mapObject3x3} />
    );
    expect(tree.find("TitleScreen").length).toBe(0);
    expect(tree.find("CharacterCreator").length).toBe(0);
    expect(tree.find("GameView").length).toBe(1);
  });
});
