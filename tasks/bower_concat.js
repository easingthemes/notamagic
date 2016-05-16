var _ = require('lodash');
module.exports = function (grunt) {
	// computation...
	return {
		all: {
			dest: '<%= tmp %>/plugins/plugins.pkg.js',
			cssDest: '<%= tmp %>/plugins/plugins.pkg.css',
			bowerOptions: {
				relative: false
			},
			exclude: [
				'modernizr'
			],
			mainFiles: {
				'bootstrap': [
					'dist/css/bootstrap.css',
					'dist/js/bootstrap.min.js'
				],
				'jqzoom': 'js/jquery.jqzoom-core.pack.js',
				'owlcar': [
					'owl-carousel/owl.carousel.min.js',
					'owl-carousel/owl.carousel.css'
				],
				'jquery-parallax': [
					'scripts/jquery.parallax-1.1.3.js'
				],
				'bootstrap-touchspin': [
					'dist/jquery.bootstrap-touchspin.min.js',
					'dist/jquery.bootstrap-touchspin.min.css'
				],
				'iCheck': [
					//'skins/square/_all.css',
					'icheck.min.js'
				]
			},
			callback: function (mainFiles, component) {
				return  _.map(mainFiles, function (filepath) {
					// Use minified files if available
					var min = filepath.replace(/\.js$/, '.min.js');
					return grunt.file.exists(min) ? min : filepath;
				});
			}
		}
	}
}
