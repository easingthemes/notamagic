import React from 'react';
import BlogPost from '../../../../../components/Blog/BlogPost/BlogPost';

export const BlogItemPage = React.createClass({

	componentWillMount () {
		const id = this.props.routeParams.postId || '1';
		this.props.fetchBlogItem(id);
	},

	render () {
		const post = this.props.post || {};
		const comment = this.props.comment || {};
		return (
			<div id="blog">
				<BlogPost post={post} comment={comment} isSent={this.props.isSent} isSending={this.props.isSending} isLoading={this.props.isLoading} onSendComment={this.props.postComment} />
			</div>
		);
	}
});

export default BlogItemPage
