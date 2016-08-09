import React from 'react';
import data from '../data';
import classes from './Loader.scss';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class Loader
 * @extends ReactApp
 */
export class Loader extends React.Component {

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

	/*
	* @method renderLoader
	* @returns {XML}
	* @public
	*/
	renderLoader () {

		var divStyle = {
				minHeight: this.props.height + 'px'
			};

		return (
			<div ref="loaderInner" className="Loader" style={divStyle}>
				<i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
			</div>
		);
	}

	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		return (
			this.renderLoader()
		);
	}
}

Loader.propTypes = {
	height: React.PropTypes.number
};

Loader.defaultProps = {
	height: 50
};

export default Loader;
