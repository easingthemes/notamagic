import React from 'react';
import BlogPost from '../../../components/Blog/BlogPost/BlogPost';

export const BlogItemPage = React.createClass({

	componentWillMount () {
		const id = this.props.routeParams.postId || '1';
		this.props.fetchBlogItem(id);
	},

	render () {
		const post = this.props.post || {};
		return (
			<div>
				<BlogPost post={post} isLoading={this.props.isLoading} onSendComment={this.props.sendComment} />
			</div>
		);
	}
});

export default BlogItemPage
