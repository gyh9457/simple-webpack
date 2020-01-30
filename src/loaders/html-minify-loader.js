const Minimize = require('minimize')
const loaderUtils = require(('loader-utils'))

module.exports = function(source) {
  const options = loaderUtils.getOptions(this) || {}
  console.log(options)
  const minimize = new Minimize(options)
  return minimize.parse(source)
}

// 异步模式
// module.exports = function(source) {
//   var callback = this.async();
//   const opts = loaderUtils.getOptions(this) || {};
//   const minimize = new Minimize(opts);
//   minimize.parse(source, callback);
// };