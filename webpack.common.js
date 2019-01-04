require("@babel/polyfill");
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");

const entries = {};
const HtmlPlugin = [];

glob.sync("./src/pages/*/app.js").forEach(_path => {
    const chunk = _path.split("./src/pages/")[1].split(".js")[0];
    entries[chunk] = _path;
    const htmlConf = {
        filename: `${chunk.split('/app')[0]}/index.html`,
        template: `${_path.split('/app.js')[0]}/index.html`,
        inject: 'body',
        chunks: ['vendors', 'styles', chunk],
        hash: true
    };
    HtmlPlugin.push(new HtmlWebPackPlugin(htmlConf));
});

module.exports = {
    entry: entries,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            components: path.resolve(__dirname, 'src/components/'),
            styles: path.resolve(__dirname, 'src/styles/'),
            static: path.resolve(__dirname, 'src/static/'),
            utils: path.resolve(__dirname, 'src/utils/')
        }
    },
    optimization: {
        // splitChunks: {
        //     cacheGroups: {
        //         vendor: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: 'vendors',
        //             chunks: 'all'
        //         },
        //         styles: {
        //             name: 'styles',
        //             test: /\.(le|c)ss$/,
        //             chunks: 'all'
        //         }
        //     }
        // }
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src'),
            use: {
                loader: 'babel-loader'
            }
        }, {
            test: /\.(le|c)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: './'
                }
            }, 'css-loader', 'postcss-loader', 'less-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: '../images'
                }
            }]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',
                    publicPath: '../fonts'
                }
            }]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "style.css"
        }),
        ...HtmlPlugin
    ]
};