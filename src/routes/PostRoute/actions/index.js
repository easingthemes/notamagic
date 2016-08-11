import { combineReducers } from 'redux';

// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Helpers
// ------------------------------------

function requestPost() {
	return { type: 'REQUEST_POST' }
}

function receivePost(post) {
	return { type: 'RECEIVE_POST', post };
}

function failPost(xhr) {
	return { type: 'FAIL_POST', xhr };
}

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
export function sendComment(post, parent) {
	return dispatch => {
		//dispatch(requestPost());
		$.ajax({
			url: Constants.apiUrl + 'comments',
			type: 'POST',
			crossDomain: true,
			data: {
				author: 0,
				author_email: 'df@df.com',
				author_name: 'Df fffd',
				author_url: '',
				content: 'tst post cmmt',
				date: '2016-08-10T21:46:15',
				//date_gmt: '',
				karma: 0,
				parent: parent,
				post: post,
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
const initialState = {
	fetching: false,
	post: {}
};

function post(state = initialState, action) {
	switch (action.type) {
		case 'REQUEST_POST':
			return Object.assign({}, state, {
				fetching: true
			});
		case 'RECEIVE_POST':
			return Object.assign({}, state, {
				fetching: false,
				post: action.post
			});
		case 'FAIL_POST':
			return Object.assign({}, state, {
				fetching: false,
				error: action.xhr
			});
	}

	return state;
}

function auth(state = initialState, action) {
	return state;
}

const rootReducer = combineReducers({
	post,
	auth
});

export default rootReducer;

