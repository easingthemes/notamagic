const getPostsData = (category, successCallback, errorCallback) => {
	$.ajax({
		url: Constants.apiUrl + 'posts?filter[category_name]=' + category + '&_embed=1',
		crossDomain: true
	})
		.done(function(data) {
			let posts = [];
			console.log('data category', data);

			data.map(function(post) {
				const content = post.content.rendered;
				let text = post.content.rendered;
				let leadText = '';
				const contentArr = content.split('<!--more-->');
				if (contentArr instanceof Array && contentArr.length > 0) {
					leadText = contentArr[0];
					text = contentArr[1];
				}
				const acf = post.acf || {};
				const leadTitle = acf.subtitle || '';
				posts.push({
					subtitle: post.content.rendered,
					leadTitle: leadTitle,
					title: post.title.rendered,
					leadText: leadText,
					text: text,
					image: post.featured_image_url,
					content: content,
					date: post.date,
					slug: post.slug,
					id: post.id,
					comments: post._embedded.replies,
					author: {
						avatar: post._embedded.author[0].avatar_urls[96],
						name: post._embedded.author[0].name
					},
					imageMedium: post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url
				});
			});
			successCallback(posts);
		})
		.fail(function(xhr) {
			errorCallback(xhr);
		});
};

export default getPostsData;
