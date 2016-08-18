import { injectReducer } from '../../store/reducers';

export default (store) => ({
  path: 'contact',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ContactRoute = require('./containers/ContactRouteContainer').default;
      const reducer = require('./modules/ContactRoute').default;

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'ContactRoute', reducer });

      /*  Return getComponent   */
      cb(null, ContactRoute);

    /* Webpack named bundle   */
    }, 'ContactRoute')
  }
})
