import React from 'react';
/* eslint-disable no-unused-vars */
import classes from './Loader.scss';
/* eslint-enable no-unused-vars */

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class Loader
 * @extends ReactApp
 */
const Loader = (props) => {
	const divStyle = {
		minHeight: props.height + 'px'
	};

	return (
		<div className="Loader" style={divStyle}>
			<i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
		</div>
	);
};

Loader.propTypes = {
	height: React.PropTypes.number
};

Loader.defaultProps = {
	height: 50
};

export default Loader;
