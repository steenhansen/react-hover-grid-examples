'use strict';

var _reactHoverGrid = require('react-hover-grid');

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ReactDOMServer = require('react-dom/server');

var browser_helpers = require('../browser_helpers.js');
var all_tile_image_widths = require('../grid-data/all_tile_image_widths.js');

var lodash_shuffle = require('lodash/shuffle.js');

module.exports = function (fast_grid_data) {
  var fast_grid_texts = fast_grid_data.pictureTile_text;
  var fast_grid_widths = all_tile_image_widths['fast_grid'];
  var pictureTile_widths = browser_helpers.mergeWidthsWithText(fast_grid_texts, fast_grid_widths, 'fast_grid_images');

  if (fast_grid_data.init_shuffle) {
    pictureTile_widths = lodash_shuffle(pictureTile_widths);
  }

  fast_grid_data['pictureTile_list'] = pictureTile_widths;
  var react_hover_grid_factory = _react2.default.createFactory(_reactHoverGrid2.default);
  var fast_grid_hover_grid_ssr = react_hover_grid_factory(fast_grid_data);
  var fast_grid_html_ssr = ReactDOMServer.renderToString(fast_grid_hover_grid_ssr);
  return fast_grid_html_ssr;
};