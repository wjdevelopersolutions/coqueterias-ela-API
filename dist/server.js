"use strict";

var _index = _interopRequireDefault(require("./index"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _colors = _interopRequireDefault(require("colors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Load env vars
_dotenv["default"].config({
  path: './src/config/config.env'
});

var PORT = process.env.PORT || 3000;

_index["default"].listen(PORT, console.log("Server running in ".concat(_colors["default"].green(process.env.NODE_ENV), " on port ").concat(_colors["default"].green(PORT))));