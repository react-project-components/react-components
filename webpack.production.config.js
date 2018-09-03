const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require("./babel.config").dev_client;
const ROOT_PATH = process.cwd();

const extractCssPlugin = new ExtractTextPlugin({
    filename: "css/[name].css"
});

module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        index:['./example/index']
    },
    output: {
        path: path.resolve(ROOT_PATH, './dist'),
        filename: 'js/[name].js',
        publicPath: "./"
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: babelConfig
            },
            {
                test: /\.(css|scss)$/,
                use: extractCssPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [
                                    require('postcss-import'),
                                    require('postcss-cssnext'),
                                    require('precss')
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 7186,
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: Infinity,
                }
            }
        ]
    },

    plugins: [
        extractCssPlugin,
        new HtmlWebpackPlugin({template: './example/index.html'}),
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'js/vendor.js', minChunks: Infinity,}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    devtool: 'source-map'
}