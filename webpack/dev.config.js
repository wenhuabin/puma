var _ = require("lodash"),
    config = require("./common.config"),
    webpack = require("webpack"),
	devEntryConfig = {};

_.merge(config, {
    devtool: 'cheap-source-map'
});

config.output['publicPath'] = 'http://localhost:3000/static/';

_.forEach(config.entry, function(value, key){

    if(!_.isArray(value)){
        value = [value]
    }

    value.unshift('webpack-dev-server/client?http://localhost:3000',
                  'webpack/hot/only-dev-server');

    devEntryConfig[key] = value;
});
config.entry = devEntryConfig;
config.devServer.historyApiFallback = true;

config.plugins.push(new webpack.HotModuleReplacementPlugin(),
                    new webpack.NoEmitOnErrorsPlugin(),
                    new webpack.LoaderOptionsPlugin({
                        debug: true
                    }));

module.exports = config;

