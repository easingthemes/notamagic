import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CommentsForm from 'components/CommentsForm';

function shallowRender (component) {
	const renderer = TestUtils.createRenderer();

	renderer.render(component);
	return renderer.getRenderOutput();
}

function shallowRenderWithProps (props = {}) {
	return shallowRender(<CommentsForm {...props} />);
}

describe('(Component) CommentsForm', () => {
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
		expect(CommentsForm).to.exist;
	});

	it('should render without problems', () => {
		expect(_component).to.exist;
	});

	it('should render as a <form>.', () => {
		expect(_component.type).to.equal('form');
	});
});
