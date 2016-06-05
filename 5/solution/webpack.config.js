var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: { path: __dirname, filename: 'build/bundle.js' },
    module: {
        loaders: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['transform-object-rest-spread'],
                }
            }
        ]
    },
    devtool: 'source-map'
};
