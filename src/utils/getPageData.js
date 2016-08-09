const getPageData = (type, id, successCallback, errorCallback) => {
	$.ajax({
		url: Constants.apiUrl + type + '/' + id,
		crossDomain: true
	})
	.done(function(data) {
		console.log('data post', data);

		const content = data.content.rendered;
		let text = data.content.rendered;
		let leadText = '';
		const contentArr = content.split('<!--more-->');
		if (contentArr instanceof Array && contentArr.length > 0) {
			leadText = contentArr[0];
			text = contentArr[1];
		}
		const acf = data.acf || {};
		const leadTitle = acf.subtitle || '';
		successCallback({
			leadTitle: leadTitle,
			title: data.title.rendered,
			leadText: leadText,
			text: text,
			image: data.featured_image_url,
			content: content
		});
	})
	.fail(function(xhr) {
		errorCallback(xhr);
	});
};

export default getPageData;
