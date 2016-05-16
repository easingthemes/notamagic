(function($) {
	'use strict';
	/**
	 * navigation module implementation.
	 *
	 * @author Dragan Filipovic <dragan.filipovic@namics.com>
	 * @namespace T.Module
	 * @class Navigation
	 * @extends T.Module
	 */
	T.Module.Navigation = T.createModule({
		start: function(resolve) {
			var $ctx = $(this._ctx);

			resolve();
		}
	});
}(jQuery));
