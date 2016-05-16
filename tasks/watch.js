
module.exports = function (grunt) {

	'use strict';

	return {
		options: {
	    	livereload: true,
	    },
		scss: {
		    files: '<%= src %>/scss/**/*',
		    tasks: ['sass:dev']
		},
		components: {
		    files: '<%= components %>/**/*.scss',
		    tasks: ['concat:components_sass']
		}
	};
};
