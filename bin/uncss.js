import uncss from 'uncss';
import zlib from 'zlib';
import fs from 'fs';

const files   = ['http://localhost:3000/'];
console.log('uncss start');
uncss(files, function (error, output) {
	fs.writeFile(__dirname + "/style.css", output, function(err3) {
		if(err3) {
			return console.log(err3);
		}
		console.log('written');
	});
	zlib.deflate(output, (err, buffer) => {
		if (!err) {
			console.log("gziped");
			fs.writeFile(__dirname + "/style.css.gz", buffer, function(err2) {
				if(err2) {
					return console.log(err2);
				}
				console.log('written');
			});
		} else {
			console.log('err gzip');
		}
	});
});
