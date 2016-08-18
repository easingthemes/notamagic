import {requestPosts, receivePosts, failPosts} from './actionCreators';
// ------------------------------------
// Actions
// ------------------------------------
export function fetchBlogItems(category, number) {
	let filterNumber = '';
	if (number) {
		filterNumber = '&per_page=' + number;
	}
	return dispatch => {
		dispatch(requestPosts());
		$.ajax({
			url: Constants.apiUrl + 'posts?filter[category_name]=' + category + filterNumber + '&_embed=1',
			crossDomain: true
		})
		.done(function (data) {
			dispatch(receivePosts(data));
		})
		.fail(function (xhr) {
			dispatch(failPosts(xhr));
		});
	};
}
