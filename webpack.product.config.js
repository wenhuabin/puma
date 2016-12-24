var path = require('path');

var node_modules = path.resolve(__dirname, 'node_modules');

var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
    	path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
      		exclude: [node_modules],
			loader: 'babel'
		},{
			test: /\.(png|jpg)$/,
			loader: 'url?limit=25000'
		},{
			test: /\.scss$/,
			loader: 'style!css!sass'
		}],
	},
    resolove: {

    },
};

module.exports = config;
