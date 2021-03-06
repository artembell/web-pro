const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	entry: {
		app: './src/js/index.js',
	},
	plugins: [
		//new CleanWebpackPlugin(['./dist']),
		// new HtmlWebpackPlugin({
		// 	title: 'Perfect React'
		// }),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: ["react-hot-loader", "babel-loader"]
			}
		]
	}
};