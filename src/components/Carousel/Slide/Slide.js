import React from 'react';
import SlideCaption from '../SlideCaption/SlideCaption';

export const Slide = (props) => {

	var style = ' item carousel-img ';
	if (props.index === props.initialSlideIndex) {
		style = 'active ' + style;
	}
	return (
	<div className={style} style={{'backgroundImage': 'url(' + props.image + ')'}}>
		<div className="container">
			<SlideCaption {...props} />
		</div>
	</div>
)};

Slide.propTypes = {
	index: React.PropTypes.number,
	initialSlideIndex: React.PropTypes.number,
	activeSlideIndex: React.PropTypes.number,
	prevSlideIndex: React.PropTypes.number,
	image: React.PropTypes.string,
	marginTop: React.PropTypes.number,
	animationType: React.PropTypes.string,
	animationDelay: React.PropTypes.number,
	title: React.PropTypes.string,
	subtitle: React.PropTypes.string,
	textColor: React.PropTypes.string,
	textAlign: React.PropTypes.string
};

Slide.defaultProps = {
	image: 'carousel-img9',
	initialSlideIndex: 0
};

export default Slide;
