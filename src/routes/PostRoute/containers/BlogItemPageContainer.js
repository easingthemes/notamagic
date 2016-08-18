import { connect } from 'react-redux';
import { fetchBlogItem, postComment } from '../actions/index';


// 1. Import Component: Smart
import BlogItemPage from '../components/BlogItemPage';


const mapActionCreators = {
	fetchBlogItem,
	postComment
};

const mapComments = (embeddedComments) => {
	let comments = [];
	let commentsMapped = {};
	let commentsArr = [];
	if (embeddedComments && embeddedComments instanceof Array && embeddedComments.length > 0) {
		comments = embeddedComments[0];
	}
	if (!(comments instanceof Array)) {
		comments = [];
	}
	comments.map(function (comment) {
		const id = comment.id;
		const parent = comment.parent;
		if (parent === 0) {
			commentsMapped[id] = comment;
			commentsMapped[id].replies = [];
			commentsArr.push(commentsMapped[id]);
		} else {
			commentsMapped[parent].replies.push(comment);
		}
	});
	return {
		total: comments.length,
		comments: commentsArr
	};
};
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
	const comments = mapComments(_embedded.replies);
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
		tags: post.tags,
		id: post.id,
		comments: comments,
		author: {
			avatar: avatarUrl,
			name: author.name,
			url: author.url,
			description: author.description
		},
		imageMedium: imageMedium
	};
};
// 2. Use only part of global state data
const mapStateToProps = (state) => {
	return ({
		post: mapData(state.post.getPost.post),
		isLoading: state.post.getPost.fetching,
		isSending: state.post.postComment.sending,
		isSent: state.post.postComment.sent,
		comment: state.post.postComment.comment,
		all: state
	});
}


// 3. Make it Smart with connect
export default connect(mapStateToProps, mapActionCreators)(BlogItemPage)
