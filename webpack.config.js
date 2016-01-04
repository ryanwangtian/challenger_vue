var vue = require('vue-loader');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        path: './build',
        filename: '[name].bundle.js',
        publicPath: 'build/'
    },
    module: {
        loaders: [
            //.vue文件使用 vue-loader 来处理
            { test: /\.vue$/, loader: "vue-loader" },
            //图片文件使用 url-loader 来处理，小于16kb的直接转为base64
            { test: /\.(gif|png|jpg|svg)$/, loader: 'url-loader?name=images/[hash:8].[name].[ext]&limit=16384' },
            { test: /\.(ttf|eot|svg|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' }
        ]
    },
    // devtool: '#source-map',
    devServer: {
        proxy: {
            '*': {
                target: 'https://challenger-app.envisioncn.com',
                secure: false,
                bypass: function(req, res, proxyOptions) {
                    if (req.headers.accept.indexOf('html') !== -1) {
                        console.log('Skipping proxy for browser request.');
                        return req.path;
                    }
                },
            },
        },
    }
};
