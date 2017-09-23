'use strict';

var _reactHoverGrid = require('react-hover-grid');

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// N.B. include 'browser_helpers.js' and 'all_tile_image_widths.js' so that they will be
// included in /public/commons.hash.js
require('../browser_helpers.js');
require('../grid-data/all_tile_image_widths.js');

var ssr_with_js_grid_data = window._HOVER_TILES.ssr_with_js_grid_json;
var ssr_with_js_grid_HoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, ssr_with_js_grid_data), document.getElementById(ssr_with_js_grid_data.ssr_grid_id));
module.exports = { ssr_with_js_grid_HoverGrid: ssr_with_js_grid_HoverGrid };