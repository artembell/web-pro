const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');//use for minified build

module.exports = {
	entry: {
		app: './src/js/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		port: 8000,
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Perfect React'
		}),
		//new UglifyJSPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		}]
	}
};