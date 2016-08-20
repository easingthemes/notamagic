import React from 'react';
import TestUtils from 'react-addons-test-utils';
import InfoArea from 'components/InfoArea';

function shallowRender (component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
	return shallowRender(<InfoArea {...props} />);
}

describe('(Component) InfoArea', () => {
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
		expect(InfoArea).to.exist;
	});

	it('should render without problems', () => {
		expect(_component).to.exist;
	});

	it('should render as a <div>.', () => {
		expect(_component.type).to.equal('div');
	});
});
