import React from 'react';
import getPageData from '../../utils/getPageData';
import  ImagePreload from 'react-img-preload';

export class Parallax extends React.Component {

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
								<small className="color-light">{this.state.post.leadTitle}</small>
								{this.state.post.title}
							</h1>
							<div dangerouslySetInnerHTML={{__html:this.state.post.content}} />
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
