/*global expect jest*/
import React from 'react';
import { shallow } from 'enzyme';
import { MsgBox } from '../../components/MsgBox'

jest.mock("../../index.js", () => "root");

const MsgArr = [
	"Welcome to the dungeon!", 
	"Click the map and use arrows keys to move"
]

describe("basic MsgBox functions",() => {
	it("renders without crashing",() => {
		shallow(<MsgBox messages={MsgArr} />)
	})
	const tree = shallow(<MsgBox messages={MsgArr} />)
	it("renders a div with classname msg-container", () =>{
		expect(tree.find('div.msg-container').length).toBe(1)
	})
	it("displays one p tag with className msg-item for each item in the array it is passed", () => {
		expect(tree.find('p.msg-item').length).toBe(MsgArr.length)
	})
})