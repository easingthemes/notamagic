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
	renderIcons(icons) {
		return icons.map(function(icon, index) {
			return (
				<img key={index} src={icon} style={{display: 'inline-block', maxWidth: '50px'}}/>
			);
		})
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
			<div>
				<SvgLine />
				<div className="pt50" style={{background: 'url(' + data.bg + ') 100% 100% repeat-x #e8f3f5'}}>
					<div className="container">

						<div className="row">
							<div className="col-md-12">
								<h2 className="font-source-sans-pro text-center mb50">
									<small className="heading heading-icon heading-icon-rounded bg-grad-stellar center-block">
										<i className="fa fa-trophy color-light"></i>
									</small>
									<div className="mb20" dangerouslySetInnerHTML={{__html: data.title}} />
									<p>
										<span dangerouslySetInnerHTML={{__html: data.text}} />
									</p>
								</h2>
							</div>
						</div>

						<div className="row mb50 text-center">
							<div className="col-sm-12 text-center">
								{this.renderIcons(data.icons)}
							</div>
						</div>

						<div className="col-md-12">
							<img src={data.image} alt="device" className="img-responsive center-block" />
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
