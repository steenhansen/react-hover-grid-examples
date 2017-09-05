'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSplitPane = require('react-split-pane');

var _reactSplitPane2 = _interopRequireDefault(_reactSplitPane);

var _reactHoverGrid = require('react-hover-grid');

var _reactHoverGrid2 = _interopRequireDefault(_reactHoverGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //  https://github.com/tomkp/react-split-pane


var LEFT_PANE_SIZE = 400;
var PANE_MARGIN = 20;

var picture_tile_widths = require('../picture_tile_widths.js');
var all_tile_image_widths = require('../grid-data/all_tile_image_widths.js');

var sizeable_grid_left_data = require('../grid-data/sizeable_left_grid_data');
var sizeable_left_grid_id = sizeable_grid_left_data.hover_grid_id;

var sizeable_grid_right_data = require('../grid-data/sizeable_right_grid_data');
var sizeable_right_grid_id = sizeable_grid_right_data.hover_grid_id;

var sizeable_resizePubSub_splitter = function (sizeable_grid_left_id, sizeable_grid_right_id) {
  var _current_widths;

  var current_widths = (_current_widths = {}, _defineProperty(_current_widths, sizeable_grid_left_id, LEFT_PANE_SIZE), _defineProperty(_current_widths, sizeable_grid_right_id, LEFT_PANE_SIZE), _current_widths);
  var subscribe_to_width = {};

  return {
    subscribeToWidthChange: function subscribeToWidthChange(subscribe_function, originator_id) {
      console.assert(typeof subscribe_function === 'function', 'sizeable_grid_entry subscribe_function not a function');
      console.assert(typeof originator_id === 'string', 'sizeable_grid_entry  originator_id not a string');
      subscribe_to_width[originator_id] = subscribe_function;
    },
    publishWidthChange: function publishWidthChange() {
      var left_width = 0;
      var right_width = 0;

      var left_pane_width = _reactHoverGrid2.default.getComputedWidth(sizeable_grid_left_id);
      if (left_pane_width !== null) {
        var _current_widths2;

        var right_pane_width = _reactHoverGrid2.default.getComputedWidth(sizeable_grid_right_id);
        if (left_pane_width > PANE_MARGIN) {
          left_width = left_pane_width - PANE_MARGIN;
        }
        if (right_pane_width > PANE_MARGIN) {
          right_width = right_pane_width - PANE_MARGIN;
        }
        current_widths = (_current_widths2 = {}, _defineProperty(_current_widths2, sizeable_grid_left_id, left_width), _defineProperty(_current_widths2, sizeable_grid_right_id, right_width), _current_widths2);
        for (var grid_id in subscribe_to_width) {
          var containerResize_func = subscribe_to_width[grid_id];
          containerResize_func(current_widths[grid_id]);
        }
      }
    }
  };
}(sizeable_left_grid_id, sizeable_right_grid_id);

var left_grid_texts = sizeable_grid_left_data.pictureTile_text;
var left_grid_widths = all_tile_image_widths['sizeable_left_grid'];
var left_pictureTile_widths = picture_tile_widths.mergeWidthsWithText(left_grid_texts, left_grid_widths, 'sizeable_left_grid_images');
sizeable_grid_left_data['pictureTile_list'] = left_pictureTile_widths;
sizeable_grid_left_data.resize_pub_sub = sizeable_resizePubSub_splitter;

var right_grid_texts = sizeable_grid_right_data.pictureTile_text;
var right_grid_widths = all_tile_image_widths['sizeable_right_grid'];
var right_pictureTile_widths = picture_tile_widths.mergeWidthsWithText(right_grid_texts, right_grid_widths, 'sizeable_right_grid_images');
sizeable_grid_right_data['pictureTile_list'] = right_pictureTile_widths;
sizeable_grid_right_data.resize_pub_sub = sizeable_resizePubSub_splitter;

var sizeable_grid_HoverGrid = ReactDOM.render(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    _reactSplitPane2.default,
    { split: 'vertical',
      defaultSize: LEFT_PANE_SIZE,
      minSize: 50,
      maxSize: -75,
      onChange: sizeable_resizePubSub_splitter.publishWidthChange },
    _react2.default.createElement(
      'div',
      { id: sizeable_left_grid_id },
      _react2.default.createElement(_reactHoverGrid2.default, sizeable_grid_left_data)
    ),
    _react2.default.createElement(
      'div',
      { id: sizeable_right_grid_id,
        style: { marginLeft: '20px' } },
      _react2.default.createElement(_reactHoverGrid2.default, sizeable_grid_right_data)
    )
  )
), document.getElementById('sizeable_grid_id'));

module.exports = { sizeable_grid_HoverGrid: sizeable_grid_HoverGrid };