import React from 'react';
//import { fetchBlogItem } from '../actions/index';
import BlogItem from '../../../components/Blog/BlogItem/BlogItem';

export const BlogItemPage = React.createClass({

	componentWillMount () {
		const id = this.props.routeParams.postId || '1';
		this.props.fetchBlogItem(id);
	},

	render () {
		return (
			<div className="container mt90">
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<BlogItem post={this.props.post}/>
					</div>
				</div>
			</div>
		);
	}
});

export default BlogItemPage
