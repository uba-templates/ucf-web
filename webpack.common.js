require("@babel/polyfill");
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");

const entries = {};
const HtmlPlugin = [];

glob.sync("./ucf-app-*/src/app.js").forEach(_path => {
    const chunk = _path.split("/src/app.js")[0];
    entries[chunk] = _path;
    const htmlConf = {
        filename: `${chunk}/index.html`,
        template: `${_path.split('/app.js')[0]}/index.html`,
        inject: 'body',
        chunks: [chunk],
        hash: true
    };
    HtmlPlugin.push(new HtmlWebPackPlugin(htmlConf));
    console.log(entries)
    console.log(htmlConf)
});

// process.exit(0)
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
            utils: path.resolve(__dirname, 'src/utils/'),
            'ucf-workbench': path.resolve(__dirname, 'ucf-workbench/src/'),
            'ucf-common': path.resolve(__dirname, 'ucf-common/src/')
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
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: [
                        ['dynamic-import-webpack', {
                            'helpers': false,
                            'polyfill': true,
                            'regenerator': true
                        }],
                        '@babel/plugin-proposal-class-properties',
                        ["@babel/plugin-transform-runtime", {
                            "corejs": false,
                            "helpers": true,
                            "regenerator": true,
                            "useESModules": false
                        }]
                    ]
                }
            }
        }, {
            test: /\.(le|c)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: './'
                }
            }, 'css-loader', {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: (loader) => [require('autoprefixer')({ browsers: ['last 2 Chrome versions', 'last 2 Firefox versions', 'Safari >= 7', 'ie > 10'] }),
                    require('postcss-flexbugs-fixes')]
                }
            }, 'less-loader']
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