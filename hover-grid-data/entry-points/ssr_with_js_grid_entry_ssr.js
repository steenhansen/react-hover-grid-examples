'use strict';
var _reactHoverGrid = require('react-hover-grid');
var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);
var _react = require('react');
var _react2 = _interopRequireDefault(_react);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
var ReactDOMServer = require('react-dom/server');
var browser_helpers = require('../browser_helpers.js');
var all_tile_image_widths = require('../grid-data/all_tile_image_widths.js');
var lodash_shuffle = require('lodash/shuffle.js');
function ssr_js_grid_ReactHoverGrid(ssr_with_js_grid_data) {
    var ssr_with_js_grid_picture_tiles = ssr_with_js_grid_data.pictureTile_text;
    var ssr_with_js_grid_widths = all_tile_image_widths['ssr_with_js_grid'];
    var pictureTile_sizes = browser_helpers.mergeWidthsWithText(ssr_with_js_grid_picture_tiles, ssr_with_js_grid_widths, 'ssr_with_js_grid_images');
    if (ssr_with_js_grid_data.init_shuffle_ssr) {
        pictureTile_sizes = lodash_shuffle(pictureTile_sizes);
    }
    ssr_with_js_grid_data['pictureTile_list'] = pictureTile_sizes;
    var ssr_with_js_grid_hover_grid_ssr = _react2.default.createElement(_reactHoverGrid2.default, ssr_with_js_grid_data);
    var ssr_with_js_grid_html_ssr = ReactDOMServer.renderToStaticMarkup(ssr_with_js_grid_hover_grid_ssr);
    return ssr_with_js_grid_html_ssr;
}
module.exports = { ssr_js_grid_ReactHoverGrid: ssr_js_grid_ReactHoverGrid };