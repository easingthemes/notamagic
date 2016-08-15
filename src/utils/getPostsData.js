import mapPostsData from './mapPostsData';
const getPostsData = (category, successCallback, errorCallback, number) => {
	let filterNumber = '';
	if (number) {
		filterNumber = '&per_page=' + number;
	}
	$.ajax({
		url: Constants.apiUrl + 'posts?filter[category_name]=' + category + filterNumber + '&_embed=1',
		crossDomain: true
	})
		.done(function(data) {
			const posts = mapPostsData(data);
			successCallback(posts);
		})
		.fail(function(xhr) {
			errorCallback(xhr);
		});
};

export default getPostsData;
