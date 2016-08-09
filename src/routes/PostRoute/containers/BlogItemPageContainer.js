import { connect } from 'react-redux';
import { increment, doubleAsync, fetchBlogItem } from '../actions/index';
//import { increment, doubleAsync } from '../modules/BlogItemPage';

// 1. Import Component: Smart
import BlogItemPage from '../components/BlogItemPage';


const mapActionCreators = {
	increment: () => increment(1),
	doubleAsync,
	fetchBlogItem
}

const mapData = (post) => {
	const contentO = post.content || {};
	const content = contentO.rendered || '';
	let text = contentO.rendered;
	let leadText = '';
	const contentArr = content.split('<!--more-->');
	if (contentArr instanceof Array && contentArr.length > 0) {
		leadText = contentArr[0];
		text = contentArr[1];
	}
	const acf = post.acf || {};
	const leadTitle = acf.subtitle || '';
	const _embedded = post._embedded || {};
	const title = post.title || {};
	const authors = _embedded.author || [];
	const author = authors[0] || {};
	const avatar = author.avatar_urls || {};
	const avatarUrl = avatar[96] || '';
	let imageMedium = '';
	try {
		imageMedium = post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
	} catch (err){}
	return {
		subtitle: contentO.rendered,
		leadTitle: leadTitle,
		title: title.rendered,
		leadText: leadText,
		text: text,
		image: post.featured_image_url,
		content: content,
		date: post.date,
		slug: post.slug,
		id: post.id,
		comments: _embedded.replies,
		author: {
			avatar: avatarUrl,
			name: author.name
		},
		imageMedium: imageMedium
	};
}
// 2. Use only part of global state data
const mapStateToProps = (state) => ({
	counter: state.counter,
	post: mapData(state.blog.questions.post),
	test: 'test',
	all: state
});
// 3. Make it Smart with connect
export default connect(mapStateToProps, mapActionCreators)(BlogItemPage)
