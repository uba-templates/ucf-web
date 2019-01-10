require('@babel/polyfill');

const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const Merge = require('webpack-merge');

module.exports = (env, argv) => {
    const entries = {};
    const HtmlPlugin = [];

    glob.sync('./src/pages/*/app.js').forEach(_path => {
        const chunk = `${_path.split('./src/pages/')[1].split('/app.js')[0]}/index`;
        entries[chunk] = _path;
        const htmlConf = {
            filename: `${chunk}.html`,
            template: `${_path.split('/app.js')[0]}/index.html`,
            inject: 'body',
            chunks: chunk,
            hash: env.mode == 'development' ? false : true
        };
        HtmlPlugin.push(new HtmlWebPackPlugin(htmlConf));
    });

    return Merge({
        mode: env.mode,
        devtool: env.mode == 'development' ? 'cheap-module-eval-source-map' : 'source-map',
        entry: entries,
        output: {
            path: path.resolve(__dirname, '..', 'ucf-publish'),
            filename: env.mode == 'development' ? '[name].js' : '[name].[hash:8].js',
            chunkFilename: env.mode == 'development' ? '[name].chunk.js' : '[name].[hash:8].chunk.js',
        },
        devServer: {
            proxy: {
                '/api': {
                    target: 'https://cnodejs.org',
                    secure: false,
                    //pathRewrite: {'^/api' : ''}
                }
            }
        },
        optimization: {
            minimizer: env.mode != 'development' ? [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true // set to true if you want JS source maps
                }),
                new OptimizeCSSAssetsPlugin({})
            ] : []
        },
        resolve: {
            extensions: ['.js', '.jsx', '.less', '.json', '.css'],
            alias: {
                'ucf-workbench': path.resolve(__dirname, 'ucf-workbench/src/'),
                'ucf-common': path.resolve(__dirname, 'ucf-common/src/')
            }
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
                            ['@babel/plugin-transform-runtime', {
                                'corejs': false,
                                'helpers': true,
                                'regenerator': true,
                                'useESModules': false
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
                        limit: 8192 * 100,
                        name: env.mode == 'development' ? '[name].[ext]' : '[name].[hash:8].[ext]',
                        outputPath: 'images/',
                        publicPath: '../images'
                    }
                }]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192 * 100,
                        name: env.mode == 'development' ? '[name].[ext]' : '[name].[hash:8].[ext]',
                        outputPath: 'fonts/',
                        publicPath: '../fonts'
                    }
                }]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: env.mode == 'development' ? '[name].css' : '[name].[hash:8].css',
                chunkFilename: env.mode == 'development' ? '[name].css' : '[name].[hash:8].chunk.css'
            }),
            ...HtmlPlugin
        ]
    }, env.mode != 'development' ? {//production环境
        //plugins: [new CleanWebpackPlugin(['dist']),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static'
        // })]
    } : {});
}