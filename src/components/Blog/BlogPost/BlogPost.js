import React from 'react';
import { Link } from 'react-router';
import Loader from 'components/Loader';
import TopRow from 'components/TopRow';

/**
 * React component implementation.
 *
 * @author dfilipovic
 * @namespace ReactApp
 * @class BlogPost
 * @extends ReactApp
 */
export class BlogPost extends React.Component {

	//------------------------------------------------------------------------------------------------------------------
	// React methods
	//------------------------------------------------------------------------------------------------------------------

	//------------------------------------------------------------------------------------------------------------------
	// Render methods
	//------------------------------------------------------------------------------------------------------------------
	renderReplies (replies) {
		const _this = this;
		if (replies.length === 0) {
			return (
				<span />
			);
		}
		return replies.map(function(reply, index){
			return (
				<div key={reply.id + '-reply-' + index} className={'blog-post-comment-reply'}>
					{_this.renderComment(reply)}
				</div>
			);
		});
	}
	renderComment (comment) {
		let avatar = '';
		const content = comment.content || {};
		try {
			avatar = comment.author_avatar_urls[96];
		} catch (err) {}

		return (
			<div>
				<img src={avatar} className="img-circle" alt={comment.author_name} />
				<span className="blog-post-comment-name">{comment.author_name}</span> {comment.date}
				<a href="#" className="pull-right text-gray"><i className="fa fa-comment"></i> Reply</a>
				<div dangerouslySetInnerHTML={{__html:content.rendered}} />
			</div>
		);
	}
	renderComments (comments) {
		const _this = this;
		return comments.map(function(comment, index) {
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
	handleSendComment(postId, event) {
		event.preventDefault();
		this.props.onSendComment(postId, 0);
	}
	commentForm (postId) {
		return (
			<div className="blog-post-leave-comment">
				<h5><i className="fa fa-comment mt25 mb25"></i> Leave Comment</h5>

				<form>
					<input type="text" name="name" className="blog-leave-comment-input" placeholder="name" required="" />
					<input type="email" name="name" className="blog-leave-comment-input" placeholder="email" required="" />
					<input type="url" name="name" className="blog-leave-comment-input" placeholder="website" />
					<textarea name="message" className="blog-leave-comment-textarea"></textarea>
					<button onClick={this.handleSendComment.bind(this, postId)} className="button button-pasific button-sm center-block mb25">Leave Comment</button>
				</form>

			</div>
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
		const commentsData = post.comments || {};
		const comments = commentsData.comments || [];
		const commentsTotal = commentsData.total || '0';
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
									<div><i className="fa fa-calendar"></i>{post.date}</div> |
									<div><i className="fa fa-pencil"></i>
										<a href="#">{post.author.name}</a>
									</div> |
									<div><i className="fa fa-comment-o"></i>
										<Link
											to={'/blog/' + post.id}
										>
											{commentsNumber} {commentsLabel}
										</Link>
									</div> |
									<div>
										Share:  <a href="#"><i className="fa fa-facebook-official"></i></a>
										<a href="#"><i className="fa fa-twitter"></i></a>
										<a href="#"><i className="fa fa-linkedin"></i></a>
										<a href="#"><i className="fa fa-google-plus"></i></a>
										<a href="#"><i className="fa fa-pinterest"></i></a>
									</div>
								</div>
								<div className="blog-one-header mb30">
									<img src={post.image} alt={post.title} className="img-responsive" />
								</div>
								<div className="blog-one-body">
									<div>
										{post.content}
									</div>
								</div>
								<div className="blog-post-read-tag mt50">
									<i className="fa fa-tags"></i> Tags:
									<a href="#"> Javascript</a>,
									<a href="#"> HTML</a>,
									<a href="#"> Wordpress</a>,
									<a href="#"> Tutorial </a>
								</div>
							</div>
							{this.renderCommentsRow(comments, commentsTotal)}
							{this.commentForm(post.id)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

BlogPost.propTypes = {
};

BlogPost.defaultProps = {
	post: {author:{}},
	isLoading: true
};

export default BlogPost;
