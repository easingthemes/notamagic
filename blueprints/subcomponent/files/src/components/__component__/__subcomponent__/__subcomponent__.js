import React from 'react';
import classes from './<%= name %>.scss';

/**
 * React component implementation.
 *
 * @author <%= author %>
 * @namespace ReactApp
 * @class <%= name %>
 * @extends ReactApp
 */
export class <%= name %> extends React.Component {

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
			<div className={classes['<%= name %>']}>
				<h1>{data.name}</h1>
			</div>
		);
	}
}

<%= name %>.propTypes = {
	str: React.PropTypes.string,
	oneof: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	])
};

<%= name %>.defaultProps = {
	str: 'string',
	oneof: 0
};

export default <%= name %>;
