'use strict';

module.exports = function (grunt) {

	var path = require('path');

	// measure the duration of each task
	require('time-grunt')(grunt);

	require('load-grunt-config')(grunt, {
		// path to task.js files
		configPath: path.join(process.cwd(), 'tasks'),
		// auto grunt.initConfig
		init: true,
		jitGrunt: {
			staticMappings: {
				express: 'grunt-express-server'
			}
		},
		// data passed into config. Eg: Can use with <%= pkg %>
		data: {
			pkg: require('./package.json'),
			src: './src',
			dist: './dist',
			tmp: './.tmp'
		}
	});
};

