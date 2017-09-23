'use strict'; // jsx entry file

var _reactHoverGrid = require('react-hover-grid');

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var npm_example_grid_data = require('../grid-data/npm_example_grid_data.js');
var browser_helpers = require('../browser_helpers.js');
var all_tile_image_widths = require('../grid-data/all_tile_image_widths.js');

var npm_example_grid_texts = npm_example_grid_data.pictureTile_text;
var npm_example_grid_widths = all_tile_image_widths['npm_example_grid'];
var pictureTile_widths = browser_helpers.mergeWidthsWithText(npm_example_grid_texts, npm_example_grid_widths, 'npm_example_grid_images');
npm_example_grid_data['pictureTile_list'] = pictureTile_widths;
var npm_example_grid_ReactHoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, npm_example_grid_data), document.getElementById(npm_example_grid_data.hover_grid_id));

module.exports = { npm_example_grid_ReactHoverGrid: npm_example_grid_ReactHoverGrid };