/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Load the favicon, the manifest.json file and the .htaccess file
import 'file?name=[name].[ext]!./favicon.ico';
import 'file?name=[name].[ext]!./manifest.json';
import 'file?name=[name].[ext]!./.htaccess';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';
import useScroll from 'react-router-scroll';
import configureStore from './store';

// Load Core CSS
// =====================================
import '!!style-loader!css-loader!assets/css/core/bootstrap.min.css';
import '!!style-loader!css-loader!assets/css/core/animate.min.css';
// Load Main CSS
// =====================================
import 'assets/css/main/main.scss';
import '!!style-loader!css-loader!assets/css/main/main.css';
import '!!style-loader!css-loader!assets/css/main/setting.css';
import '!!style-loader!css-loader!assets/css/main/hover.css';

// Load Magnific Popup CSS
// =====================================
import '!!style-loader!css-loader!assets/css/magnific/magic.min.css';
import '!!style-loader!css-loader!assets/css/magnific/magnific-popup.css';
import '!!style-loader!css-loader!assets/css/magnific/magnific-popup-zoom-gallery.css';

// Load OWL Carousel CSS
// =====================================
import '!!style-loader!css-loader!assets/css/owl-carousel/owl.carousel.css';
import '!!style-loader!css-loader!assets/css/owl-carousel/owl.theme.css';
import '!!style-loader!css-loader!assets/css/owl-carousel/owl.transitions.css';

// Load Color CSS - Please uncomment to apply the color.
// =====================================
import '!!style-loader!css-loader!assets/css/color/pasific.css';

// Load Fontbase Icons - Please Uncomment to use linea icons
// =====================================
import '!!style-loader!css-loader!assets/css/icon/font-awesome.css';
import '!!style-loader!css-loader!assets/css/icon/et-line-font.css';

const globalFontObserver = new FontFaceObserver('Open Sans', {});
const extraFontObserver = new FontFaceObserver('Pacifico', {});

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)

// When Open Sans is loaded, add a font-family using Open Sans to the body
globalFontObserver.check().then(() => {
	document.body.classList.add('font-global-loaded');
}, () => {
	document.body.classList.remove('font-global-loaded');
});
// When Pacifico is loaded, add a font-family using Pacifico to the body
extraFontObserver.check().then(() => {
	document.body.classList.add('font-extra-loaded');
}, () => {
	document.body.classList.remove('font-extra-loaded');
});

// Create redux store with history
// this uses the singleton browserHistory provided by react-router
// Optionally, this could be changed to leverage a created history
// e.g. `const browserHistory = useRouterHistory(createBrowserHistory)();`
const initialState = {};
const store = configureStore(initialState, browserHistory);

// Sync history and store, as the react-router-redux reducer
// is under the non-default key ("routing"), selectLocationState
// must be provided for resolving how to retrieve the "route" in the state
import { selectLocationState } from 'containers/App/selectors';
const history = syncHistoryWithStore(browserHistory, store, {
	selectLocationState: selectLocationState()
});

// Set up the router, wrapping all Routes in the App component
import App from 'containers/App';
import createRoutes from './routes';
const rootRoute = {
	component: App,
	childRoutes: createRoutes(store)
};

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={history}
      routes={rootRoute}
      render={
        // Scroll to top when going to a new page, imitating default browser
        // behaviour
        applyRouterMiddleware(
          useScroll(
            (prevProps, props) => {
              if (!prevProps || !props) {
                return true;
              }

              if (prevProps.location.pathname !== props.location.pathname) {
                return [0, 0];
              }

              return true;
            }
          )
        )
      }
    />
  </Provider>,
  document.getElementById('app')
);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
import { install } from 'offline-plugin/runtime';
install();
