const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack_rentry_object = require('./tools');
module.exports = {
    mode: 'development',
    entry: webpack_rentry_object,
    target: 'web',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            // 设置为“仅编译”，关闭类型检查
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.(css|less)$/i,
                use: ['css-loader', 'less-loader'],
                exclude: /\.module\.(css|less)/,
            },
            {
                test: /\.module\.(css|less)/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[local]_[hash:base64:5]',
                            },
                        },
                    },
                    'less-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.less', '.css'],
        alias: {
            '@components': path.resolve(__dirname, '../src/components'),
            '@utils': path.resolve(__dirname, '../src/utils'),
        },
    },
    plugins: [
        // fork 出子进程，专门用于执行类型检查
        new ForkTsCheckerWebpackPlugin(),
    ],
};
