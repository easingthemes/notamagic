import {requestPost, receivePost, failPost} from './actionCreators';
//import {reducer as formReducer} from 'redux-form';
// ------------------------------------
// Constants
// ------------------------------------
// imported from separate file - actionTypes

// ------------------------------------
// Helpers
// ------------------------------------
// imported from separate file - actionCreators

// ------------------------------------
// Actions
// ------------------------------------
export function fetchBlogItem(id) {
	return dispatch => {
		dispatch(requestPost());
		$.ajax({
			url: Constants.apiUrl + 'posts/' + id + '?_embed=1',
			crossDomain: true
		})
		.done(function(data) {
			dispatch(receivePost(data));
		})
		.fail(function(xhr) {
			dispatch(failPost(xhr));
		});
	};
}
export function sendComment(data) {
	return dispatch => {
		//dispatch(requestPost());
		$.ajax({
			url: Constants.apiUrl + 'comments',
			type: 'POST',
			crossDomain: true,
			data: {
				author: 0,
				author_email: data.email,
				author_name: data.firstName,
				author_url: data.url,
				content: data.message,
				//date: new Date(),
				//date_gmt: '',
				karma: 0,
				parent: data.parent,
				post: data.postId,
				//status: 'approve',
				type: 'comment'
			}
		})
		.done(function(data) {
			console.log('data com', data);
			//dispatch(receivePost(data));
		})
		.fail(function(xhr) {
			console.log('xhr com', xhr);
			//dispatch(failPost(xhr));
		});
	};
}

// ------------------------------------
// Action Handlers
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
// moved to separate file - reducers/index.js

