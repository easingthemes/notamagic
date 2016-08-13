import { injectReducer } from '../../../../store/reducers';

export default (store) => ({
	path: 'posts',
	getComponent (nextState, cb) {
		require.ensure([], (require) => {
			const PostRoute = require('./containers/BlogPageContainer').default;
			const reducer = require('./reducers/index').default;

			injectReducer(store, { key: 'posts', reducer });

			cb(null, PostRoute)
		}, 'PostsRoute')
	}
})
