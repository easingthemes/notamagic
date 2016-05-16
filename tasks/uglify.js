module.exports = function () {

	'use strict';

	return {

		options: {
			screwIE8: true
		},

		dev: {
			options: {
				banner: '/*\n * <%= pkg.name %> 3rd party plugins - v.<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>\n */\n',
				//preserveComments: 'some',
				mangle: false,
				sourceMap: false
			},
			files: {
				'<%= dist %>/js/plugins.js': [
					'<%= tmp %>/plugins/*.js'
				]
			}
		},

		prod: {
			files: {
				'<%= dist %>/js/plugins.js': [
					'<%= tmp %>/plugins/*.js'
				]
			}
		},
		head: {
			files: {
				'<%= dist %>/js/plugins-head.js': [
					'<%= src %>/plugins/head/*.js'
				]
			}
		}
	};
};
