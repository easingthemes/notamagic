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

export const sendComment = () => ({
	type: 'SEND_COMMENT'
});
export const saveComment = (comment) => ({
	type: 'SAVE_COMMENT',
	comment
});
export const failComment = (xhr) => ({
	type: 'FAIL_COMMENT',
	xhr
});
