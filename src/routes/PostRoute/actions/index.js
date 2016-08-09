//import getPageData from '../../../utils/getPageData';
//import {rootReducer} from '../reducers/index';
import { combineReducers } from 'redux';

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'PostRoute.COUNTER_INCREMENT';

// ------------------------------------
// Helpers
// ------------------------------------
const successCallback = (data) => {
	console.log('_this start');
	return dispatch => {
		console.log('_this dispatch', data);
		dispatch(receiveQuestions(data));
	};
}
// function successCallback(data) {
// 	dispatch(receiveQuestions(data));
// }

function errorCallback() {
	console.log('GET request failed!');
}

function requestQuestions() {
	return { type: 'REQUEST_QUESTIONS' }
}

function receiveQuestions(post) {
	return { type: 'RECEIVE_QUESTIONS', post };
}

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
	return {
		type: COUNTER_INCREMENT,
		payload: value
	}
}
export const doubleAsync = () => {
	return (dispatch, getState) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				dispatch(increment(getState().counter))
				resolve()
			}, 200)
		})
	}
}

export const actions = {
	increment,
	doubleAsync
}

export function fetchBlogItem(id) {
	return dispatch => {
		dispatch(requestQuestions());
		$.ajax({
			url: Constants.apiUrl + 'posts/' + id + '?_embed=1',
			crossDomain: true
		})
		.done(function(data) {
			console.log('data', data);
			dispatch(receiveQuestions(data));
		})
		.fail(function(xhr) {
			console.log('error');
		});
	};
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	[COUNTER_INCREMENT]: (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
// const initialState = 0;
// export default function counterReducer (state = initialState, action) {
// 	const handler = ACTION_HANDLERS[action.type]
//
// 	return handler ? handler(state, action) : state
// }


const initialState = {
	fetching: false,
	post: {}
}

function questions(state = initialState, action) {
	switch (action.type) {
		case 'REQUEST_QUESTIONS':
			return Object.assign({}, state, {
				fetching: true
			});
		case 'RECEIVE_QUESTIONS':
			return Object.assign({}, state, {
				fetching: false,
				post: action.post
			});
	}

	return state;
}

function counterReducer (state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]

	return handler ? handler(state, action) : state
}

const rootReducer = combineReducers({
	questions,
	counterReducer
});

export default rootReducer;

