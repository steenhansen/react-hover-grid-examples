'use strict';

var _reactHoverGrid = require('react-hover-grid');

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var circle_clip_grid_data = require('../grid-data/circle_clip_grid_data.js');
var browser_helpers = require('../browser_helpers.js');
var all_tile_image_widths = require('../grid-data/all_tile_image_widths.js');

var circle_clip_grid_texts = circle_clip_grid_data.pictureTile_text;
var circle_clip_grid_widths = all_tile_image_widths['circle_clip_grid'];
var pictureTile_widths = browser_helpers.mergeWidthsWithText(circle_clip_grid_texts, circle_clip_grid_widths, 'circle_clip_grid_images');
circle_clip_grid_data['pictureTile_list'] = pictureTile_widths;
var circle_clip_grid_ReactHoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, circle_clip_grid_data), document.getElementById(circle_clip_grid_data.hover_grid_id));

function circleIntervalMenu(interval_seconds) {
  setInterval(circle_clip_grid_data.onResize, interval_seconds);
}

module.exports = {
  circle_clip_grid_ReactHoverGrid: circle_clip_grid_ReactHoverGrid,
  circleIntervalMenu: circleIntervalMenu
};