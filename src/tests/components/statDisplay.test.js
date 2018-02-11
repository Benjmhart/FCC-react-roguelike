/*global expect*/

import React from 'react';
import { shallow } from 'enzyme';
import StatDisplay from "../../components/StatDisplay";

const fakeStat ={
	stat: 5,
	trueStat:10,
	label:"fake"
}

describe("basic StatDisplay functions", () => {
	it("renders without crashing", () => {
		shallow(<StatDisplay stat={fakeStat.stat} trueStat={fakeStat.trueStat} label={fakeStat.label} />)
	})
	const tree = shallow(<StatDisplay stat={fakeStat.stat} trueStat={fakeStat.trueStat} label={fakeStat.label} />)
	it("renders a p tag with contents 'label: truestat(stat)'", ()=>{
		expect(tree.find('p.stat-display').text()).toBe("fake: 10(5)");
	})
	it("renders a p tag without brackets and true stat if stat is not passed", () =>{
		const tree2 = shallow(<StatDisplay trueStat={fakeStat.trueStat} label={fakeStat.label} />)
		expect(tree2.find('p.stat-display').text()).toBe("fake: 10");
	})
})