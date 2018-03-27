/**
 * Import Webpack and declaration of folder Paths
 */

var webpack = require('webpack'),
    polyfill = require("babel-polyfill"),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    BUILD_DIR = path.resolve(__dirname, 'build'),
    APP_DIR = path.resolve(__dirname, 'src');
/**
 * To separate case Management and external CSS files
 */
var styles = new ExtractTextPlugin({
        filename: 'style.min.css',
        allChunks: true
    });
/**
 * Webpack Config for Production
 */
var config = {
    entry: ["babel-polyfill", APP_DIR + '/js/index.js', APP_DIR + '/scss/styles.scss'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.min.js'
    },
    /**
     * To Excluding react file or any other external files if not needed in production
     * uncomment externals want remove to external libs if already present in the site
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'lodash':'_'
    },*/
    module: {
        loaders: [{
            test: /\.js|\.jsx?/,
            include: APP_DIR,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                cacheDirectory: true,
                presets: ['react', ['env', { 'modules': false }], 'stage-1']
            }
        },
            {
                test: /\.scss$/,
                include: APP_DIR,
                use: styles.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?url=false', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        styles
    ]
};

module.exports = config;
