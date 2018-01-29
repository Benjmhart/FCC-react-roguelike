/*global expect*/
import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import App from "../../components/App";

describe("App", () => {
	it("renders without crashing", () => {
		shallow(<App />);
	});

	it("renders and matches our snapshot", () => {
		const component = renderer.create(<App />);
		const tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
});
/*
import { shallow, mount, render  } from 'enzyme';
import { App } from "../../components/App";

describe("<App />", () => {
	it("renders <App /> component", () => {
		const component = shallow(<App />);
		expect(component).toHaveLength(1);
	});
});
*/
