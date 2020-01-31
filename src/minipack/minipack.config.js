/**
 * minipack 配置文件
 */
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, './src/entry.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './minipack-dist')
  }
}