const path = require('path');
const { merge } = require('webpack-merge');
const template = require('./template.config');
const resolve_webpack_entry = require('./tools');
// 开启 Gzip
const CompressionWebpackPlugin = require('compression-webpack-plugin');
// 代码压缩插件
const TerserPlugin = require('terser-webpack-plugin');
//@ts-ignore
const config = merge(template, {
    mode: 'production',
    devtool: false,
    entry: resolve_webpack_entry(['../src/components', '../src/utils'], true),
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../lib'),
        clean: true,
        library: {
            name: 'xtu-ui',
            type: 'umd',
        },
    },
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
            new TerserPlugin({
                parallel: true,
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
            '...',
        ],
    },
});
config.plugins.push(
    new CompressionWebpackPlugin({
        filename: '[path][base].gz', // 输出目标文件名
        algorithm: 'gzip', // 压缩格式
        test: new RegExp('\\.(js|css)$'), // 要处理的文件正则
        minRatio: 0.8, // 仅处理压缩比此比率更好的文件（minRatio = 压缩大小/原始大小）
        deleteOriginalAssets: false, // 是否删除原有文件
    })
);
module.exports = config;
