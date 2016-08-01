/* eslint key-spacing:0 spaced-comment:0 */
import path from 'path'
import _debug from 'debug'
import { argv } from 'yargs'
import ip from 'ip'

const localip = ip.address();
const debug = _debug('app:config');
debug('Creating default configuration.');

// ========================================================
// Default Configuration
// ========================================================
const config = {
  env : process.env.NODE_ENV || 'development',

  // ----------------------------------
  // Project Structure
  // ----------------------------------
  path_base  : path.resolve(__dirname, '..'),
  dir_client : 'src',
  dir_dist   : 'dist',
  dir_server : 'server',
  dir_test   : 'tests',

  // ----------------------------------
  // Server Configuration
  // ----------------------------------
  server_host : localip, // use string 'localhost' to prevent exposure on local network
  server_port : process.env.PORT || 3000,

  // ----------------------------------
  // Compiler Configuration
  // ----------------------------------
  compiler_css_modules     : false,
  compiler_devtool         : 'source-map',
  compiler_hash_type       : 'hash',
  compiler_fail_on_warning : false,
  compiler_quiet           : false,
  compiler_public_path     : '/',
  compiler_stats           : {
    chunks : false,
    chunkModules : false,
    colors : true
  },
	// Add plugins bower directory name
  compiler_bower : [
	'jquery',
	'bootstrap-sass',
	'jquery_appear',
	'owlcar',
	'jquery-bridget',
	'imagesloaded',
	'magnific-popup',
	'parallax.js',
	  'jquery-countTo'
  ],
  compiler_npm : [
    'history',
    'react',
	'react-visibility-sensor',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux',
	 'isotope-layout'
  ],

  // ----------------------------------
  // Test Configuration
  // ----------------------------------
  coverage_reporters : [
    { type : 'text-summary' },
    { type : 'lcov', dir : 'coverage' }
  ]
}

/************************************************
-------------------------------------------------

All Internal Configuration Below
Edit at Your Own Risk

-------------------------------------------------
************************************************/

// ------------------------------------
// Environment
// ------------------------------------
// N.B.: globals added here must _also_ be added to .eslintrc
config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production',
  '__TEST__'     : config.env === 'test',
  '__DEBUG__'    : config.env === 'development' && !argv.no_debug,
  '__COVERAGE__' : !argv.watch && config.env === 'test',
  '__BASENAME__' : JSON.stringify(process.env.BASENAME || '')
};

// ------------------------------------
// Validate Vendor Dependencies
// ------------------------------------
const pkg = require('../package.json')

config.compiler_npm = config.compiler_npm
  .filter((dep) => {
    if (pkg.dependencies[dep]) return true;

    debug(
      `Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.
       Consider removing it from vendor_dependencies in ~/config/index.js`
    )
  });

const bower = require('../bower.json');

config.compiler_bower = config.compiler_bower
  .filter((dep) => {
    if (bower.dependencies[dep]) return true;

    debug(
      `Plugin "${dep}" was not found as an bower dependency in bower.json; ` +
      `it won't be included in the webpack vendor bundle.
       Consider removing it from vendor_dependencies in ~/config/index.js`
    )
  })

config.compiler_vendor = config.compiler_bower.concat(config.compiler_npm);
console.log(config.compiler_vendor);
// ------------------------------------
// Utilities
// ------------------------------------
const resolve = path.resolve
const base = (...args) =>
  Reflect.apply(resolve, null, [config.path_base, ...args])

config.utils_paths = {
  base   : base,
  client : base.bind(null, config.dir_client),
  dist   : base.bind(null, config.dir_dist)
}

// ========================================================
// Environment Configuration
// ========================================================
debug(`Looking for environment overrides for NODE_ENV "${config.env}".`)
const environments = require('./environments').default
const overrides = environments[config.env]
if (overrides) {
  debug('Found overrides, applying to default configuration.')
  Object.assign(config, overrides(config))
} else {
  debug('No environment overrides found, defaults will be used.')
}

export default config
