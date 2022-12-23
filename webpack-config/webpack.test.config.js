const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('./template.config');
const resolve_webpack_entry = require('./tools');
//@ts-ignore
module.exports = merge(template, {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: resolve_webpack_entry(['../src/components', '../src/utils'], true),
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../test/dist'),
        clean: true,
    },
    optimization: {
        usedExports: true,
        minimize: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试页面',
            template: path.resolve(__dirname, '../test/src/index.html'),
        }),
    ],
});
