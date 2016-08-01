import React from 'react';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class GoToTop
 * @extends ReactApp
 */
export class GoToTop extends React.Component {

	//------------------------------------------------------------------------------------------------------------------
	// React methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 * When component is mounted add the Change event listeners and get initial data
	 *
	 * @method componentDidMount
	 * @returns void
	 * @public
	 */
	componentDidMount () {
		const $button = $(this._button);
		$button.fadeOut();
		$(window).scroll(function() {
			if ($('.navbar').offset().top > 1200)  {
				$button.fadeIn();
			} else {
				$button.fadeOut();
			}
		});
	}

	//------------------------------------------------------------------------------------------------------------------
	// Render methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		return (
			<a ref={(c) => this._button = c} href="#page-top" className="go-to-top">
				<i className="fa fa-long-arrow-up"></i>
			</a>
		);
	}
}

export default GoToTop;
