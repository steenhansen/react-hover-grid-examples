"use strict";

var _reactHoverGrid = _interopRequireDefault(require("react-hover-grid"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ReactDOMServer = require("react-dom/server");

var _require = require("../public/data-nojs.js"),
    the_hover = _require.the_hover;

var lodash_shuffle = require("lodash/shuffle.js");

function ssr_js_grid_ReactHoverGrid() {
  if (the_hover.init_shuffle_ssr) {
    var new_list = lodash_shuffle(the_hover.pictureTile_list);
    the_hover["pictureTile_list"] = new_list;
  }

  var ssr_with_js_grid_hover_grid_ssr = /*#__PURE__*/_react["default"].createElement(_reactHoverGrid["default"], the_hover);

  var ssr_with_js_grid_html_ssr = ReactDOMServer.renderToStaticMarkup(ssr_with_js_grid_hover_grid_ssr);
  return ssr_with_js_grid_html_ssr;
}

module.exports = {
  ssr_js_grid_ReactHoverGrid: ssr_js_grid_ReactHoverGrid
};