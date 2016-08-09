import { injectReducer } from '../../store/reducers'
export default (store) => ({
  path: 'blog/:postId',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const PostRoute = require('./containers/BlogItemPageContainer').default
		const reducer = require('./actions/index').default;

		injectReducer(store, { key: 'blog', reducer });

		cb(null, PostRoute)
    }, 'PostRoute')
  }
})
