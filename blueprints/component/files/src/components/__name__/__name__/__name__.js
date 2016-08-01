import React from 'react';
import data from '../data';
import classes from './<%= pascalEntityName %>.scss';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class <%= pascalEntityName %>
 * @extends ReactApp
 */
export class <%= pascalEntityName %> extends React.Component {

	//------------------------------------------------------------------------------------------------------------------
	// React methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * Set the initial state
	 *
	 * @private
	 */
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true
		};
	}

	/**
	 * When component is mounted add the Change event listeners and get initial data
	 *
	 * @method componentDidMount
	 * @returns void
	 * @public
	 */
	componentDidMount () {

	}

	//------------------------------------------------------------------------------------------------------------------
	// Render methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		return (
			<div className={classes['<%= pascalEntityName %>']}>
				<h1>{data.name}</h1>
			</div>
		);
	}
}

<%= pascalEntityName %>.propTypes = {
	str: React.PropTypes.string,
	oneof: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	])
};

<%= pascalEntityName %>.defaultProps = {
	str: 'string',
	oneof: 0
};

export default <%= pascalEntityName %>;
