var path = require('path');

var node_modules = path.resolve(__dirname, 'node_modules');
var SRC_PATH = path.resolve(node_modules, 'react/dist/react.min.js');


var config = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	module: {
		loaders: [{
			test: /\.(js|jsx)$/,
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

//loader: 'babel?presets[]=react&presets[]=es2015'
//entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
