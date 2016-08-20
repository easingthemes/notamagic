import React from 'react';
import TestUtils from 'react-addons-test-utils';
import GoToTop from 'components/GoToTop';

function shallowRender (component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
	return shallowRender(<GoToTop {...props} />);
}

describe('(Component) GoToTop', () => {
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
		expect(GoToTop).to.exist;
	});

	it('should render without problems', () => {
		expect(_component).to.exist;
	});

	it('should render as a <a>.', () => {
		expect(_component.type).to.equal('a');
	});
});
