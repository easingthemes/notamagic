const getGalleryData = (type, id, successCallback, errorCallback) => {
	$.ajax({
		url: Constants.apiUrl + type + '/' + id,
		crossDomain: true
	})
	.done(function (data) {
		const gallery = data.gallery;
		let full = [];
		let src = [];
		let alt = [];
		let idsArr = [];
		if (gallery) {
			idsArr = gallery.ids.split(',') || [];
			full = gallery.full;
			src = gallery.src;
			alt = gallery.alt;
		}
		successCallback({
			full: full,
			src: src,
			alt: alt,
			ids: idsArr
		});
	})
	.fail(function (xhr) {
		errorCallback(xhr);
	});
};

export default getGalleryData;
