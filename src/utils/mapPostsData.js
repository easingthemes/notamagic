const mapPostsData = (data) => {
	let posts = [];
	//console.log('data category', data);
	data.map(function(post) {
		const contentObj = post.content || {};
		const content = contentObj.rendered;
		let text = contentObj.rendered;
		let leadText = '';
		const contentArr = content.split('<!--more-->');
		if (contentArr instanceof Array && contentArr.length > 0) {
			leadText = contentArr[0];
			text = contentArr[1];
		}
		const acf = post.acf || {};
		const leadTitle = acf.subtitle || '';
		const title = post.title || {};
		const _embedded = post._embedded || {};
		const authors = _embedded.author || [];
		const author = authors[0] || {};
		const avatar_urls = author.avatar_urls || {};
		let imageMedium = post.featured_image_url;
		try {
			imageMedium = _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
		} catch (err) {}

		posts.push({
			subtitle: contentObj.rendered,
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
				avatar: avatar_urls[96],
				name: author.name
			},
			imageMedium: imageMedium
		});
	});
	return posts;
};

export default mapPostsData;
