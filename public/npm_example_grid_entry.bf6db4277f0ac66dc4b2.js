var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["npm_example_grid_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([2],{

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

var npm_example_grid_data = __webpack_require__(114);
var browser_helpers = __webpack_require__(5);
var all_tile_image_widths = __webpack_require__(6);

var npm_example_grid_texts = npm_example_grid_data.pictureTile_text;
var npm_example_grid_widths = all_tile_image_widths['npm_example_grid'];
var pictureTile_widths = browser_helpers.mergeWidthsWithText(npm_example_grid_texts, npm_example_grid_widths, 'npm_example_grid_images');
npm_example_grid_data['pictureTile_list'] = pictureTile_widths;
var npm_example_grid_ReactHoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, npm_example_grid_data), document.getElementById(npm_example_grid_data.hover_grid_id));

module.exports = { npm_example_grid_ReactHoverGrid: npm_example_grid_ReactHoverGrid };

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
  // data file

/*
Images
  public/hover-grid-images/npm_example_grid_images/1_canada_bernie.jpg
                                            2_amc_spirit.jpg
                                            3_kiwi_airforce.jpg
                                            4_christmas_cranes.jpg
                                            5_sfu_observatory.jpg
                                            6_i_like_coffee.jpg
                                            7_pkd_tombstone.jpg
                                            8_hello_kitty_skytrain.jpg
                                            9_denver_nukes.jpg
*/

const npm_example_grid_data = [{
    picture_src: '1_canada_bernie.jpg'
    , filter_hover: 'sepia(1)'
    , normal_area: 'north-west'
    , hover_area: 'south-east'
    , normal_title: 'Bernie'
    , hover_title: 'HONDA'
    , normal_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'white'}
    , hover_style: {fontFamily: "'Zilla Slab', serif", fontSize: '30px', color: 'black', fontWweight: 'bold'}
    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 1)'}
    , normal_linear_gradient: {clear_percent: 75, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  },{
  picture_src: '2_amc_spirit.jpg'
  , filter_hover: 'hue-rotate(150deg)'
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
}, {
  picture_src: '4_christmas_cranes.jpg'
  ,link_url: 'https://www.google.ca/maps/@49.2619256,-122.8890653,320m/data=!3m1!1e3?hl=en'
}
  , {
  picture_src: '5_sfu_observatory.jpg'
  ,link_url: 'https://www.google.ca/maps/place/SFU+Trottier+Observatory/@49.2784171,-122.9149342,195m/data=!3m1!1e3!4m5!3m4!1s0x0:0xdf1603c7a7c098f1!8m2!3d49.2785011!4d-122.9149546?hl=en'
}, {
  picture_src: '7_pkd_tombstone.jpg'
  ,link_url: 'https://www.google.ca/maps/@40.259518,-103.8095973,230m/data=!3m1!1e3?hl=en'
}, {
  picture_src: '8_hello_kitty_skytrain.jpg'
  ,link_url: 'https://www.google.ca/maps/place/Commercial+-+Broadway+Station/@49.2630943,-123.0704535,188m/data=!3m1!1e3!4m12!1m6!3m5!1s0x0:0xdf1603c7a7c098f1!2sSFU+Trottier+Observatory!8m2!3d49.2785011!4d-122.9149546!3m4!1s0x5486714ed1cbf3cf:0xed9b913d83dd63fd!8m2!3d49.2626442!4d-123.0692567?hl=en'
}, {
    picture_src: '9_denver_nukes.jpg'
    ,link_url: 'https://www.google.ca/maps/place/Wings+Over+the+Rockies+Air+%26+Space+Museum/@39.7208786,-104.8960433,233m/data=!3m1!1e3!4m5!3m4!1s0x876c7c59c91171dd:0xfa643c8583ff8546!8m2!3d39.720977!4d-104.895763?hl=en'
  }



]


module.exports = {
  hover_grid_id: 'npm_example_grid_id'
  , hover_grid_row_height: 234
  , pictureTile_text:npm_example_grid_data
  , max_rows:2
  , google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Schoolbell|Fredericka+the+Great|Carter+One|Allerta+Stencil|Lobster+Two|Shrikhand|Orbitron|Permanent+Marker|Share+Tech+Mono'

//  , google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Zilla+Slab:700'
}


/***/ })

},[113]);