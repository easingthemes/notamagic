import actionType from '../constants/actionTypes';
import {combineReducers} from 'redux';

const initialState = {
	fetching: false,
	sending: false,
	sent: false,
	post: {},
	comment: {}
};

function getPost(state = initialState, action) {
	switch (action.type) {
		case actionType.REQUEST_POST:
			return Object.assign({}, state, {
				fetching: true
			});
		case actionType.RECEIVE_POST:
			return Object.assign({}, state, {
				fetching: false,
				post: action.post
			});
		case actionType.FAIL_POST:
			return Object.assign({}, state, {
				fetching: false,
				error: action.xhr
			});
		default:
			return state;
	}
}

function postComment(state = initialState, action) {
	switch (action.type) {
		case 'SEND_COMMENT':
			return Object.assign({}, state, {
				sending: true
			});
		case 'SAVE_COMMENT':
			return Object.assign({}, state, {
				sending: false,
				sent: true,
				comment: action.comment
			});
		case 'FAIL_COMMENT':
			return Object.assign({}, state, {
				sending: false,
				sent: false,
				error: action.xhr
			});
		default:
			return state;
	}
}

const reducers = {
	getPost,
	postComment
};

const postReducer = combineReducers(reducers);

export default postReducer;
