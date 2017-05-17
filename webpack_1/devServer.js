var webpack = require('webpack'),
    webpackDevServer = require('webpack-dev-server'),
    config = require('./dev.config');

new webpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    inline: true,
    historyApiFallback: true,
    proxy: [{
                path: '/backend/*',
                target: 'http://api.wenhuabin.com',
                // 改成链外部target后，必须加host, 还没找到原因
                host: 'api.wenhuabin.com',
                bypass: function(req, res, proxyOptions) {
                }
            },
            {
                path: '/*',
                target: 'http://demo.wenhuabin.com',
                secure: false,
                bypass: function(req, res, proxyOptions){
                    if(req.headers.accept.indexOf('html')!==-1) {
                        return 'http://localhost:3000/static/index.html';
                    }
                }
            }
    ],
    quiet: false,
    noInfo: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: {colors: true }
}).listen(3000, 'localhost', function(err, result){
    if(err){
        console.log(err);
    }
    console.log('Hi,man, Now listening at localhost:3000');
});


