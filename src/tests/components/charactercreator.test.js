import React from "react";
import { shallow } from "enzyme";
import newCharacter from '../../mockObjects/newCharacter';
import oldCharacter from '../../mockObjects/oldCharacter';
//prepare to turn into NAMED import as soon as this becomes a container
import CharacterCreator from "../../components/CharacterCreator";

describe("Character Creator", () => {
	it("renders without crashing", () => {
		shallow(<CharacterCreator />);
	});

});

/*
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
