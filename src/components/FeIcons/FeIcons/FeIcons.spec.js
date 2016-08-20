import React from 'react';
import TestUtils from 'react-addons-test-utils';
import FeIcons from 'components/FeIcons';

function shallowRender (component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
	return shallowRender(<FeIcons {...props} />);
}

describe('(Component) FeIcons', () => {
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
		expect(FeIcons).to.exist;
	});

	it('should render without problems', () => {
		expect(_component).to.exist;
	});

	it('should render as a <ul>.', () => {
		expect(_component.type).to.equal('ul');
	});
});
