var _ = require("lodash"),
    config = require("./common.config"),
    webpack = require("webpack");

_.merge(config, {
    debug: true,
    devtool: 'cheap-source-map'
});

config.output['publicPath'] = 'http://localhost:3000/static/';
config.entry.main.unshift('webpack-dev-server/client?http://localhost:3000',
                  'webpack/hot/only-dev-server');

config.plugins.push(new webpack.HotModuleReplacementPlugin(),
                    new webpack.NoErrorsPlugin());

module.exports = config;

