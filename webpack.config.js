module.exports = {
	entry: __dirname + '/client/app.jsx',
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
						  modules: true,
						},
					}
				]
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/public'
	}
};
