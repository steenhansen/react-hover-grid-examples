var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["tiny_grid_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([1],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // jsx entry file

var _reactHoverGrid = __webpack_require__(4);

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tiny_grid_data = __webpack_require__(114);
var browser_helpers = __webpack_require__(5);
var all_tile_image_widths = __webpack_require__(6);

var tiny_grid_texts = tiny_grid_data.pictureTile_text;
var tiny_grid_widths = all_tile_image_widths['tiny_grid'];
var pictureTile_widths = browser_helpers.mergeWidthsWithText(tiny_grid_texts, tiny_grid_widths, 'tiny_grid_images');
tiny_grid_data['pictureTile_list'] = pictureTile_widths;
var tiny_grid_ReactHoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, tiny_grid_data), document.getElementById(tiny_grid_data.hover_grid_id));

module.exports = { tiny_grid_ReactHoverGrid: tiny_grid_ReactHoverGrid };

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
  // data file

const tiny_grid_data = [{
    picture_src: '1_canada_bernie.jpg'
    , filter_hover: 'sepia(1)'
    , normal_area: 'north-west'
    , hover_area: 'south-east'
    , normal_title: 'Bernie'
    , hover_title: 'HONDA'
    , normal_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'white'}
    , hover_style: {fontFamily: "'Zilla Slab', serif", fontSize: '30px', color: 'black'}
    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 1)'}
    , normal_linear_gradient: {clear_percent: 75, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  },{
  picture_src: '2_amc_spirit.jpg'
  , filter_hover: 'hue-rotate(90deg)'
  , normal_area: 'north-west'
  , hover_area: 'south-east'
  , normal_title: ' Spirit'
  , hover_title: 'by AMC '
  , normal_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#9BC7EC'}
  , hover_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#000'}
  , hover_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(155, 199, 236, 0.99)'}
  , normal_linear_gradient: {clear_percent: 60, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
}, {
  picture_src: '3_kiwi_airforce.jpg'
  , filter_hover: 'grayscale(1)'
  , normal_area: 'south-west'
  , hover_area: 'north-east'
  , normal_title: 'New Zealand'
  , normal_info: 'Airforce'
  , hover_title: 'Tauranga'
  , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}
  , normal_style: {fontFamily: "'Lobster Two', cursive", fontSize: '24px', color: '#102F66'}
}]

module.exports = {
  hover_grid_id: 'tiny_grid_id'
  , hover_grid_row_height: 234
  , pictureTile_text:tiny_grid_data
  , max_rows:2
  , google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Schoolbell|Fredericka+the+Great|Carter+One|Allerta+Stencil|Lobster+Two|Shrikhand|Orbitron|Permanent+Marker|Share+Tech+Mono'

//  , google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Zilla+Slab:700'
}


/***/ })

},[113]);