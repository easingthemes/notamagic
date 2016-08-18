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

	// ------------------------------------------------------------------------------------------------------------------
	//  React methods
	// ------------------------------------------------------------------------------------------------------------------

	// ------------------------------------------------------------------------------------------------------------------
	//  Render methods
	// ------------------------------------------------------------------------------------------------------------------
	renderItems () {
		// const posts = this.state.posts || [];
		const posts = this.props.posts || [];
		const items = data.items || [];

		// const posts = $.merge(true, items, wpposts);
		if (this.props.isLoading) {
			return (
				<span />
			);
		}

		return posts.map((post, index) => {
			return (
				<div key={index} className="col-md-4 col-sm-6 col-xs-12 mb50">
					<BlogItem data={items[index]} post={post} />
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
	posts: React.PropTypes.array,
	number: React.PropTypes.number,
	isLoading: React.PropTypes.bool
};

Blog.defaultProps = {
	posts: []
};

export default Blog;
