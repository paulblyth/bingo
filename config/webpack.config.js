/* eslint-disable */
// for webpack configuration docs see https://webpack.github.io/docs/configuration.html. We use this
// configuration through the CLI so unlike the node API setup we don't provide a callback but simply
// export a configuration object.

var path              = require('path');
var webpack           = require('webpack');

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
                loader: 'babel',
                exclude: /(node_modules\/)(?!8-bit)/,
                query: {
                    presets: ['es2015']
                }
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
            // IMAGE LOADER
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file'
            }
        ]
    }
};
