/*global expect jest*/

import React from "react";
import { shallow } from "enzyme";
import newCharacter from "../../mockObjects/newCharacter";
import oldCharacter from "../../mockObjects/oldCharacter";
import { CharacterCreator } from "../../components/CharacterCreator";

jest.mock("../../index.js", () => "root");

describe("Character Creator", () => {
  it("renders without crashing", () => {
    shallow(<CharacterCreator />);
  });
  it("receives the character-creator class", () => {
    const tree = shallow(<CharacterCreator />);
    expect(tree.is(".character-creator")).toBe(true);
  });
  describe("form renderering & functions - strength attribute", () => {
    const tree = shallow(<CharacterCreator />);
    it("has a p tag to show the strength stat", () => {
      expect(tree.find("p.str").length).toBe(1);
    });
    //the p tag actually shows strength
    it("has a button to increase strength ", () => {
      expect(tree.find(".statbtn.str.increase").length).toBe(1);
    });
    it("the increase strength button has + as text ", () => {
      expect(tree.find(".statbtn.str.increase").text()).toEqual("+");
    });
    //the button actually calls the character update action once when clicked
    //the button calls the character update action with the correct arguments
    it("has a button to decrease strength", () => {
      expect(tree.find(".statbtn.str.decrease").length).toBe(1);
    });
    it("the increase strength button has + as text", () => {
      expect(tree.find(".statbtn.str.decrease").text()).toEqual("-");
    });
    //the button actually calls the character update action once when clicked
    //the button calls the character update action with the correct arguments
  });
});

/*


		
		// expect(tree.find('label.agi').length).toBe(1);
		// expect(tree.find('label.wis').length).toBe(1);
		// expect(tree.find('label.int').length).toBe(1);
		// expect(tree.find('label.per').length).toBe(1);
		// expect(tree.find('label.cha').length).toBe(1);
		// expect(tree.find('label.luk').length).toBe(1);
		// expect(tree.find('p.avl').length).toBe(1);
		// expect(tree.find('button.finish').length).toBe(1);
	it(
		"displays CharacterStats List items with forms connected to stats on the state.character.stats object "
	);
	it("allows the user to choose a class that changes equipment rollouts");
	it("does not allow the user to use fewer stat points than availlable");
	it("does not allow the user to use more than available stats");
	it(
		"calls a start game action when the user completes their character properly"
	);
*/
