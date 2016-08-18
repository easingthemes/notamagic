import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import Loader from 'components/Loader';
import TopRow from 'components/TopRow';
import BlogAuthor from '../BlogAuthor';
import CommentsForm from '../../CommentsForm';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class BlogPost
 * @extends ReactApp
 */
export class BlogPost extends React.Component {

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
			openId: false
		};
	}

	handleSubmit (postId, parent, event, data) {
		event.preventDefault();
		const formData = $.extend({}, data, {
			postId: postId,
			parent: parent
		});
		// console.log('formData', formData);
		this.props.onSendComment(formData);
	}

	showCommentForm (commentId, event) {
		event.preventDefault();
		this.setState({
			openId: commentId
		});
	}

	mapData (post) {
		const commentsData = post.comments || [];
		const comments = commentsData[0] || [];
		const date = post.date || '';

		return {
			readMore: 'read more',
			commentsLabel: (comments.length === 1) ? 'Comment' : 'Comments',
			commentsNumber: comments.length,
			dateFormatted: moment(date).format('DD.MM.YYYY'),
			comments: comments
		};
	}
	// ------------------------------------------------------------------------------------------------------------------
	//  Render methods
	// ------------------------------------------------------------------------------------------------------------------

	commentForm (postId, parent, openId) {
		if (parent !== openId) {
			return (
				<span />
			);
		}
		return (
			<div className="blog-post-leave-comment">
				{this.renderStatus()}
				<h5><i className="fa fa-comment mt25 mb25"></i> Leave Comment</h5>
				<CommentsForm handleSubmit={this.handleSubmit.bind(this, postId, parent)} />
			</div>
		);
	}

	renderComment (comment) {
		let avatar = '';
		const _this = this;
		const post = this.props.post || {};
		const content = comment.content || {};
		try {
			avatar = comment.author_avatar_urls[96];
		} catch (err) {}

		return (
			<div>
				<img src={avatar} className="img-circle" alt={comment.author_name} />
				<span className="blog-post-comment-name">{comment.author_name}</span> {comment.date}
				<a href="/" onClick={this.showCommentForm.bind(this, comment.id)} className="pull-right text-gray"><i className="fa fa-comment"></i> Reply</a>
				<div dangerouslySetInnerHTML={{__html: content.rendered}} />
				{this.commentForm(post.id, comment.id, _this.state.openId)}
			</div>
		);
	}

	renderComments (comments) {
		const _this = this;
		if (!(comments instanceof Array)) {
			return (
				<span />
			);
		}
		return comments.map((comment, index) => {
			return (
				<div key={'comment-' + index} className="blog-post-comment">
					{_this.renderComment(comment)}
					{_this.renderReplies(comment.replies)}
				</div>
			);
		});
	}

	renderCommentsRow (comments, total) {
		if (comments.length === 0) {
			return (
				<span />
			);
		}
		return (
			<div className="blog-post-comment-container">
				<h5><i className="fa fa-comments-o mb25"></i> {total} Comments</h5>
				{this.renderComments(comments)}
			</div>
		);
	}

	renderStatus () {
		if (!this.props.isSent) {
			return (
				<span />
			);
		}
		return (
			<div className="alert alert-success fade in">
				<a
					href="/" className="close" data-dismiss="alert"
					aria-label="close" title="close"
				>×</a>
				<strong>Thank you for your comment.</strong> Your comment is awaiting moderation.
			</div>
		);
	}

	renderReplies (replies) {
		const _this = this;
		if (replies.length === 0) {
			return (
				<span />
			);
		}
		return replies.map((reply, index) => {
			return (
				<div key={reply.id + '-reply-' + index} className={'blog-post-comment-reply'}>
					{_this.renderComment(reply)}
				</div>
			);
		});
	}

	renderAuthor (author) {
		return (
			<BlogAuthor author={author} />
		);
	}

	/**
	 * Renders the component
	 *
	 * @method render
	 * @returns {XML}
	 * @public
	 */
	render () {
		const post = this.props.post || {};
		const data = this.mapData(post);
		if (this.props.isLoading) {
			return (
				<Loader />
			);
		}
		return (
			<div>
				<TopRow postTitle={post.title} />
				<div className="container mt90">
					<div className="row">
						<div className="col-md-8 col-md-offset-2">
							<div className="blog-three-mini">
								<h2>
									{post.title}
								</h2>
								<div className="blog-three-attrib">
									<div><i className="fa fa-calendar"></i>{data.dateFormatted}</div> |
									<div><i className="fa fa-pencil"></i>
										<a href="">{post.author.name}</a>
									</div> |
									<div><i className="fa fa-comment-o"></i>
										<Link
											to={'/blog/' + post.id}
										>
											{data.commentsNumber} {data.commentsLabel}
										</Link>
									</div> |
									<div>
										Share: <a href=""><i className="fa fa-facebook-official"></i></a>
										<a href=""><i className="fa fa-twitter"></i></a>
										<a href=""><i className="fa fa-linkedin"></i></a>
										<a href=""><i className="fa fa-google-plus"></i></a>
										<a href=""><i className="fa fa-pinterest"></i></a>
									</div>
								</div>
								<div className="blog-one-header mb30">
									<img src={post.image} alt={post.title} className="img-responsive" />
								</div>
								<div className="blog-one-body">
									<div dangerouslySetInnerHTML={{__html: post.content}} />
								</div>
								<div className="blog-post-read-tag mt50">
									<i className="fa fa-tags"></i> Tags:
									<a href=""> Javascript</a>,
									<a href=""> HTML</a>,
									<a href=""> Wordpress</a>,
									<a href=""> Tutorial </a>
								</div>
							</div>
							{this.renderAuthor(post.author)}
							{this.renderCommentsRow(data.comments, data.commentsNumber)}
							{this.commentForm(post.id, 0, 0)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

BlogPost.propTypes = {
	onSendComment: React.PropTypes.func,
	post: React.PropTypes.object,
	isLoading: React.PropTypes.bool,
	isSent: React.PropTypes.bool
};

BlogPost.defaultProps = {
	post: {author: {}},
	isLoading: true
};

export default BlogPost;
