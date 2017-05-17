var config = require("./common.config"),
    path = require('path'),
    node_modules_dir = path.resolve(__dirname, '../node_modules/'),
    webpack = require('webpack');


Object.assign(config.output, {
    publicPath: '//react.wenhuabin.com/',
    filename: '[chunkhash:8].[name].min.js',
    // chunkFilename: '[chunkhash:8].chunk.min.js' 暂时不删，异步再用
});
config.plugins.push(
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

module.exports = config;
