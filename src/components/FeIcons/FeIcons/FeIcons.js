import React from 'react';
import data from '../data';
/* eslint-disable no-unused-vars */
import classes from './FeIcons.scss';
/* eslint-enable no-unused-vars */
import getRandom from '../../../utils/getRandom';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class FeIcons
 * @extends ReactApp
 */
export class FeIcons extends React.Component {

	// ------------------------------------------------------------------------------------------------------------------
	//  React methods
	// ------------------------------------------------------------------------------------------------------------------

	/**
	 * When component is mounted add the Change event listeners and get initial data
	 *
	 * @method componentDidMount
	 * @returns void
	 * @public
	 */
	componentDidMount () {
		const icons = data.icons || [];
		const _this = this;
		if (this.props.fade) {
			for (let index = 0; index < icons.length; index++) {
				setTimeout(() => {
					$(_this['_icon' + index]).animate({
						opacity: 0
					}, getRandom(1000, 5000));
				}, getRandom(1500, 4000));
			}
		}
	}

	// ------------------------------------------------------------------------------------------------------------------
	//  Render methods
	// ------------------------------------------------------------------------------------------------------------------
	renderIcons (icons) {
		const color = this.props.color ? '' : 'desaturate';
		const opacity = this.props.opacity || 1;
		const _this = this;
		return icons.map((icon, index) => {
			return (
				<li key={index}>
					<img
						ref={(c) => (_this['_icon' + index] = c)}
						alt="skills icons"
						className={color}
						style={{opacity: opacity}}
						src={icon.url}
					/>
				</li>
			);
		});
	}
	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		const icons = data.icons || [];
		return (
			<ul className="fe-icons">
				{this.renderIcons(icons)}
			</ul>
		);
	}
}

FeIcons.propTypes = {
	color: React.PropTypes.bool,
	opacity: React.PropTypes.number,
	fade: React.PropTypes.bool
};

export default FeIcons;
