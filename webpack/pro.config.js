let config = require("./common.config"),
    path = require('path'),
    node_modules_dir = path.resolve(__dirname, '../node_modules/'),
    webpack = require('webpack');

let ExtractTextPlugin = require("extract-text-webpack-plugin"),
    WebpackMd5Hash = require('webpack-md5-hash'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
    SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const version = require('../configs/version').version;
var SRC_PATH = path.resolve(__dirname, '../app');

Object.assign(config.output, {
    publicPath: '/',
	path: path.resolve(__dirname,'../dist'),
    filename: 'js/[name].[chunkhash:8].' + version + '.js',
});
config.mode = 'production';
config.module.rules.push({
	test: /\.scss$/,
	use: ExtractTextPlugin.extract({
		fallback: "style-loader",
		use: [
			"css-loader",
			"sass-loader"
		]
	})
},{
	test: /\.(png|jpg)$/,
	loader: "url-loader",
	options: {
	    limit: 8192,
	    name: 'images/[hash:8].' + version + '.[ext]'
	}
});
config.plugins.push(
	//new webpack.DefinePlugin({
	//  	'process.env': {
	//  	  NODE_ENV: JSON.stringify('production')
	//  	}
	//}),
	new ExtractTextPlugin({
        filename: 'css/[id].[contenthash:8].' + version + '.css',
	    allChunks: true, 
	    disable: false,
	}),
	new CleanWebpackPlugin(['dist'],{
		root: path.resolve(__dirname, '../'),
		verbose: true,
		dry: false
	}),
    new UglifyJsPlugin({
        sourceMap: false,
        parallel: true,
        //minimize: true, //貌似已经废弃
        cache: true,
        uglifyOptions: {
            output: {
                comments: false
            },
            compress: {
                drop_debugger: true,
                warnings: false,
                drop_console: true
            }
        }
    }),
    new SWPrecacheWebpackPlugin({
        cacheId: 'puma',
        filename: 'puma-sw.js',
        staticFileGlobs: ['dist/*.{html,ico}','dist/**/*.{js,html,css,png,jpg}'],
        minify: true,
        stripPrefix: 'dist/',
    })
);

module.exports = config;
