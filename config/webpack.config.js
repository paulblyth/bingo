/* eslint-disable */
// for webpack configuration docs see https://webpack.github.io/docs/configuration.html. We use this
// configuration through the CLI so unlike the node API setup we don't provide a callback but simply
// export a configuration object.

var path              = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var context           = path.join(__dirname, '..');

module.exports = {

    context: context,

    entry: path.join(context, '/src/index.js'),

    output: {
        path: path.join(context, 'dist'),
        filename: 'app.bundle.js',
        publicPath: '/'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'ng-annotate!babel?presets[]=es2015',
                exclude: /(node_modules\/)(?!8-bit)/
            },
            // HTML
            {
                test: /\.html/,
                loader: 'html-loader'
            },
            // SCSS/CSS
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            // FONTS
            {
                test: /fonts\/.*\.woff2(\?.*)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff2'
            },
            {
                test: /fonts\/.*\.woff(\?.*)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /fonts\/.*\.ttf(\?.*)?$/,
                loader: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /fonts\/.*\.eot(\?.*)?$/,
                loader: 'file'
            },
            {
                test: /fonts\/.*\.svg(\?.*)?$/,
                loader: 'url?mimetype=image/svg+xml'
            },
            // IMAGE LOADER
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file'
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'head'
        })
    ]
};
