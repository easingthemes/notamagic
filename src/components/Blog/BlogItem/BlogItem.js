import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class BlogItem
 * @extends ReactApp
 */
export class BlogItem extends React.Component {

	//------------------------------------------------------------------------------------------------------------------
	// React methods
	//------------------------------------------------------------------------------------------------------------------

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
		const post = this.props.post || {};
		const commentsData = post.comments || [];
		const comments = commentsData[0] || [];
		const readMore = 'read more';
		let commentsLabel = 'Comment';
		let commentsNumber = 0;
		if (!comments || comments.length === 0) {
			commentsLabel = commentsLabel + 's';
		}
		if (comments && comments.length === 1) {
			commentsNumber = comments.length;
		}
		if (comments && comments.length > 1) {
			commentsNumber = comments.length;
			commentsLabel = commentsLabel + 's';
		}
		const date = post.date || '';
		const dateFormatted = moment(date).format('DD.MM.YYYY');
		return (
			<div className="blog-one">
				<div className="blog-one-header">
					<Link
						to={'/blog/' + post.id}
					>
						<img src={post.imageMedium} alt={post.title} className="img-responsive" />
					</Link>
				</div>
				<div className="blog-one-attrib">
					<img src={post.author.avatar} alt={post.author.name} className="blog-author-photo" />
						<span className="blog-author-name">{post.author.name}</span>
						<span className="blog-date">{dateFormatted}</span>
				</div>
				<div className="blog-one-body">
					<h4 className="blog-title">
						<Link
							to={'/blog/' + post.id}
						>
							{post.title}
						</Link>
					</h4>
					<div dangerouslySetInnerHTML={{__html:post.leadText}} />
				</div>
				<div className="blog-one-footer">
					<Link
						to={'/blog/' + post.id}
					>
						{readMore}
					</Link>
					<i className="fa fa-comments"></i>
					<Link
						to={'/blog/' + post.id}
					>
						{commentsNumber} {commentsLabel}
					</Link>
				</div>
			</div>
		);
	}
}

BlogItem.propTypes = {
	post: React.PropTypes.object
};

BlogItem.defaultProps = {
	post: {author: {}}
};

export default BlogItem;
