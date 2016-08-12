import actionType from '../constants/actionTypes';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const initialState = {
	fetching: false,
	post: {}
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

const reducers = {
	getPost,
	form: formReducer
};

const postReducer = combineReducers(reducers);

export default postReducer;
