"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactHoverGrid = _interopRequireDefault(require("react-hover-grid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function readmeHover(hover_data, container_id) {
  ReactDOM.render( /*#__PURE__*/React.createElement(_reactHoverGrid["default"], hover_data), document.getElementById(container_id));
}

window.readmeHover = readmeHover;
var _default = readmeHover;
exports["default"] = _default;