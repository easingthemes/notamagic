import actionType from '../constants/actionTypes';
import {combineReducers} from 'redux';

const initialState = {
	fetching: false,
	posts: []
};

function getPosts(state = initialState, action) {
	switch (action.type) {
		case actionType.REQUEST_POSTS:
			return Object.assign({}, state, {
				fetching: true
			});
		case actionType.RECEIVE_POSTS:
			return Object.assign({}, state, {
				fetching: false,
				posts: action.posts
			});
		case actionType.FAIL_POSTS:
			return Object.assign({}, state, {
				fetching: false,
				error: action.xhr
			});
		default:
			return state;
	}
}

const reducers = {
	getPosts
};

const postsReducer = combineReducers(reducers);

export default postsReducer;
