var GLOBAL_WEBPACK = GLOBAL_WEBPACK || {}; GLOBAL_WEBPACK["mountains_grid_entry"] =
webpackJsonpGLOBAL_WEBPACK__name_([1],{

/***/ 0:
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function mergeWidthsWithText (grid_pictureTiles, grid_image_widths, dir_name) {
  for (let picture_src in grid_image_widths) {
    grid_image_widths[picture_src]['not_copied'] = true
  }

  let pictureTile_widths = []
  for (let i = 0; i < grid_pictureTiles.length; i++) {
    var picture_src = grid_pictureTiles[i].picture_src
    if (typeof grid_image_widths[picture_src] !== 'undefined') {
      var new_picture_tile = Object.assign({}, grid_pictureTiles[i], grid_image_widths[picture_src])
      pictureTile_widths.push(new_picture_tile)
      grid_image_widths[picture_src]['not_copied'] = false
    } else {
      if (true) {
        console.log('Image', picture_src, 'does not exist in /public/hover-grid-images/' + dir_name)
      }
    }
  }

  for (let picture_src in grid_image_widths) {
    if (grid_image_widths[picture_src]['not_copied']) {
      const picture_width = grid_image_widths[picture_src].picture_width
      const picture_height = grid_image_widths[picture_src].picture_height
      const no_text_image = {
        picture_src: picture_src
        , picture_width: picture_width
        , picture_height: picture_height
      }
      pictureTile_widths.push(no_text_image)
    }
  }
  return pictureTile_widths

}

module.exports = {
  mergeWidthsWithText: mergeWidthsWithText
}


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

 const all_tile_tile_image_widths = {"city_grid":{"amc_spirit.jpg":{"picture_width":395,"picture_height":222},"sfu_observatory.png":{"picture_width":394,"picture_height":222},"canada_bernie.jpg":{"picture_width":348,"picture_height":222},"christmas_cranes.jpg":{"picture_width":395,"picture_height":222},"denver_nukes.jpg":{"picture_width":296,"picture_height":222},"hello_kitty_skytrain.jpg":{"picture_width":395,"picture_height":222},"i_like_coffee.jpg":{"picture_width":410,"picture_height":222},"kiwi_airforce.jpg":{"picture_width":296,"picture_height":222},"new_west.jpg":{"picture_width":394,"picture_height":222},"pkd_tombstone.jpg":{"picture_width":296,"picture_height":222},"sfu_observatory.jpg":{"picture_width":394,"picture_height":222}},"fast_grid":{"bike_works.jpg":{"picture_width":249,"picture_height":140},"black_mountain.jpg":{"picture_width":249,"picture_height":140},"buntzen.jpg":{"picture_width":249,"picture_height":140},"carSurfing.jpg":{"picture_width":187,"picture_height":140},"chase_tail.jpg":{"picture_width":187,"picture_height":140},"cypress_lake.jpg":{"picture_width":249,"picture_height":140},"dennet_lake.jpg":{"picture_width":249,"picture_height":140},"dog_car.jpg":{"picture_width":249,"picture_height":140},"dog_head.jpg":{"picture_width":187,"picture_height":140},"dog_rocks.jpg":{"picture_width":187,"picture_height":140},"fat_bastard.jpg":{"picture_width":249,"picture_height":140},"hansenGiles.jpg":{"picture_width":187,"picture_height":140},"maggie.jpg":{"picture_width":187,"picture_height":140},"maggie_sun.jpg":{"picture_width":169,"picture_height":140},"minnekhada.jpg":{"picture_width":187,"picture_height":140},"pink_flower.jpg":{"picture_width":187,"picture_height":140},"snow_cave.jpg":{"picture_width":187,"picture_height":140},"st_marks.jpg":{"picture_width":249,"picture_height":140},"the_lions.jpg":{"picture_width":249,"picture_height":140},"this_little_piggy.jpg":{"picture_width":187,"picture_height":140},"tiger.jpg":{"picture_width":187,"picture_height":140},"two_trees.jpg":{"picture_width":187,"picture_height":140},"wheres_bugs.jpg":{"picture_width":186,"picture_height":140},"white_flower.jpg":{"picture_width":187,"picture_height":140}},"mountains_grid":{"buntzen_lake.jpg":{"picture_width":703,"picture_height":200},"golden_colorado.jpg":{"picture_width":270,"picture_height":200},"joe_mills_mtn.jpg":{"picture_width":267,"picture_height":200},"lake_garabaldi.jpg":{"picture_width":267,"picture_height":200},"longs_peak.jpg":{"picture_width":267,"picture_height":200},"old_quary_colorado_springs.jpg":{"picture_width":364,"picture_height":200},"snow_lake_colorado.jpg":{"picture_width":267,"picture_height":200},"whale_rock_utah.jpg":{"picture_width":773,"picture_height":200},"white_rock.jpg":{"picture_width":1333,"picture_height":200}},"sizeable_left_grid":{"alouette_mtn.jpg":{"picture_width":141,"picture_height":250},"car_deer.jpg":{"picture_width":210,"picture_height":250},"cato.jpg":{"picture_width":444,"picture_height":250},"fiji_bat.jpg":{"picture_width":188,"picture_height":250},"green_tree.jpg":{"picture_width":141,"picture_height":250},"mushrooms.jpg":{"picture_width":333,"picture_height":250},"no_swim.jpg":{"picture_width":444,"picture_height":250},"plant_dragon.jpg":{"picture_width":141,"picture_height":250},"snow_bridge.jpg":{"picture_width":444,"picture_height":250},"trees_snow_sun.jpg":{"picture_width":141,"picture_height":250},"wood_monster.jpg":{"picture_width":141,"picture_height":250}},"sizeable_right_grid":{"frozen_newt.jpg":{"picture_width":178,"picture_height":100},"green_frog.jpg":{"picture_width":178,"picture_height":100},"nz_pigs.jpg":{"picture_width":133,"picture_height":100},"robin_eggs.jpg":{"picture_width":178,"picture_height":100},"sister_bees.jpg":{"picture_width":178,"picture_height":100},"tree_bears.jpg":{"picture_width":178,"picture_height":100},"weird_eggs.jpg":{"picture_width":178,"picture_height":100}}} 
                                   module.exports = all_tile_tile_image_widths 

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactHoverGrid = __webpack_require__(7);

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(2);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SECOND_TIME = 0.01;
var MAX_WIDTH = 1000;
var MIN_WIDTH = 100;

var mountains_grid_data = __webpack_require__(71);
var picture_tile_widths = __webpack_require__(4);
var all_tile_image_widths = __webpack_require__(5);

function setGridWidth(width_int, mountains_grid_id) {
  var elem = document.getElementById(mountains_grid_id);
  elem.style.width = width_int + 'px';
}

var resizePubSub_timer = function (seconds_between) {
  var current_width = 100;
  var subscribed_function = void 0;
  var is_hover_function = void 0;
  var inc_dec = 1;
  var mountains_grid_id = void 0;

  return {
    subscribeToWidthChange: function subscribeToWidthChange(grid_update_function, grid_id, grid_get_hover_function) {
      subscribed_function = grid_update_function;
      is_hover_function = grid_get_hover_function;
      mountains_grid_id = grid_id;
      setInterval(this.publishWidthChange, seconds_between * 1000);
      setGridWidth(current_width, mountains_grid_id);
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
          setGridWidth(current_width, mountains_grid_id);
          subscribed_function(current_width);
        } else {
          subscribed_function(current_width);
          setGridWidth(current_width, mountains_grid_id);
        }
      }
    }
  };
}(SECOND_TIME);

