"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactHoverGrid = _interopRequireDefault(require("react-hover-grid"));
var _reactDom = _interopRequireDefault(require("react-dom"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function circleHover(hover_data, circle_put_id, circle_menu_id) {
  var place_circle_menu = function onResize() {
    var static_tile = document.getElementById("the_static_tile");
    if (static_tile) {
      document.getElementById(circle_menu_id).style.display = "block";
      var image_rect = static_tile.getBoundingClientRect();
      var circle_menu = document.getElementById(circle_menu_id);
      var menu_style = circle_menu.getBoundingClientRect();
      var half_image_width = image_rect.width / 2;
      var half_menu_width = menu_style.width / 2;
      var menu_left = window.pageXOffset + image_rect.left + half_image_width - half_menu_width + "px";
      var menu_top = window.pageYOffset + image_rect.top + 12 + "px";
      var current_top = document.getElementById(circle_menu_id).style.top;
      var current_left = document.getElementById(circle_menu_id).style.left;
      if (current_top !== menu_top || current_left !== menu_left) {
        document.getElementById(circle_menu_id).style.top = menu_top;
        document.getElementById(circle_menu_id).style.left = menu_left;
      }
    }
  };
  hover_data.onResize = place_circle_menu;
  hover_data.hover_grid_id = circle_put_id;
  var grid_id = hover_data.hover_grid_id;
  _reactDom["default"].render( /*#__PURE__*/React.createElement(_reactHoverGrid["default"], hover_data), document.getElementById(grid_id));
}
window.circleHover = circleHover;
var _default = exports["default"] = circleHover;