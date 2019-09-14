const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const TSLintPlugin = require('tslint-webpack-plugin')
const MODE = 'development'

module.exports = [
{
    mode: MODE,
    entry: './src/index.tsx',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
	alias: {
	    'components': path.resolve(__dirname, 'src/components')
	},
        extensions: [ '.ts', '.tsx', '.js', '.json' ]
    },
    plugins: [
        new TSLintPlugin(
        {
            files: [ './src/**/*.ts', './src/**/*.tsx' ]
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                secure: false
            }
        }
    }
},
{
    mode: MODE,
    entry: {
        style: './scss/index.scss'
    },
    output: {
        filename: 'index.css',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader:  ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
    ],
}]
