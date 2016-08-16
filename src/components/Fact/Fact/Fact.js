import React from 'react';
import data from '../data';
import FactItem from '../FactItem/FactItem';
import getPageData from '../../../utils/getPageData';
import { Link } from 'react-router';

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
			post: {
				leadTitle: '',
				title: '',
				leadText: '',
				text: '',
				image: null,
				content: ''
			},
			isLoading: true
		};
	}

	componentDidMount () {
		const _this = this;
		getPageData('posts', 50, _this.successCallback.bind(_this), _this.errorCallback.bind(_this));
	}

	successCallback (data) {
		this.setState({
			post: data,
			isLoading: false
		});
	}

	errorCallback () {
		this.setState({
			isLoading: false
		});
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
	renderTitle = (post) => (
		<div className="row">
			<div className="col-md-8 col-md-offset-2 text-center mb50">
				<h1 className="font-size-normal color-light">
					<small className="color-light">{post.leadTitle}</small>
					{post.title}
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
	renderText = (content) => (
		<div className="row">
			<div className="col-sm-8 col-sm-push-2 text-center">
				<div dangerouslySetInnerHTML={{__html:content}} />
				<a target="_blank" href="https://github.com/easingthemes/notamagic" className="button button-md button-gray hover-ripple-out">
					<span className="color-primary">View it on GitHub <i className="fa fa-github"></i></span>
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
		const _this = this;
		return (
			<div id="fact" className="bg-grad-stellar pt100 pb100">
				<div className="container">

					{this.renderTitle(_this.state.post)}

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
							<img src={_this.state.post.image} alt="macbook" className="img-responsive" />
						</div>

					</div>

					{this.renderText(_this.state.post.content)}

				</div>
			</div>
		);
	}
}

export default Fact;
