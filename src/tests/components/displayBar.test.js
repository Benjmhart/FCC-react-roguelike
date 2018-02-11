/*global expect*/
import React from 'react';
import { shallow } from 'enzyme'
import DisplayBar from "../../components/DisplayBar"

const full = {
	min: 80,
	max: 80
}

describe("basic DisplayBar functions", () => {
	it("renders without crashing", () => {
		shallow(<DisplayBar min={full.min} max={full.max} color="blue" label="PP"/>)
	})
	const tree = shallow(<DisplayBar min={full.min} max={full.max} color="blue" label="PP"/> )
	const tree2 = shallow(<DisplayBar min={full.min / 2} max={full.max} color="blue" label="PP"/>)
	it("renders a div with class display-bar", () => {
		expect(tree.find("div.display-bar").length).toBe(1)
	})
	it("renders a div called bar-full with background white", () => {
		expect(tree.find('div.bar-full').prop('style').backgroundColor).toBe("white")
	})
	it("renders a div called bar-actual with background=color prop",() => {
		expect(tree.find('div.bar-actual').prop('style').backgroundColor).toBe("blue") 
	})
	it("renders a div called bar-actual with width % = min/max", () => {
		
		expect(tree.find('div.bar-actual').prop('style').width).toBe("100%") 
		expect(tree2.find('div.bar-actual').prop('style').width).toBe("50%") 
		
	})
	it("renders a p tag with class display-bar-text 'min/max' as text", () => {
		expect(tree.find('p.display-bar-text').text()).toBe("PP: 80/80")
		expect(tree2.find('p.display-bar-text').text()).toBe("PP: 40/80")
	})
})