import actionType from '../constants/actionTypes';

export const requestPost = () => ({
	type: actionType.REQUEST_POST
});
export const receivePost = (post) => ({
	type: actionType.RECEIVE_POST,
	post
});
export const failPost = (xhr) => ({
	type: actionType.FAIL_POST,
	xhr
});
