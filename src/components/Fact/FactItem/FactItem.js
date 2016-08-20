import React from 'react';
import Counter from 'components/Counter';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class FactItem
 * @extends ReactApp
 */
const FactItem = (props) => (
	<div className="fact">
		<div className="fact-number timer">
			<span className="factor color-light">
				<Counter id={'counter-' + props.id} to={props.number} />
			</span>
		</div>
		<span className="fact-title color-light alpha7">
			{props.name}
		</span>
	</div>
);

FactItem.propTypes = {
	id: React.PropTypes.number,
	number: React.PropTypes.number,
	name: React.PropTypes.string
};

export default FactItem;
