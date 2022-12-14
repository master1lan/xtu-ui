const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const template = require('./template.config');
// @ts-ignore
module.exports = merge(template, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname, '../test/dist'),
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        usedExports: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, '../test/dist'),
        clean: true,
        pathinfo: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试页面',
            template: path.resolve(__dirname, '../test/src/index.html'),
            cache: false,
        }),
    ],
});
