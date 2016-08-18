import React from 'react';

/**
 * React pure component.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class BlogAuthor
 * @extends ReactApp
 */
export const BlogAuthor = (props) => (
	<div className="blog-post-author mb50 pt30 bt-solid-1">
		<img
			src={props.author.avatar}
			className="img-circle"
			alt={props.author.name}
		/>
			<span className="blog-post-author-name">
				{props.author.name}
			</span>
			<a href={props.author.url}><i className="fa fa-twitter"></i></a>
			<p>
				{props.author.description}
			</p>
	</div>
);

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
