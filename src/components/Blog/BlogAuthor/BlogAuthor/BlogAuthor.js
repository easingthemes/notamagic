import React from 'react';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class BlogAuthor
 * @extends ReactApp
 */
export class BlogAuthor extends React.Component {

	// ------------------------------------------------------------------------------------------------------------------
	//  React methods
	// ------------------------------------------------------------------------------------------------------------------

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
			<div className="blog-post-author mb50 pt30 bt-solid-1">
				<img src={this.props.author.avatar} className="img-circle" alt="image" />
					<span className="blog-post-author-name">
						{this.props.author.name}
					</span>
					<a href={this.props.author.url}><i className="fa fa-twitter"></i></a>
					<p>
						{this.props.author.description}
					</p>
			</div>
		);
	}
}

BlogAuthor.propTypes = {
	author: React.PropTypes.object
};

BlogAuthor.defaultProps = {
	author: {
		avatar: '',
		name: '',
		url: '',
		description: ''
	}
};

export default BlogAuthor;
