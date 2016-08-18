import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

// ------------------------------------------------------------------------------------------------------------------
//  Helpers
// ------------------------------------------------------------------------------------------------------------------
const mapData = (post) => {
	const commentsData = post.comments || [];
	const comments = commentsData[0] || [];
	const date = post.date || '';

	return {
		readMore: 'read more',
		commentsLabel: (comments.length === 1) ? 'Comment' : 'Comments',
		commentsNumber: comments.length,
		dateFormatted: moment(date).format('DD.MM.YYYY')
	};
};
/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class BlogItem
 * @extends ReactApp
 */
export const BlogItem = (props) => {
	const post = props.post || {};
	const data = mapData(post);
	return (
		<div className="blog-one">
			<div className="blog-one-header">
				<Link
					to={'/blog/' + post.id}
				>
					<img
						src={post.imageMedium}
						alt={post.title}
						className="img-responsive"
					/>
				</Link>
			</div>
			<div className="blog-one-attrib">
				<img src={post.author.avatar} alt={post.author.name} className="blog-author-photo" />
					<span className="blog-author-name">{post.author.name}</span>
					<span className="blog-date">{data.dateFormatted}</span>
			</div>
			<div className="blog-one-body">
				<h4 className="blog-title">
					<Link
						to={'/blog/' + post.id}
					>
						{post.title}
					</Link>
				</h4>
				<div dangerouslySetInnerHTML={{__html: post.leadText}} />
			</div>
			<div className="blog-one-footer">
				<Link
					to={'/blog/' + post.id}
				>
					{data.readMore}
				</Link>
				<i className="fa fa-comments"></i>
				<Link
					to={'/blog/' + post.id}
				>
					{data.commentsNumber} {data.commentsLabel}
				</Link>
			</div>
		</div>
	);
};

BlogItem.propTypes = {
	post: React.PropTypes.object
};

BlogItem.defaultProps = {
	post: {author: {}}
};

export default BlogItem;
