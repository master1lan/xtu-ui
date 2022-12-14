const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const template = require('./template.config');
//@ts-ignore
module.exports = merge(template, {
    mode: 'production',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../lib'),
        clean: true,
        library: {
            name: 'xtu-ui',
            type: 'umd',
        },
    },
    externals: [nodeExternals()],
});
