const mapContent = (post) => {
	const acf = post.acf || {};
	let contentArr,
		text,
		leadText;
	try {
		contentArr = post.content.rendered.split('<!--more-->');
		leadText = contentArr[0];
		text = contentArr[1];
	} catch (err) {
		text = post.content.rendered;
		leadText = '';
	}

	return {
		subtitle: post.content.rendered,
		leadTitle: acf.subtitle || '',
		title: post.title.rendered,
		leadText: leadText,
		text: text,
		content: post.content.rendered
	};
};

const mapEmbedded = (_embedded) => {
	const authors = _embedded.author || [];
	const author = authors[0] || {};
	const avatarUrls = author.avatar_urls || {};
	let imageMedium = '';
	try {
		imageMedium = _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
	} catch (err) {}
	return {
		comments: _embedded.replies,
		author: {
			avatar: avatarUrls[96],
			name: author.name
		},
		imageMedium: imageMedium
	};
};

const mapPostsData = (data) => {
	const posts = [];
	// console.log('data category', data);
	data.forEach((post) => {
		const mappedContent = mapContent(post);
		const _embedded = post._embedded || {};
		const mappedEmbedded = mapEmbedded(_embedded);

		posts.push({
			subtitle: mappedContent.subtitle,
			leadTitle: mappedContent.leadTitle,
			title: mappedContent.title,
			leadText: mappedContent.leadText,
			text: mappedContent.text,
			image: post.featured_image_url,
			content: mappedContent.content,
			date: post.date,
			slug: post.slug,
			id: post.id,
			comments: mappedEmbedded.replies,
			author: mappedEmbedded.author,
			imageMedium: mappedEmbedded.imageMedium
		});
	});
	return posts;
};

export default mapPostsData;
