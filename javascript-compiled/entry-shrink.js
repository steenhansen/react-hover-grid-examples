"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactHoverGrid = _interopRequireDefault(require("react-hover-grid"));
var _react = _interopRequireDefault(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SECOND_TIME = 0.01;
var MAX_WIDTH = 1000;
var MIN_WIDTH = 100;
function setGridWidth(width_int, shrink_grow_grid_id) {
  var elem = document.getElementById(shrink_grow_grid_id);
  elem.style.width = width_int + "px";
}
var resizePubSub_timer = function (seconds_between) {
  var current_width = 100;
  var subscribed_function;
  var is_hover_function;
  var inc_dec = 1;
  var shrink_grow_grid_id;
  return {
    subscribeToWidthChange: function subscribeToWidthChange(grid_update_function, grid_id, grid_get_hover_function) {
      subscribed_function = grid_update_function;
      is_hover_function = grid_get_hover_function;
      shrink_grow_grid_id = grid_id;
      setInterval(this.publishWidthChange, seconds_between * 1000);
      setGridWidth(current_width, shrink_grow_grid_id);
      return current_width;
    },
    publishWidthChange: function publishWidthChange() {
      var is_hovering_on_grid = is_hover_function();
      if (!is_hovering_on_grid) {
        var window_width = _reactHoverGrid["default"].windowWidth();
        if (inc_dec === 1) {
          if (current_width >= window_width || current_width >= MAX_WIDTH) {
            inc_dec = -1;
          }
        } else {
          if (current_width <= MIN_WIDTH) {
            inc_dec = 1;
          }
        }
        current_width = current_width + inc_dec;
        if (inc_dec === 1) {
          setGridWidth(current_width, shrink_grow_grid_id);
          subscribed_function(current_width);
        } else {
          subscribed_function(current_width);
          setGridWidth(current_width, shrink_grow_grid_id);
        }
      }
    }
  };
}(SECOND_TIME);
function npmShrinkGrow(hover_data, container_id) {
  hover_data.resize_pub_sub = resizePubSub_timer;
  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_reactHoverGrid["default"], hover_data), document.getElementById(container_id));
}
window.npmShrinkGrow = npmShrinkGrow;
var _default = exports["default"] = npmShrinkGrow;