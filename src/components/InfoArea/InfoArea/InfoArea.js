import React from 'react';
import data from '../data';
import classes from './InfoArea.scss';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class InfoArea
 * @extends ReactApp
 */
export class InfoArea extends React.Component {

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
		this.state = {};
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
			<div id="Info-1" className="bg-gray pt30 bb-solid-1">
				<div className="container">
					<div className="row">
						<div className="col-md-8 col-md-offset-2 text-center pb35">
							<h4>We are here to help you reach success</h4>
							<a className="button button-md button-blue hover-ripple-out mr10">Purchase Now</a>
							<a className="button button-md button-pasific hover-ripple-out">Start Project</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

InfoArea.propTypes = {
};

InfoArea.defaultProps = {};

export default InfoArea;
