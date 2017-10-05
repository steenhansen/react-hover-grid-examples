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
var readme_sample_grid_data = require('../grid-data/readme_sample_grid_data.js');
var browser_helpers = require('../browser_helpers.js');
var all_tile_image_widths = require('../grid-data/all_tile_image_widths.js');
var readme_sample_grid_texts = readme_sample_grid_data.pictureTile_text;
var readme_sample_grid_widths = all_tile_image_widths['readme_sample_grid'];
var pictureTile_widths = browser_helpers.mergeWidthsWithText(readme_sample_grid_texts, readme_sample_grid_widths, 'readme_sample_grid_images');
readme_sample_grid_data['pictureTile_list'] = pictureTile_widths;
var readme_sample_grid_ReactHoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, readme_sample_grid_data), document.getElementById(readme_sample_grid_data.hover_grid_id));
module.exports = { readme_sample_grid_ReactHoverGrid: readme_sample_grid_ReactHoverGrid };