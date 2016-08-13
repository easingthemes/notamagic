import actionType from '../constants/actionTypes';

export const requestPosts = () => ({
	type: actionType.REQUEST_POSTS
});
export const receivePosts = (posts) => ({
	type: actionType.RECEIVE_POSTS,
	posts
});
export const failPosts = (xhr) => ({
	type: actionType.FAIL_POSTS,
	xhr
});
