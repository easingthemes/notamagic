import React from 'react';
import Slide from '../Slide/Slide';
import SlideSvg from '../SlideSvg/SlideSvg';
import data from '../data';
import getPostsData from '../../../utils/getPostsData';

export class Carousel extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			activeSlideIndex: 0,
			prevSlideIndex: 0
		};
	}

	componentDidMount () {
		const _this = this;
		getPostsData(4, _this.successCallback.bind(_this), _this.errorCallback.bind(_this));
		$(this._carousel).on('slide.bs.carousel', (e) => {
			const prev = $(e.target).find('.carousel-inner > .item.active').index();
			const active = $(e.relatedTarget).index();

			_this.setState({
				prevSlideIndex: prev,
				activeSlideIndex: active
			});
		});
	}

	componentWillUnmount () {
		$(this._carousel).off('slide.bs.carousel');
	}

	successCallback (posts) {
		this.setState({
			data: posts,
			isLoading: false
		});
	}

	errorCallback () {
		this.setState({
			isLoading: false
		});
	}

	renderSlides (slides, initialSlideIndex) {
		const _this = this;
		const config = data.slides || [];

		return slides.map((wpslide, index) => {
			const slide = $.extend(true, config[index], wpslide);
			return (
				<Slide
					key={'slide-' + index}
					index={index}
					initialSlideIndex={initialSlideIndex}
					activeSlideIndex={_this.state.activeSlideIndex}
					prevSlideIndex={_this.state.prevSlideIndex}
					image={slide.image}
					title={slide.title}
					subtitle={slide.subtitle}
					marginTop={slide.marginTop}
					animationType={slide.animationType}
					animationDelay={slide.animationDelay}
					textColor={slide.textColor}
					textAlign={slide.textAlign}
				/>
			);
		});
	}

	renderArrow (direction) {
		const style = direction + ' carousel-control';
		const icon = 'glyphicon glyphicon-chevron-' + direction;
		let type = 'next';
		if (direction === 'left') {
			type = 'prev';
		}
		return (
			<a
				key={'arrow-' + direction}
				className={style}
				href={'#' + this.props.name}
				data-slide={type}
			>
				<span className={icon}></span>
			</a>
		);
	}

	renderNavigation () {
		return [
			this.renderArrow('left'),
			this.renderArrow('right')
		];
	}

	renderDots (numberOfSlides, initialSlideIndex) {
		let style;
		let	dots = [];

		for (let i = 0; i < numberOfSlides; i++) {
			style = i === initialSlideIndex ? 'active' : '';
			dots.push(
				<li
					key={'dot-' + i}
					data-target={'#' + this.props.name}
					data-slide-to={i}
					className={style}
				></li>
			);
		}

		return (
			<ol className="carousel-indicators">
				{dots}
			</ol>
		);
	}

	render () {
		const slides = this.state.data || [];
		const numberOfSlides = slides.length;
		const initialSlideIndex = this.props.initialSlideIndex;

		return (
			<div
				ref={(c) => (this._carousel = c)}
				id={this.props.name}
				className="carousel slide"
				data-ride="carousel"
			>
				{this.renderDots(numberOfSlides, initialSlideIndex)}
				<div className="carousel-inner">
					{this.renderSlides(slides, initialSlideIndex)}
				</div>
				{this.renderNavigation()}
				<SlideSvg />
			</div>
		);
	}
}

Carousel.propTypes = {
	name: React.PropTypes.string,
	initialSlideIndex: React.PropTypes.number
};

Carousel.defaultProps = {
	name: 'Carousel',
	initialSlideIndex: 0
};

export default Carousel;
