//import HomeView from './components/HomeView';
import { injectReducer } from '../../store/reducers';
// Sync route definition
const getCom = (store) => {
	return ({
		getComponent (nextState, cb) {
			require.ensure([], (require) => {
				const PostsRoute = require('./containers/BlogPageContainer').default;
				const reducer = require('./reducers/index').default;

				injectReducer(store, {key: 'posts', reducer});

				cb(null, PostsRoute)
			}, 'PostsRoute')
		}
	});

}
export default getCom;
