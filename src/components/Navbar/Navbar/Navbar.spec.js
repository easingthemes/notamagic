import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Navbar from 'components/Navbar';

function shallowRender (component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
	return shallowRender(<Navbar {...props} />);
}

describe('(Component) Navbar', () => {
	let _component;
	let _props;

	beforeEach(function () {
		// _props = {
		// 	location: {
		// 		pathname: '/'
		// 	}
		// };
		_props = {};

		_component = shallowRenderWithProps(_props);
	});

	it('should have loaded.', () => {
		expect(Navbar).to.exist;
	});

	it('should render without problems', () => {
		expect(_component).to.exist;
	});

	it('should render as a <nav>.', () => {
		expect(_component.type).to.equal('nav');
	});
});
