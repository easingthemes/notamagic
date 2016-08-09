const getPostsData = (category, successCallback, errorCallback) => {
	$.ajax({
		url: Constants.apiUrl + 'media',
		crossDomain: true
	})
		.done(function(data) {
			console.log('medias', data);
			let medias = [];
			data.map(function(media) {
				medias.push(media);
			});
			successCallback(medias);
		})
		.fail(function(xhr) {
			errorCallback(xhr);
		});
};

export default getPostsData;
