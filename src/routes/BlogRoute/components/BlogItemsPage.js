import React from 'react';
import Blog from '../../../components/Blog';

export const BlogItemsPage = React.createClass({

	componentWillMount () {
		const category = 'Blog';
		if (!this.props.children) {
			this.props.fetchBlogItems(category);
		}
	},

	render () {
		const posts = this.props.posts || {};
		if (this.props.children) {
			return (
				<div id="blog">
					{this.props.children}
				</div>
			);
		}
		return (
			<div id="blog">
				<Blog posts={posts} isLoading={this.props.isLoading}  />
			</div>
		);
	}
});

export default BlogItemsPage;
