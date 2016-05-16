
var options = {

	bower: {
        tasks: ['bower_concat']
    },
    css: {
        tasks: ['cssmin', 'modernizr']
    },
    assets: {
        tasks: ['uglify:head', 'copy:fonts', 'imagemin']
    }

};

module.exports = options;
