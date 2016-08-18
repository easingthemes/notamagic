import React from 'react';
import { Link } from 'react-router';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class InfoArea
 * @extends ReactApp
 */
export class InfoArea extends React.Component {

	// ------------------------------------------------------------------------------------------------------------------
	//  React methods
	// ------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * Set the initial state
	 *
	 * @private
	 */
	constructor (props) {
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

	// ------------------------------------------------------------------------------------------------------------------
	//  Render methods
	// ------------------------------------------------------------------------------------------------------------------

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
							<h4>Want to find out more?</h4>
							<Link to="/contact" className="button button-md button-blue hover-ripple-out mr10">Contact me</Link>
							<a href='/portfolio.pdf'
							   download="Dragan-Filipovic_FrontendDeveloper.pdf"
							   className="button button-md button-pasific hover-ripple-out">Download PDF CV</a>
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
