"use strict";

var _entryReadme = _interopRequireDefault(require("./entry-readme"));
var _entryCommon = _interopRequireDefault(require("./entry-common"));
var _entryCircle = _interopRequireDefault(require("./entry-circle"));
var _entryNpm = _interopRequireDefault(require("./entry-npm"));
var _entryResize = _interopRequireDefault(require("./entry-resize"));
var _entryShrink = _interopRequireDefault(require("./entry-shrink"));
var _entryNojs = _interopRequireDefault(require("./entry-nojs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
module.exports = {
  entry_readme: _entryReadme["default"],
  entry_common: _entryCommon["default"],
  entry_circle: _entryCircle["default"],
  entry_npm: _entryNpm["default"],
  entry_resize: _entryResize["default"],
  entry_shrink: _entryShrink["default"],
  entry_nojs: _entryNojs["default"]
};