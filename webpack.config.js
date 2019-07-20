const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const server = 'http://localhost:3000';

module.exports = (env, args) => ({
    entry: ['babel-polyfill', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    ...(args.mode == 'development')? [{ loader: 'style-loader' }] : [],
                    ...(args.mode == 'production')?  [{ loader: MiniCssExtractPlugin.loader }] : [],
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true
                        }
                    },
                    { loader: 'sass-loader' },
                ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    ...(args.mode == 'development') && {
            plugins: [
                new webpack.HotModuleReplacementPlugin(),
            ],
            devServer: {
                contentBase: './dist',
                hot: true,
                proxy: {
                    '/person' : {
                        target: server
                    },
                    '/exposure' : {
                        target: server
                    },
                    '/facility' : {
                        target: server
                    },
                }
            },
            
        },
    ...(args.mode == 'production') && {
        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].css"
            })
        ]
    }
});
