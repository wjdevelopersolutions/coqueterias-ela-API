const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

  // devtool: 'source-map',
  context: path.resolve(__dirname, 'src'),
  entry: ['./assets/script.js', './assets/style.scss'],
  output: {
    path: path.resolve(__dirname, './src/public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
      },
      {
				test: /\.(s[ac]ss|css)$/i,
				exclude: /node_modules/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(jpg|png|svg|gif)$/i,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images',
						publicPath: './images'
					}
				}
			}
    ]
  },
  plugins: [
		new MinifyPlugin({}, {
			comments: false
		}),
		new MiniCssExtractPlugin({
			filename: 'bundle.css'
		})
	]
}

