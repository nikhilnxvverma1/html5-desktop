var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: ['./renderer.js',''],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'renderer_bundle.js',
	},
	plugins:[
		//copy index.html from root to output folder,whatever the output folder is(folder resolution is automatic)
		new CopyWebpackPlugin([{
			from:'index.html',
			to:'index.html',
			force:true,
		}]),
	]

}