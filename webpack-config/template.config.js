const path = require('path');
const webpack_rentry_object = require('./tools');
module.exports = {
    mode: 'development',
    entry: webpack_rentry_object,
    target: 'web',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['css-loader'],
                exclude: /\.module\.css/,
            },
            {
                test: /\.module\.(css|less)/,
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
        extensions: ['.tsx', '.ts', '.js'],
    },
};
