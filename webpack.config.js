const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    // { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: "resolve-url-loader" },
                    { loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(jpg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            path: path.resolve(__dirname + './src/images'),
                            outputPath: 'images/',
                            useRelativePath: true
                        },
                    },
                ],
            },
            {
                test: /\.(mp4)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            path: path.resolve(__dirname + './src/video'),
                            outputPath: 'video/',
                            useRelativePath: true
                        }
                    }
                ]
            },
           

        ]
    },
    plugins: [
        new htmlWebpackPlugin({ template: './src/index.html' }),
        new MiniCssExtractPlugin({ filename: 'styles.css', })
    ]
}