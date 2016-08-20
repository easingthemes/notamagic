import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Wellcome from 'components/Wellcome';

function shallowRender (component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
	return shallowRender(<Wellcome {...props} />);
}

describe('(Component) Wellcome', () => {
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
		expect(Wellcome).to.exist;
	});

	it('should render without problems', () => {
		expect(_component).to.exist;
	});
});
