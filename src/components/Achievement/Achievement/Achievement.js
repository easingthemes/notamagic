import React from 'react';
import data from '../data';
import SvgLine from 'components/SvgLine';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class Achievement
 * @extends ReactApp
 */
export class Achievement extends React.Component {

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
			<div>
				<SvgLine />
				<div className="pt50" style={{background: 'url(' + data.image + ') 100% 100% repeat-x #e8f3f5'}}>
					<div className="container">

						<div className="row">
							<div className="col-md-12">
								<h2 className="font-source-sans-pro text-center mb50">
									<small className="heading heading-icon heading-icon-rounded bg-grad-stellar center-block">
										<i className="fa fa-trophy color-light"></i>
									</small>
									{data.title}
									<small className="heading-desc text-lowercase color-dark">
										{data.text}
									</small>
								</h2>
							</div>
						</div>

						<div className="row mb50 text-center">
							<div className="col-sm-12">
								<i className="fa fa-android fa-3x mr20 color-green"></i>
								<i className="fa fa-apple fa-4x mr20 color-dark"></i>
								<i className="fa fa-amazon fa-4x mr20 color-red"></i>
								<i className="fa fa-windows fa-3x color-purple"></i>
							</div>
						</div>

						<div className="col-md-12">
							<img src={data.icons} alt="device" className="img-responsive center-block" />
						</div>

					</div>
				</div>
			</div>
		);
	}
}

Achievement.propTypes = {
};

Achievement.defaultProps = {
};

export default Achievement;
