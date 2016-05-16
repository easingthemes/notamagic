
var options = {

	options: {
		shorthandCompacting: false,
		roundingPrecision: -1
	},
	plugins: {
		files: {
			'<%= dist %>/css/plugins.css': [
				'<%= tmp %>/plugins/*.css'
			]
		}
	}

};

module.exports = options;
