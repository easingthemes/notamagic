const getGalleryData = (type, id, successCallback, errorCallback) => {
	$.ajax({
		url: Constants.apiUrl + type + '/' + id,
		crossDomain: true
	})
	.done(function(data) {
		console.log('data gallery', data);
		const gallery = data.gallery;
		let full = [];
		let src = [];
		let alt = [];
		if (gallery) {
			full = gallery.full;
			src = gallery.src;
			alt = gallery.alt;
		}
		successCallback({
			full: full,
			src: src,
			alt: alt
		});
	})
	.fail(function(xhr) {
		errorCallback(xhr);
	});
};

export default getGalleryData;
