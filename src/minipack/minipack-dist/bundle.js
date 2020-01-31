
    (function(modules) {
      function require(moduleId) {
        const [fn, mapping] = modules[moduleId]
        function localRequire(name) {
          return require(mapping[name].replace(/\\/g,"\\"))
        }
        const module = {exports: {}}
        fn(localRequire, module, module.exports)
        return module.exports
      }
      require('E:\\GitHub\\simple-webpack\\src\\minipack\\src\\entry.js')
    })({'E:\\GitHub\\simple-webpack\\src\\minipack\\src\\entry.js': [
      function(require, module, exports) {
        "use strict";

var _message = _interopRequireDefault(require("./message.js"));

var _name = require("./name.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _message["default"])();
console.log('----name-----: ', _name.name);
      },
      {"./message.js":"E:\\GitHub\\simple-webpack\\src\\minipack\\src\\message.js","./name.js":"E:\\GitHub\\simple-webpack\\src\\minipack\\src\\name.js"},
    ],'E:\\GitHub\\simple-webpack\\src\\minipack\\src\\message.js': [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = message;

var _hello = require("./hello.js");

var _name = require("./name.js");

function message() {
  console.log("".concat(_hello.hello, " ").concat(_name.name));
}
      },
      {"./hello.js":"E:\\GitHub\\simple-webpack\\src\\minipack\\src\\hello.js","./name.js":"E:\\GitHub\\simple-webpack\\src\\minipack\\src\\name.js"},
    ],'E:\\GitHub\\simple-webpack\\src\\minipack\\src\\hello.js': [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hello = void 0;
var hello = 'hello';
exports.hello = hello;
      },
      undefined,
    ],'E:\\GitHub\\simple-webpack\\src\\minipack\\src\\name.js': [
      function(require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.name = void 0;
var name = 'gyh';
exports.name = name;
      },
      undefined,
    ],})
  