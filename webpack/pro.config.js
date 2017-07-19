var config = require("./common.config"),
    path = require('path'),
    node_modules_dir = path.resolve(__dirname, '../node_modules/'),
    webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackMd5Hash = require('webpack-md5-hash'),
	CleanWebpackPlugin = require('clean-webpack-plugin');
const version = require('../configs/version').version;
var SRC_PATH = path.resolve(__dirname, '../app');

Object.assign(config.output, {
    publicPath: '/',
	path: path.resolve(__dirname,'../dist'),
    filename: '[chunkhash:8].' + version + '.js',
});
config.module.rules[2]={
	test: /\.scss$/,
	use: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: [
			"css-loader",
			"sass-loader"
		]
	})
};
config.plugins.push(
	new ExtractTextPlugin({
        filename: 'css/[contenthash:8].' + version + '.css',
	    //disable: false,
	    //allChunks: true
	}),
	new CleanWebpackPlugin(['dist'],{
		root: path.resolve(__dirname, '../'),
		verbose: true,
		dry: false
	}),
    new webpack.optimize.UglifyJsPlugin({
        output: {
            comments: false
        },
        sourceMap: false,
        minimize: true,
        compress: {
            drop_debugger: true,
            warnings: false,
            drop_console: true
        }
    })
);

console.log(config);
module.exports = config;
