/*global expect*/
import React from 'react';
import { shallow } from 'enzyme';
import InvDisplay from "../../components/InvDisplay";
import oldCharacter from "../../mockObjects/oldCharacter"
const fakeItem = {
	type: oldCharacter.armor,
	label: "Armor"
}

describe("basic InvDisplay functions", () => {
	it("renders without crashing", () => {
		shallow(<InvDisplay type={fakeItem.type} label={fakeItem.label} />)
	})
	const tree = shallow(<InvDisplay type={fakeItem.type} label={fakeItem.label} />)
	const tree2 = shallow(<InvDisplay type={oldCharacter.weapon} label="Weapon" />)
	it("renders a p tag with class inv-item that has the correct text", ()=>{
		expect(tree.find('p.inv-item').text()).toBe("Armor: khaki shirt")
	})
	it("renders attack values for weapons", () => {
		expect(tree2.find('p.inv-item').text()).toBe("Weapon: shovel 1-4 dmg")
	})
})