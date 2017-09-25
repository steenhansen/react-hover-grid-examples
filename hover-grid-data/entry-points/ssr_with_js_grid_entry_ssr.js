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
module.exports = function (ssr_with_js_grid_data) {
    var ssr_with_js_grid_texts = ssr_with_js_grid_data.pictureTile_text;
    var ssr_with_js_grid_widths = all_tile_image_widths['ssr_with_js_grid'];
    var pictureTile_widths = browser_helpers.mergeWidthsWithText(ssr_with_js_grid_texts, ssr_with_js_grid_widths, 'ssr_with_js_grid_images');
    if (ssr_with_js_grid_data.init_shuffle_ssr) {
        pictureTile_widths = lodash_shuffle(pictureTile_widths);
    }
    ssr_with_js_grid_data['pictureTile_list'] = pictureTile_widths;
    var react_hover_grid_factory = _react2.default.createFactory(_reactHoverGrid2.default);
    var ssr_with_js_grid_hover_grid_ssr = react_hover_grid_factory(ssr_with_js_grid_data);
    global.debug_logger.error(ssr_with_js_grid_hover_grid_ssr);
    var ssr_with_js_grid_html_ssr = ReactDOMServer.renderToString(ssr_with_js_grid_hover_grid_ssr);
    return ssr_with_js_grid_html_ssr;
};