import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Carousel from 'components/Carousel';

function shallowRender (component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
	return shallowRender(<Carousel {...props} />);
}

describe('(Component) Carousel', () => {
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
		expect(Carousel).to.exist;
	});

	it('should render without problems', () => {
		expect(_component).to.exist;
	});

	it('should render as a <div>.', () => {
		expect(_component.type).to.equal('div');
	});
});
