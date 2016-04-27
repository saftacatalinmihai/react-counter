var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
		'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
		'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
		'./main.js'
	],
	output: { path: __dirname, filename: 'bundle.js' },
	module: {
	loaders: [
			{
				test: /.jsx?$/,
				loaders: ['react-hot', 'babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/ , 
				loader: "style!css"
			},
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};