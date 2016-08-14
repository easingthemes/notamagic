import React from 'react';
import getPageData from '../../utils/getPageData';
import  ImagePreload from 'react-img-preload';
import { Link } from 'react-router';

export class Parallax extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			post: {
				leadTitle: 'Do you need more information about my skills and experience?',
				title: 'Communication is key to Success',
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
		getPageData('posts', 47, _this.successCallback.bind(_this), _this.errorCallback.bind(_this));
	}

	componentDidUpdate (nextProps, nextState) {
		//console.log('nextState', nextState);
		this.initPlugins();
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

	initPlugins() {
		const _this = this;
		if (_this.state.post.image) {
			//console.log('init paralax', _this.state.post.image);
			$('.parallax-window').parallax({
				imageSrc: _this.state.post.image
			});
		}
	}

	render () {
		const _this = this;
		if (this.state.isLoading) {
			return (
				<span />
			);
		}
		return (
			<div
				id="info-1"
				className={'pt50 pb50 parallax-window mt' + this.props.mt}
				data-parallax="scroll"
				data-speed="0.5"
			>
				<div className="container">
					<div className="row pt75">
						<div className="col-md-12 text-center">
							<h1 className="color-light">
								<small className="color-light">Do you need more information about my skills and experience?</small>
								Communication is key to Success
							</h1>
							<Link to="/contact" className="button button-md button-blue hover-ripple-out mt25 mr25">Contact me</Link>
							<a href='/portfolio.pdf'
							   download="Dragan-Filipovic_FrontendDeveloper.pdf"
							   className="button-o button-md button-green hover-fade mt25">
								<span className="color-light">Download PDF CV</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Parallax.propTypes = {
	mt: React.PropTypes.number
};

Parallax.defaultProps = {
	mt: 0
};

export default Parallax;
