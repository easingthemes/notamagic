import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'portfolio',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const PortfolioRoute = require('./containers/PortfolioRouteContainer').default
      const reducer = require('./modules/PortfolioRoute').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'PortfolioRoute', reducer })

      /*  Return getComponent   */
      cb(null, PortfolioRoute)

    /* Webpack named bundle   */
    }, 'PortfolioRoute')
  }
})
