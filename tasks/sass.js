
var options = {

	options: {
        sourceMap: true,
        outputStyle: 'compressed',
        imagePath: "../images/",
    },
    dev: {
        files: {
            '<%= dist %>/css/style.css': '<%= src %>/scss/style.scss'
        }
    },
    prod: {
    	options: {
	        sourceMap: false
	    },
        files: {
            '<%= dist %>/css/style.css': '<%= src %>/scss/style.scss'
        }
    }

};

module.exports = options;
