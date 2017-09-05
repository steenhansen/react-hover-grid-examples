'use strict'; // city_grid jsx entry

var _reactHoverGrid = require('react-hover-grid');

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var city_grid_data = require('../grid-data/city_grid_data.js');
var picture_tile_widths = require('../picture_tile_widths.js');
var all_tile_image_widths = require('../grid-data/all_tile_image_widths.js');

var city_grid_texts = city_grid_data.pictureTile_text;
var city_grid_widths = all_tile_image_widths['city_grid'];

var pictureTile_widths = picture_tile_widths.mergeWidthsWithText(city_grid_texts, city_grid_widths, 'city_grid_images');
city_grid_data['pictureTile_list'] = pictureTile_widths;
var city_grid_ReactHoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, city_grid_data), document.getElementById(city_grid_data.hover_grid_id));
module.exports = { city_grid_ReactHoverGrid: city_grid_ReactHoverGrid };