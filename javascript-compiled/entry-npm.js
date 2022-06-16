"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactHoverGrid = _interopRequireDefault(require("react-hover-grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function npmHover(hover_data, npm_container_id) {
  hover_data.hover_grid_id = npm_container_id;
  var grid_id = hover_data.hover_grid_id;
  ReactDOM.render( /*#__PURE__*/React.createElement(_reactHoverGrid["default"], hover_data), document.getElementById(grid_id));
}

window.npmHover = npmHover;
var _default = npmHover;
exports["default"] = _default;