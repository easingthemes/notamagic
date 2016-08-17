import {requestPost, receivePost, failPost, sendComment, saveComment, failComment} from './actionCreators';
//import getIp from '../../../utils/getIp';
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
export function postComment(data) {
	return dispatch => {
		dispatch(sendComment());
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
				//author_ip: getIp,
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
			dispatch(saveComment(data));
		})
		.fail(function(xhr) {
			dispatch(failComment(xhr));
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

