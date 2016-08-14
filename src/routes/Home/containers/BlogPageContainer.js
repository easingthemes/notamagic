import { connect } from 'react-redux';
import { fetchBlogItems } from '../actions/index';


// 1. Import Component: Smart
import BlogItemsPage from '../components/HomeView';

const mapActionCreators = {
	fetchBlogItems
};

const mapData = (data) => {
	let posts = [];
	if (!data || !(data instanceof Array)) {
		return [];
	}
	data.map(function(post) {
		const content = post.content.rendered;
		let text = post.content.rendered;
		let leadText = '';
		const contentArr = content.split('<!--more-->');
		if (contentArr instanceof Array && contentArr.length > 0) {
			leadText = contentArr[0];
			text = contentArr[1];
		}
		const acf = post.acf || {};
		const leadTitle = acf.subtitle || '';
		posts.push({
			subtitle: post.content.rendered,
			leadTitle: leadTitle,
			title: post.title.rendered,
			leadText: leadText,
			text: text,
			image: post.featured_image_url,
			content: content,
			date: post.date,
			slug: post.slug,
			id: post.id,
			comments: post._embedded.replies,
			author: {
				avatar: post._embedded.author[0].avatar_urls[96],
				name: post._embedded.author[0].name
			},
			imageMedium: post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
		});
	});

	return posts;
};
// 2. Use only part of global state data
const mapStateToProps = (state) => {
	return ({
		posts: mapData(state.posts.getPosts.posts),
		isLoading: state.posts.getPosts.fetching
	});
}


// 3. Make it Smart with connect
export default connect(mapStateToProps, mapActionCreators)(BlogItemsPage)
