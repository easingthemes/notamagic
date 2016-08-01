module.exports = {
	getparams: function(options) {
		const patternSubcomponent = ':';
		const patternAuthor = '@';
		let arrgs = options.entity.name;

		let component;
		let subcomponent;
		let author;
		let name;

		if (arrgs.indexOf(patternAuthor) >= 0) {
			author = arrgs.split('@')[1];
			if (arrgs.split('@')[0].indexOf(patternSubcomponent) >= 0) {
				subcomponent = arrgs.split('@')[0].split(':')[1];
				component = arrgs.split('@')[0].split(':')[0];
				name = subcomponent;
			} else {
				component = arrgs.split('@')[0];
				name = component;
			}
		} else if (arrgs.indexOf(patternSubcomponent) >= 0) {
			subcomponent = arrgs.split(':')[1];
			component = arrgs.split(':')[0];
			name = subcomponent;
		} else {
			component = arrgs;
			name = component;
		}

		return {
			component: component,
			subcomponent: subcomponent,
			author: author,
			name: name
		}
	},

	locals: function(options) {
		const params = this.getparams(options);
		console.log('locals params', params);
		return {
			name: params.name,
			author: params.author
		};
	},

	fileMapTokens: function(options) {
		const params = this.getparams(options);
		console.log('fileMapTokens params', params);
		return {
			__component__: function(options){
				// logic to determine value goes here
				return params.component;
			},
			__subcomponent__: function(options){
				// logic to determine value goes here
				return params.subcomponent;
			}
		}
	}

	// Should probably never need to be overriden
	//
	// filesPath: function(options) {
	// 	console.log('filesPath', options);
	// 	// const params = this.getparams(options);
	// 	// if (params.subcomponent) {
	// 	// 	return path.join(this.path, 'subcomponent');
	// 	// }
	// 	//return path.join(this.path, 'files');
	// }

	// beforeInstall: function(options) {},
	// afterInstall: function(options) {},
};
