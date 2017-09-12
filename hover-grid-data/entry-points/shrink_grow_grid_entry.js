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
var SECOND_TIME = 0.01;
var MAX_WIDTH = 1000;
var MIN_WIDTH = 100;
var shrink_grow_grid_data = require('../grid-data/shrink_grow_grid_data');
var browser_helpers = require('../browser_helpers.js');
var all_tile_image_widths = require('../grid-data/all_tile_image_widths.js');
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