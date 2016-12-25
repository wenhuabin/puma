var path = require('path');

var node_modules = path.resolve(__dirname, 'node_modules');
var SRC_PATH = path.resolve(__dirname, 'app');

var HTMLWebpackPlugin = require('html-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin');


var config = {
    entry: {
		main: path.resolve(__dirname, 'app/index.js'),
	},
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
	devServer: {
    	historyApiFallback: true,
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
		},{
			test: require.resolve('react'),
			loader: 'expose?React'
		}],
	},
    resolve: {
		root: [SRC_PATH],
		extenssions: ['', '.js', '.es6.js', '.jsx', '.json', '.scss', '.css', 'png', 'jpg'],
		alias: {
			'common': 'common',
			'sass': 'sass',
			'images': 'images',
			'routes': 'routes',
		},
    },
	plugins: [
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(SRC_PATH, 'template.html'),
			chunks: ['main'],	
			inject: 'body'
		}),
		new CleanWebpackPlugin(['build', 'dist'],{
			root: path.resolve(SRC_PATH, './'),
			verbose: true,
			dry: false
		}),
	],
};

module.exports = config;

//loader: 'babel?presets[]=react&presets[]=es2015'
//entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
