var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["shrink_grow_grid_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([1],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactHoverGrid = __webpack_require__(4);

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SECOND_TIME = 0.01;
var MAX_WIDTH = 1000;
var MIN_WIDTH = 100;

var shrink_grow_grid_data = __webpack_require__(73);
var browser_helpers = __webpack_require__(5);
var all_tile_image_widths = __webpack_require__(6);

function setGridWidth(width_int, shrink_grow_grid_id) {
  var elem = document.getElementById(shrink_grow_grid_id);
  elem.style.width = width_int + 'px';
}

var resizePubSub_timer = function (seconds_between) {
  var current_width = 100;
  var subscribed_function = void 0;
  var is_hover_function = void 0;
  var inc_dec = 1;
  var shrink_grow_grid_id = void 0;

  return {
    subscribeToWidthChange: function subscribeToWidthChange(grid_update_function, grid_id, grid_get_hover_function) {
      subscribed_function = grid_update_function;
      is_hover_function = grid_get_hover_function;
      shrink_grow_grid_id = grid_id;
      setInterval(this.publishWidthChange, seconds_between * 1000);
      setGridWidth(current_width, shrink_grow_grid_id);
      return current_width;
    },
    publishWidthChange: function publishWidthChange() {
      var is_hovering_on_grid = is_hover_function();
      if (!is_hovering_on_grid) {
        var window_width = _reactHoverGrid2.default.windowWidth();
        if (inc_dec === 1) {
          if (current_width >= window_width || current_width >= MAX_WIDTH) {
            inc_dec = -1;
          }
        } else {
          if (current_width <= MIN_WIDTH) {
            inc_dec = 1;
          }
        }
        current_width = current_width + inc_dec;
        if (inc_dec === 1) {
          setGridWidth(current_width, shrink_grow_grid_id);
          subscribed_function(current_width);
        } else {
          subscribed_function(current_width);
          setGridWidth(current_width, shrink_grow_grid_id);
        }
      }
    }
  };
}(SECOND_TIME);

var shrink_grow_grid_texts = shrink_grow_grid_data.pictureTile_text;
var shrink_grow_grid_widths = all_tile_image_widths['shrink_grow_grid'];

var pictureTile_widths = browser_helpers.mergeWidthsWithText(shrink_grow_grid_texts, shrink_grow_grid_widths, 'shrink_grow_grid_images');
shrink_grow_grid_data['pictureTile_list'] = pictureTile_widths;

shrink_grow_grid_data.resize_pub_sub = resizePubSub_timer;
var shrink_grow_grid_ReactHoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, shrink_grow_grid_data), document.getElementById(shrink_grow_grid_data.hover_grid_id));

module.exports = { shrink_grow_grid_ReactHoverGrid: shrink_grow_grid_ReactHoverGrid };

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
  // shrink_grow_grid data

/*
 Images
 public/hover-grid-images/shrink_grow_data/buntzen_lake.jpg
                                           golden_colorado.jpg
                                           joe_mills_mtn.jpg
                                           lake_garabaldi.jpg
                                           longs_peak.jpg
                                           old_quary_colorado_springs.jpg
                                           snow_lake_colorado.jpg
                                           whale_rock_utah.jpg
                                           white_rock.jpg
 */

