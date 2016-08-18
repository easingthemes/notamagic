import React from 'react';

export class SlideCaption extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isVisible: false
		};
	}
	_isSlideMounted = false;
	setVisibility (isVisible) {
		var _this = this,
			animationDelay = this.props.animationDelay;
		if (_this._isSlideMounted) {
			setTimeout(function () {
				if (_this._isSlideMounted) {
					_this.setState({
						isVisible: isVisible
					});
				}
			}, animationDelay);
		}
	}

	componentDidMount () {
		const _this = this;
		this._isSlideMounted = true;
		this.setVisibility(_this.props.initialSlideIndex === _this.props.index);
	}
	componentWillUnmount () {
		this._isSlideMounted = false;
	}
	componentWillReceiveProps (nextProps) {
		this.setVisibility(nextProps.activeSlideIndex === this.props.index);
	}

	getStyle () {
		var marginTop = this.props.marginTop ? ('mt' + this.props.marginTop) : '',
			baseStyle = marginTop + ' carousel-caption animated ',
			animatedStyle = '';

		if (this.state.isVisible) {
			animatedStyle = (this.props.animationType || 'bounceInLeft') + ' visible';
		}

		return baseStyle + animatedStyle;
	}

	getTextStyle () {
		var textAlign = 'text-' + this.props.textAlign,
			textColor = 'color-' + this.props.textColor;

		return textAlign + ' ' + textColor;
	}

	renderTitle () {

		var style = this.getTextStyle() + ' font-pacifico text-capitalize mt-25';

		if (!this.props.title) {
			return (
				<span />
			);
		}

		return (
			<h1 className={style}>
				<span dangerouslySetInnerHTML={{__html: this.props.title}} />
			</h1>
		);
	}

	renderSubtitle () {

		var style = this.getTextStyle() + ' mt25';

		if (!this.props.subtitle) {
			return (
				<span />
			);
		}

		return (
			<div className={style}>
				<div dangerouslySetInnerHTML={{__html: this.props.subtitle}} />
			</div>
		);
	}

	render () {
		var style = this.getStyle();

		if (!this.props.title && !this.props.subtitle) {
			return (
				<span />
			);
		}

		return (
			<div className={style}>
				{this.renderTitle()}
				{this.renderSubtitle()}
			</div>
		);
	}
}
SlideCaption.propTypes = {
	index: React.PropTypes.number,
	initialSlideIndex: React.PropTypes.number,
	activeSlideIndex: React.PropTypes.number,
	prevSlideIndex: React.PropTypes.number,
	marginTop: React.PropTypes.number,
	animationType: React.PropTypes.string,
	animationDelay: React.PropTypes.number,
	title: React.PropTypes.string,
	subtitle: React.PropTypes.string,
	textColor: React.PropTypes.string,
	textAlign: React.PropTypes.string
};
SlideCaption.defaultProps = {
	marginTop: 50,
	animationType: 'bounceInLeft',
	animationDelay: 250,
	textColor: 'dark',
	textAlign: 'left'
};
export default SlideCaption;
