import { combineReducers } from 'redux';

const initialState = {
	fetching: false,
	list: []
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
				list: action.questions
			});
	}

	return state;
}

function auth(state = initialStateAuth, action) {
//...
}

function counterReducer (state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]

	return handler ? handler(state, action) : state
}

const rootReducer = combineReducers({
	auth,
	questions,
	counterReducer
});

export default rootReducer;