var mountains_grid_texts = mountains_grid_data.pictureTile_text;
var mountains_grid_widths = all_tile_image_widths['mountains_grid'];

var pictureTile_widths = picture_tile_widths.mergeWidthsWithText(mountains_grid_texts, mountains_grid_widths, 'mountains_grid_images');
mountains_grid_data['pictureTile_list'] = pictureTile_widths;

mountains_grid_data.resize_pub_sub = resizePubSub_timer;
var mountains_grid_ReactHoverGrid = _reactDom2.default.render(_react2.default.createElement(_reactHoverGrid2.default, mountains_grid_data), document.getElementById(mountains_grid_data.hover_grid_id));

module.exports = { mountains_grid_ReactHoverGrid: mountains_grid_ReactHoverGrid };

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

const city_grid_data = [
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
    , hover_style: {fontFamily: "'Orbitron', sans-serif", fontSize: '18px', fontWeight: 'bolder', color: 'white'}
  }, {
    picture_src: 'snow_lake_colorado.jpg'
    , normal_area: 'south-west'
    , hover_area: 'north-east'
    , normal_title: 'Snow Lake'
    , hover_title: 'RMNP'
    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}
    , normal_style: {fontFamily: "'Lobster Two', cursive", fontSize: '24px', color: '#102F66'}
  }, {
    picture_src: 'whale_rock_utah.jpg'
    , normal_area: 'north-east'
    , hover_area: 'east'
    , normal_title: 'Whale Rock'
    , hover_title: 'Canyonlands, Utah'
    , normal_style: {fontFamily: "'Allerta Stencil', sans-serif", fontSize: '18px', color: '#7D3529'}
  }, {
    picture_src: 'white_rock.jpg'
    , normal_title: 'White Rock'
    , hover_title: 'Coquitlam, BC'
    , normal_style: {fontFamily: "'Carter One', cursive", fontSize: '24px', color: 'red'}
    , hover_gradient: 'rgba(255, 0, 0, 0.1)'

  }
]

module.exports = {
  hover_grid_id: 'mountains_grid_id'
  ,  hover_grid_row_height: 200
  ,  pictureTile_text: city_grid_data
  ,  hor_text_edge: 9
  ,  tile_edge: 2
  , resize_nested_component: true
  ,  google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Schoolbell|Fredericka+the+Great|Carter+One|Allerta+Stencil|Lobster+Two|Shrikhand|Orbitron|Permanent+Marker|Share+Tech+Mono'
}


/***/ })

},[70]);