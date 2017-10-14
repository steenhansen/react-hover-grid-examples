var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["readme_sample_grid_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([2],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactHoverGrid = __webpack_require__(3);

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readme_sample_grid_data = __webpack_require__(77);
var browser_helpers = __webpack_require__(5);
var all_tile_image_widths = __webpack_require__(6);

var readme_sample_grid_texts = readme_sample_grid_data.pictureTile_text;
var readme_sample_grid_widths = all_tile_image_widths['readme_sample_grid'];
var pictureTile_widths = browser_helpers.mergeWidthsWithText(readme_sample_grid_texts, readme_sample_grid_widths, 'readme_sample_grid_images');
readme_sample_grid_data['pictureTile_list'] = pictureTile_widths;
var readme_sample_grid_ReactHoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, readme_sample_grid_data), document.getElementById(readme_sample_grid_data.hover_grid_id));

module.exports = { readme_sample_grid_ReactHoverGrid: readme_sample_grid_ReactHoverGrid };

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 Images
 public/hover-grid-images/readme_sample_grid_images/1_east_van.png
                                                    2_over_sasemat.png
                                                    3_bc_snake.png
                                                    4_amazon_in_bc.png
 */

const readme_sample_grid_data = [
  {
    picture_src: '1_east_van.png'
    , normal_area: 'north-east'
    , hover_area: 'south-west'
    , normal_style: 'color: red'
    , normal_title_style: 'font-size: 23px; font-family: Arial;'
    , normal_info_style: 'font-size: 19px; font-family: Arial;'
    , hover_style: {color: 'green'}
    , hover_title_style: {fontSize: '17px'}
    , hover_info_style: {fontSize: '11px'}
    , normal_title: 'East'
    , normal_info: 'Vancouver'
    , hover_title: 'East'
    , hover_info: 'Van'
  } , {
    picture_src: '2_over_sasamat.png'
    , hover_gradient: 'rgba(255, 0, 0, 0.1)'
    , normal_gradient: 'rgba(0, 255, 0, 0.1)'
    , link_url: 'https://www.vancouvertrails.com/trails/sasamat-lake/'
  } , {
    picture_src: '3_bc_snake.png'
    , normal_area: 'north-east'
    , hover_area: 'south-west'
    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 1)'}
    , normal_linear_gradient: {clear_percent: 75, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  } , {
    picture_src: '4_amazon_in_bc.png'
    , normal_title: 'css'
    , normal_title_style: '.readme-sample-grid-css-style'
    , filter_normal: 'hue-rotate(250deg)'
    , filter_hover: 'hue-rotate(150deg)'
  }

]

module.exports = {
  hover_grid_id: 'readme_sample_grid_id'
  , hover_grid_row_height: 234
  , pictureTile_text: readme_sample_grid_data
}

/***/ })

},[76]);