import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Paralax from 'components/Paralax';

function shallowRender (component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
	return shallowRender(<Paralax {...props} />);
}

describe('(Component) Paralax', () => {
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
		expect(Paralax).to.exist;
	});

	it('should render without problems', () => {
		expect(_component).to.exist;
	});
});
