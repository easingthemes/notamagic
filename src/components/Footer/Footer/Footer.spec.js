import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Footer from 'components/Footer';

function shallowRender (component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
	return shallowRender(<Footer {...props} />);
}

describe('(Component) Footer', () => {
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
		expect(Footer).to.exist;
	});

	it('should render without problems', () => {
		expect(_component).to.exist;
	});

	it('should render as a <footer>.', () => {
		expect(_component.type).to.equal('footer');
	});
});
