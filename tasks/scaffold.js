var path = require('path');

module.exports = function (grunt) {

	'use strict';

	var componentsPath = path.join(process.cwd(), 'WEB-INF/templates/components'),
		demoPath = path.join(process.cwd(), 'scaffold');
	var template = {};

	template[demoPath + '/demoComponent/index.js'] = componentsPath + '/{{name}}/index.js';
	template[demoPath + '/demoComponent/_index.scss'] = componentsPath + '/{{name}}/_index.scss';
	template[demoPath + '/demoComponent/index.html'] = componentsPath + '/{{name}}/index.html';

	return {
		component: {
	        options: {
	            questions: [{
	                name: 'name',
	                type: 'input',
	                message: 'Component name:'
	            }],
	            template: template,
	            after: function(name) {

	            }
	        }
	    }
	};
};
