import React from 'react';
import data from '../data';
import classes from './FeIcons.scss';
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
	 *
	 * Set the initial state
	 *
	 * @private
	 */
	constructor (props) {
		super(props);
		this.state = {
			isLoading: true
		};
	}

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
			icons.map(function (icon, index) {
				setTimeout(function () {
					$(_this['_icon' + index]).animate({
						opacity: 0
					}, getRandom(1000, 5000));
				}, getRandom(1500, 4000));
			});
		}

	}

	// ------------------------------------------------------------------------------------------------------------------
	//  Render methods
	// ------------------------------------------------------------------------------------------------------------------
	renderIcons(icons) {
		const color = this.props.color ? '' : 'desaturate';
		const opacity = this.props.opacity || 1;
		const _this = this;
		return icons.map(function (icon, index) {
			return (
				<li key={index}>
					<img ref={(c) => _this['_icon' + index] = c} className={color} style={{opacity: opacity}} src={icon.url} />
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
	str: React.PropTypes.string,
	oneof: React.PropTypes.oneOfType([
		React.PropTypes.string,
		React.PropTypes.number
	])
};

FeIcons.defaultProps = {
	str: 'string',
	oneof: 0
};

export default FeIcons;
