import React from 'react';
import data from '../data';
import FactItem from '../FactItem/FactItem';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class Fact
 * @extends ReactApp
 */
export class Fact extends React.Component {

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

	//------------------------------------------------------------------------------------------------------------------
	// Render methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 * Renders the title
	 *
	 * @method renderTitle
	 * @returns {XML}
	 * @public
	 */
	renderTitle = () => (
		<div className="row">
			<div className="col-md-8 col-md-offset-2 text-center mb50">
				<h1 className="font-size-normal color-light">
					<small className="color-light">{data.leadTitle}</small>
					{data.title}
				</h1>
			</div>
		</div>
	)

	/**
	 * Renders the text
	 *
	 * @method renderText
	 * @returns {XML}
	 * @public
	 */
	renderText = () => (
		<div className="row">
			<div className="col-sm-8 col-sm-push-2 text-center">
				<h4 className="pt25 color-light">
					{data.text.title}
				</h4>
				<p className="pb10 color-light alpha8">
					{data.text.text}
				</p>
				<a href="#" className="button button-md button-gray hover-ripple-out">
					<span className="color-primary">{data.text.buttonLabel}</span>
				</a>
			</div>
		</div>
	)

	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		const baseUrl = '/img/';
		return (
			<div id="fact" className="bg-grad-stellar pt100 pb100">
				<div className="container">

					{this.renderTitle()}

					<div className="row">

						<div className="col-md-3">
							<div className="row">

								<div className="col-md-12 col-sm-6 col-xs-6">
									<FactItem name={data.facts[0].name} id={0} number={data.facts[0].number} />
								</div>

								<div className="col-md-12 col-sm-6 col-xs-6">
									<FactItem name={data.facts[1].name} id={1} number={data.facts[1].number} />
								</div>

							</div>
						</div>

						<div className="col-md-3 col-md-push-6">
							<div className="row">

								<div className="col-md-12 col-sm-6 col-xs-6">
									<FactItem name={data.facts[2].name} id={2} number={data.facts[2].number} />
								</div>

								<div className="col-md-12 col-sm-6 col-xs-6">
									<FactItem name={data.facts[3].name} id={3} number={data.facts[3].number} />
								</div>

							</div>
						</div>

						<div className="col-md-6 col-md-pull-3">
							<img src={baseUrl + '/other/map.png'} alt="macbook" className="img-responsive" />
						</div>

					</div>

					{this.renderText()}

				</div>
			</div>
		);
	}
}

export default Fact;
