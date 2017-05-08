var path = require('path');

var NODE_MODULE_PATH= path.resolve(__dirname, '../node_modules');
var SRC_PATH = path.resolve(__dirname, '../app');
var STATIC_PATH = path.resolve(__dirname, '../static');

var HTMLWebpackPlugin = require('html-webpack-plugin'),
	CleanWebpackPlugin = require('clean-webpack-plugin'),
	ReplaceBundleStringPlugin = require('replace-bundle-webpack-plugin');
console.log(SRC_PATH);

var config = {
    context: SRC_PATH,
    entry: {
		main: ['./index']
	},
    output: {
        path: STATIC_PATH,
        filename: '[name].js',
    },
	devServer: {
    	historyApiFallback: true,
  	},
	module: {
        //noParse 是 webpack 的另一个很有用的配置项，如果你确定一个模块中没有其它新的依赖 就可以配置这项，webpack 将不再扫描这个文件中的依赖。
        //exclude 排除不处理的目录
		//babel exclude: /(|)/
		// babel: 参数可以单独出来 query: {
		//									presets: [],
		//									plugins: []
		//							   }
        noParse: [],
		loaders: [{
			test: /\.(js|jsx)$/,
            loader: 'react-hot!babel?presets[]=react&presets[]=es2015&plugins[]=transform-decorators-legacy',
            exclude: /node_modules/ 
		},{
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
		},{
			test: /\.scss$/,
			loader: 'style!css!sass'
		},{
			test: require.resolve('react'),
			loader: 'expose?React'
		}],
	},
    resolve: {
		root: [SRC_PATH, NODE_MODULE_PATH],
		extenssions: ['', '.js', '.es6.js', '.jsx', '.json', '.scss', '.css', 'png', 'jpg'],
		alias: {
			'common': 'common',
			'sass': 'sass',
			'images': 'images',
			'routes': 'routes',
            'middlewares': 'middlewares',
            'redux': 'redux',
            'component': 'component',
		},
    },
	plugins: [
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(SRC_PATH, 'template.html'),
            favicon: path.resolve(SRC_PATH, 'favicon.ico'),
			chunks: ['main'],	
			inject: 'body'
		}),
		new CleanWebpackPlugin(['static'],{
			root: path.resolve(SRC_PATH, '../'),
			verbose: true,
			dry: false
		}),
		new ReplaceBundleStringPlugin([{
            partten: /\/backend/g, // 这里看看怎么处理放到一个项目config文件里面去，不用这种形式
            replacement: function () {
                return '//api.wenhuabin.com';
            }
        }])
	],
};

module.exports = config;
