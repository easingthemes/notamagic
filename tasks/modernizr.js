module.exports = {
	dist: {
		"cache": true,
		"devFile": false,
		"dest": "<%= dist %>/js/modernizr-custom.js",
		"parseFiles": true,
		"customTests": [],
		"tests": [
			// Tests
		],
		"options": [
			"setClasses"
		],
		"uglify": true,
		"files": {
			"src": [
				"<%= src %>/commonjs/**/*",
				"<%= src %>/scss/**/*"
			]
		},
	}
}