var path = require('path');

var NODE_MODULE_PATH= path.resolve(__dirname, '../node_modules');
var SRC_PATH = path.resolve(__dirname, '../app');
var STATIC_PATH = path.resolve(__dirname, '../static');

var HTMLWebpackPlugin = require('html-webpack-plugin'),
	ReplaceBundleStringPlugin = require('replace-bundle-webpack-plugin');

var config = {
    context: SRC_PATH,
    entry: {
		main: ['./index']
	},
    output: {
        path: STATIC_PATH,
        filename: '[name].js',
    },
	module: {
        //noParse 是 webpack 的另一个很有用的配置项，如果你确定一个模块中没有其它新的依赖 就可以配置这项，webpack 将不再扫描这个文件中的依赖。
        //exclude 排除不处理的目录
		//babel exclude: /(|)/
		// babel: 参数可以单独出来 query: {
		//									presets: [],
		//									plugins: []
		//							   }
		// babel 优化：cacheDirectory
        //'react-hot!babel?cacheDirectory=true&presets[]=react&presets[]=es2015&plugins[]=transform-decorators-legacy',
        //noParse: [],
		rules: [{
			test: /\.(js|jsx)$/,
            loader: "babel-loader",
            exclude: /node_modules/,
            options:{
                cacheDirectory: true,
                presets: ["react", "es2015"],
                plugins: ["transform-decorators-legacy"],
            }
		},{
			test: require.resolve('react'),
          	use: [{
          	    loader: 'expose-loader',
          	    options: 'React'
          	}]
		}]
	},
    resolve: {
		//root: [SRC_PATH, NODE_MODULE_PATH],
		modules: [
			SRC_PATH,
			"node_modules"
		],
		enforceExtension: false,
		alias: {
			'common': path.resolve(SRC_PATH, 'component/common'),
			'scss': path.resolve(SRC_PATH, 'scss'),
			'images': path.resolve(SRC_PATH, 'images'),
			'routes': path.resolve(SRC_PATH, 'routes'),
            'middlewares': path.resolve(SRC_PATH, 'middlewares'),
            //'redux': path.resolve(SRC_PATH, 'redux'),
            'component': path.resolve(SRC_PATH, 'component'),
		},
    },
	plugins: [
		new HTMLWebpackPlugin({
			filename: 'react.html',
			template: path.resolve(SRC_PATH, 'template.html'),
            favicon: path.resolve(SRC_PATH, 'favicon.ico'),
			chunks: ['main'],	
			inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            }
		}),
	],
};

module.exports = config;
