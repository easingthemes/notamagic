import React from 'react';
import OnScreen from 'onscreen';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class Counter
 * @extends ReactApp
 */
export class Counter extends React.Component {

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
			initialCount: true,
			counterStarted: false
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
		const _this = this;
		const $counter = $(this._counter);
		const counterSelector = '.' + this.props.id;

		const os = new OnScreen({
			tolerance: 0,
			debounce: 500,
			container: window
		});
		_this.setState({
			os: os
		});

		$counter.countTo({
			from: _this.props.from,
			to: _this.props.to,
			speed: _this.props.speed,
			refreshInterval: 50,
			onComplete: function () {
				if (!_this.state.initialCount) {
					setTimeout(() => {
						_this.setState({
							counterStarted: false
						});
					}, 15000);
				}
			}
		});

		os.on('enter', counterSelector, (element) => {
			if (!_this.state.counterStarted) {
				$(element).countTo('restart');
				_this.setState({
					initialCount: false,
					counterStarted: true
				});
			}
		});
	}

	componentWillUnmount () {
		this.state.os.destroy();
	}
	// ------------------------------------------------------------------------------------------------------------------
	//  Render methods
	// ------------------------------------------------------------------------------------------------------------------

	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		return (
			<span ref={(c) => (this._counter = c)} className={this.props.id}>
			</span>
		);
	}
}

Counter.propTypes = {
	id: React.PropTypes.string,
	from: React.PropTypes.number,
	to: React.PropTypes.number,
	speed: React.PropTypes.number
};

Counter.defaultProps = {
	id: 'counter',
	from: 10,
	to: 100,
	speed: 20000
};

export default Counter;
