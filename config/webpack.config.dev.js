/* eslint-disable */
require('dotenv').config();

var _             = require('lodash');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var webpackConfig = require('./webpack.config.js');

_.merge(webpackConfig, {
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: 'head'
        }),
        new BrowserSyncPlugin(
            {
                host: 'localhost',
                port: process.env.PORT_BROWSERSYNC,
                proxy: 'http://localhost:' + process.env.PORT_APP,
                ui: {
                    port: process.env.PORT_BROWSERSYNC_CONFIG
                }
            },
            {
                reload: false
            }
        )
    ],

    devServer: {
        port: process.env.PORT_APP
    }
});

module.exports = webpackConfig;
