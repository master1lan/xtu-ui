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
        hot: true,
        watchFiles: [
            path.resolve(__dirname, '../test/src/*'),
            path.resolve(__dirname, '../src/**/*'),
        ],
    },
    optimization: {
        moduleIds: 'deterministic',
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        minimize: false,
        concatenateModules: false,
        usedExports: false,
    },
    experiments: {
        //类似vite的懒加载
        // lazyCompilation: true,
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
    watchOptions: {
        ignored: /node_modules/,
    },
});
