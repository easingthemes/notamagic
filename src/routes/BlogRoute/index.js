import { injectReducer } from '../../store/reducers'
//import CoreLayout from '../../layouts/CoreLayout/CoreLayout';
//import Blog from './components/BlogRoute';
import PostRoute from './routes/PostRoute';

export default (store) => ({
	path: 'blog',
	//component: CoreLayout,
	//indexRoute: Blog,
	childRoutes: [
		PostRoute(store)
	],
	getComponent (nextState, cb) {
		require.ensure([], (require) => {
			const PostsRoute = require('./containers/BlogPageContainer').default;
			const reducer = require('./reducers/index').default;

			injectReducer(store, { key: 'posts', reducer });

			cb(null, PostsRoute)
		}, 'PostsRoute')
	}
})
