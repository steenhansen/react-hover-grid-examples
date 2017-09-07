'use strict';
var _reactHoverGrid = require('react-hover-grid');
var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
var _reactDom = require('react-dom');
var _reactDom2 = _interopRequireDefault(_reactDom);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
require('../picture_tile_widths.js');
require('../grid-data/ALL_TILE_IMAGE_WIDTHS.js');
var fast_grid_data = window._HOVER_TILES.fast_grid_json;
var fast_grid_HoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, fast_grid_data), document.getElementById(fast_grid_data.ssr_grid_id));
module.exports = { fast_grid_HoverGrid: fast_grid_HoverGrid };