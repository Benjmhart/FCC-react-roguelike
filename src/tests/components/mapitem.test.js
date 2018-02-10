/*global expect*/
// simple component that renders with different backgrounds and favicons depending on the content prop it receives

//has the following props passed from parent(booleans):
/*
disbool - marks as disabled or invisible
contents - object which .contains "hero", "wall", "enemy", "none", "stairs" etc.
(enemy) - this takes an object so that it can filter by type
*/

import React from 'react'
import { shallow } from 'enzyme'
import MapItem from '../../components/MapItem'
import { wall, hero, emptySpace } from '../../assets/mapObjects'

describe("gets the right classes with a variety of props", () => {
	it("produces a disabled div if disbool=true", ()=>{
		const tree = <MapItem disbool={true} />
		expect(shallow(tree).find('.map-item.disabled').length).toBe(1);
	})
	it("produces a hero div if passed a hero", () => {
		expect(shallow(<MapItem contents={hero} />).find('.map-item.hero').length).toBe(1);
	})
	it("produces a wall div if passed a wall", () => {
		expect(shallow(<MapItem contents={wall} />).find('.map-item.wall').length).toBe(1);
	})
	it("produces a none div if passed a none", () => {
		expect(shallow(<MapItem contents={emptySpace} />).find('.map-item.none').length).toBe(1);
	})
})