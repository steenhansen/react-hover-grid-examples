"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactHoverGrid = _interopRequireDefault(require("react-hover-grid"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function readmeHover(hover_data, container_id) {
  ReactDOM.render( /*#__PURE__*/React.createElement(_reactHoverGrid["default"], hover_data), document.getElementById(container_id));
}
window.readmeHover = readmeHover;
var _default = exports["default"] = readmeHover;