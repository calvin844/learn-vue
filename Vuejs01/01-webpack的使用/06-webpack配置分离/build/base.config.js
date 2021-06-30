const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		// 动态获取
		path: path.resolve(__dirname, '../dist'),
		filename: 'bundle.js'
		// publicPath: 'dist/'
	},
	module: {
		rules: [{
				test: /\.css$/,
				// css-loader只负责将CSS文件进行加载
				// style-loader负责将样式添加到DOM中
				// 使用多个Loader时，是从右向左
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader']
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						// 当加载的图片，小于limit时，会将图片编译成base64字符串形式
						// 当加载的图片，大于limit时，需要使用file-loader模块进行加载
						limit: 8196,
						name: 'img/[name].[hash:8].[ext]'
					}
				}]
			},
			{
				test: /\.m?js$/,
				// exclude:排除
				// include:包含
				exclude: /{node_modules|bower_components}/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['es2015']
					}
				}
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			}
		]
	},
	resolve: {
		// alias:别名
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		},
		extensions: ['.js', '.vue']
	},
	plugins: [
		new webpack.BannerPlugin('最终版权归Calvin所有'),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]

}
