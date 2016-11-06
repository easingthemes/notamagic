// import uncss from 'uncss';
import purify from 'purify-css';
import zlib from 'zlib';
import fs from 'fs';
// import path from 'path';
import _debug from 'debug';
// import config from '../config';

const debug = _debug('app:bin:uncss');
// const paths = config.utils_paths;
const filename = 'style.css';
const content = ['./dist/*.js', './dist/*.html'];
const css = ['./dist/*.css'];
const options = {
	output: './dist/' + filename,
	minify: true,
	// rejected: true,
	info: true
};

debug('purify start');
purify(content, css, options, (output) => {
	debug('zlib start');
	zlib.deflate(output, (err, buffer) => {
		if (!err) {
			debug('zlib end');
			fs.writeFile(__dirname + '/../dist/' + filename + '.gz', buffer, function(err2) {
				if(err2) {
					return debug('writeFile error', err2);
				}
				debug('writeFile end');
			});
		} else {
			debug('zlib error', err);
		}
	});
});
