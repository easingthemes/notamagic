import React from 'react';
import data from '../data';
import BlogItem from '../BlogItem/BlogItem';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class Blog
 * @extends ReactApp
 */
export class Blog extends React.Component {

	//------------------------------------------------------------------------------------------------------------------
	// React methods
	//------------------------------------------------------------------------------------------------------------------

	/**
	 *
	 * Set the initial state
	 *
	 * @private
	 */
	constructor(props) {
		super(props);
		this.state = {};
	}

	/**
	 * When component is mounted add the Change event listeners and get initial data
	 *
	 * @method componentDidMount
	 * @returns void
	 * @public
	 */
	componentDidMount () {

	}

	//------------------------------------------------------------------------------------------------------------------
	// Render methods
	//------------------------------------------------------------------------------------------------------------------
	renderItems () {
		const items = data.items || [];
		return items.map(function (item, index) {
			return (
				<div key={index} className="col-md-4 col-sm-6 col-xs-12 mb50">
					<BlogItem data={item} />
				</div>
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
		return (
			<div id="blogs" className="bg-gray pt75 pb75">
				<div className="container">

					<div className="row text-center mb25">
						<h1 className="font-size-normal">
							<small>{data.leadTitle}</small>
							{data.title}
							<small className="heading heading-solid center-block"></small>
						</h1>
					</div>

					<div className="row">
						{this.renderItems()}
					</div>
				</div>
			</div>
		);
	}
}

Blog.propTypes = {
};

Blog.defaultProps = {
};

export default Blog;
