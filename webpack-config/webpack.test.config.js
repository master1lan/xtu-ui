const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('./template.config');
//@ts-ignore
module.exports = merge(template, {
    mode: 'production',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../test/dist'),
        clean: true,
        library: {
            name: 'xtu-ui',
            type: 'umd',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '测试页面',
            template: path.resolve(__dirname, '../test/src/index.html'),
        }),
    ],
    externals: [nodeExternals()],
});
