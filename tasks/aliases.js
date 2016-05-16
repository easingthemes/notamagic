module.exports = function (grunt, options) {
  // computation...
  return {
    'plugins': [
      'concurrent:bower',
      'concurrent:css'
    ],
    'plugins_dev': [
      'plugins',
      'uglify:dev'
    ],
    'plugins_prod': [
      'plugins',
      'uglify:prod'
    ],
    'default': [
    	'clean',
    	'plugins_dev',
    	'concurrent:assets',
    	'concat:components_sass',
    	'sass:dev',
    	'webpack:dev',
    	'watch'
    ],
    'build': [
    	'clean',
    	'plugins_prod',
    	'concurrent:assets',
    	'concat:components_sass',
    	'sass:prod',
    	'webpack:prod'
    ],
  };
};
