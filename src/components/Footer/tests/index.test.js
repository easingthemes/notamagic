import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Footer from '../index';

describe('<Footer />', () => {
	it('should render the copyright notice', () => {
		const renderedComponent = shallow(
			<Footer />
		);
		expect(renderedComponent.contains(
			<div className="navbar-brand-footer">Dragan Filipovic</div>
		)).toEqual(true);
	});
});