const shrink_grow_grid_data = [
  {
    picture_src: 'buntzen_lake.jpg'
    , normal_area: 'north-west'
    , hover_area: 'south-east'
    , normal_title: 'Buntzen Lake'
    , hover_title: 'Coquitlam, BC'
    , normal_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#9BC7EC'}
    , hover_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#000'}
    , hover_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(155, 199, 236, 0.99)'}
    , normal_linear_gradient: {clear_percent: 60, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  }, {
    picture_src: 'golden_colorado.jpg'
    , normal_area: 'north'
    , hover_area: 'south'
    , normal_title: 'North Table Mountain'
    , hover_title: 'Golden, Co'
    , normal_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'white'}
    , hover_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'black'}
    , hover_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}
    , normal_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  }, {
    picture_src: 'joe_mills_mtn.jpg'
    , normal_area: 'north-east'
    , hover_area: 'south-west'
    , normal_title: 'Snow Cave'
    , hover_title: 'RMNP'
    , normal_style: {fontFamily: "'Schoolbell', cursive", fontSize: '24px', color: '#8341D9'}
    , hover_style: {fontFamily: "'Schoolbell', cursive", fontSize: '24px', color: '#2193EC'}
    , hover_linear_gradient: {clear_percent: 30, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}

  }, {
    picture_src: 'lake_garabaldi.jpg'
    , normal_area: 'east'
    , hover_area: 'west'
    , normal_title: 'Lake Garabaldi'
    , hover_title: 'Whistler, BC'
    , normal_style: {fontFamily: "'Share Tech Mono', monospace", fontSize: '36px', color: 'white'}
    , hover_linear_gradient: {clear_percent: 10, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}

  }, {
    picture_src: 'longs_peak.jpg'
    , normal_area: 'south-east'
    , hover_area: 'north-west'
    , normal_title: "Long's Peak"
    , hover_title: 'RMNP'
    , normal_style: {fontFamily: "'Permanent Marker', cursive", fontSize: '24px', color: '#856771'}
    , hover_style: {fontFamily: "'Permanent Marker', cursive", fontSize: '24px', color: 'black'}
    , hover_linear_gradient: {clear_percent: 40, gradient_rgba: 'rgba(133, 103, 113, 0.99)'}
    , normal_linear_gradient: {clear_percent: 40, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  }, {
    picture_src: 'old_quary_colorado_springs.jpg'
    , normal_area: 'south'
    , hover_area: 'north'
    , normal_title: "Old Quarry"
    , hover_title: 'Colorado Springs, Co'
    , normal_style: {fontFamily: "'Orbitron', sans-serif", fontSize: '32px', fontWeight: 'bolder', color: 'white'}
    , hover_style: {fontFamily: "'Orbitron', sans-serif", fontSize: '18px', fontWeight: 'bolder', color: '#C28570'}
  }, {
    picture_src: 'snow_lake_colorado.jpg'
    , normal_area: 'south-west'
    , hover_area: 'north-east'
    , normal_title: 'Snow Lake'
    , hover_title: 'RMNP'
    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}
    , normal_style: {fontFamily: "'Lobster Two', cursive", fontSize: '24px', color: 'white'}
    , hover_style: {fontFamily: "'Lobster Two', cursive", fontSize: '24px',color: 'black'}
  }, {
    picture_src: 'whale_rock_utah.jpg'
    , normal_area: 'north-east'
    , hover_area: 'south'
    , normal_title: 'Whale Rock'
    , hover_title: 'Canyonlands, Utah'
    , normal_style: {fontFamily: "'Allerta Stencil', sans-serif", fontSize: '18px', color: '#7D3529'}
  }, {
    picture_src: 'white_rock.jpg'
    , normal_title: 'The White Rock'
    , hover_title: 'Coquitlam, BC'
    , normal_style: {fontFamily: "'Carter One', cursive", fontSize: '24px', color: 'red'}
    , hover_gradient: 'rgba(255, 0, 0, 0.1)'

  }
]

module.exports = {
  hover_grid_id: 'shrink_grow_grid_id'
  ,  hover_grid_row_height: 200
  ,  pictureTile_text: shrink_grow_grid_data
  ,  hor_text_edge: 9
  ,  tile_edge: 2
  , resize_nested_component: true
  ,  google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Schoolbell|Fredericka+the+Great|Carter+One|Allerta+Stencil|Lobster+Two|Shrikhand|Orbitron|Permanent+Marker|Share+Tech+Mono'
}


/***/ })

},[72]);