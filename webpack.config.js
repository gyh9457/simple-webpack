const path = require('path')
const FileListPlugin = require('./src/plugins/FileListPlugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader', {
          loader: 'html-minify-loader',
          options: {
            comments: true
          }
        }],
      }
    ]
  },
  resolveLoader: {
    modules: [path.join(__dirname, './src/loaders'), 'node_modules']
  },
  plugins: [
    new FileListPlugin({
      name: 'gyh'
    })
  ]
}