const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'Bogdan s webpack tutorial',
            header: 'Bogdan s webpack 101',
            metaDesc: 'meta desc',
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body',
        })
    ],
    mode: 'development',
    output: {
        clean: true,
    },
    devServer: {
        static: {
            publicPath: '/.dist',
        },
        open: true,
    }
}