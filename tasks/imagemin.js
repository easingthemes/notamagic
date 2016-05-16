
var options = {

	images: {                         // Another target
      files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: '<%= src %>/images/',     // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: '<%= dist %>/images'      // Destination path prefix
      }]
    }

};

module.exports = options;
