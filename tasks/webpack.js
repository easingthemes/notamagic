var webpack = require('webpack');
var options = {
	//options: require("../webpack.config.js"),
	dev: {
		// webpack options
		entry: '<%= src %>/commonjs/app.js',
		output: {
		    path: '<%= dist %>/js/',
		    filename: 'app.js',
		},
		noInfo: true,
		stats: {
		    // Configure the console output
		    assets: false,
		    colors: true,
		    modules: false,
		    reasons: true,
		    chunks: true,
			chunkModules: false
		},
		// stats: false disables the stats output
		devtool: 'source-map',
		plugins: [
		    new webpack.optimize.UglifyJsPlugin({
		    	minimize: true
		    })
		],
		//storeStatsTo: 'xyz', // writes the status to a variable named xyz
		// you may use it later in grunt i.e. <%= xyz.hash %>

		progress: false, // Don't show progress
		// Defaults to true

		failOnError: false, // don't report error to grunt if webpack find errors
		// Use this if webpack errors are tolerable and grunt should continue

		watch: true, // use webpacks watcher
		// You need to keep the grunt process alive

		keepalive: false, // don't finish the grunt task
		// Use this in combination with the watch option

		inline: false,  // embed the webpack-dev-server runtime into the bundle
		// Defaults to false

	},
	prod: {
				// webpack options
		entry: '<%= src %>/commonjs/app.js',
		output: {
		    path: '<%= dist %>/js/',
		    filename: 'app.js',
		},

		stats: {
		    // Configure the console output
		    colors: false,
		    modules: false,
		    reasons: false
		},
		plugins: [
		    new webpack.optimize.UglifyJsPlugin({
		    	minimize: true
		    })
		],
		failOnError: false,
		watch: false,
		keepalive: false
	},
	max: {
		// webpack options
		entry: '<%= src %>/commonjs/app.js',
		output: {
		    path: '<%= dist %>/js/',
		    filename: 'app.js',
		},

		stats: {
		    // Configure the console output
		    colors: false,
		    modules: true,
		    reasons: true
		},
		// stats: false disables the stats output
		devtool: 'source-map'

	},

};

module.exports = options;
