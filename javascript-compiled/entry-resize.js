"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactSplitPane = _interopRequireDefault(require("react-split-pane"));
var _reactHoverGrid = _interopRequireDefault(require("react-hover-grid"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LEFT_PANE_WIDTH = 400;
var PANE_MARGIN = 20;
function resizePubSub_splitterX(resize_container_id, resizable_splitter_grid_left_id, resizable_splitter_grid_right_id) {
  var current_widths = _defineProperty(_defineProperty({}, resizable_splitter_grid_left_id, LEFT_PANE_WIDTH), resizable_splitter_grid_right_id, LEFT_PANE_WIDTH);
  var subscribe_to_width = {};
  return {
    subscribeToWidthChange: function subscribeToWidthChange(subscribe_function, originator_id) {
      console.assert(typeof subscribe_function === "function", "resizable_splitter_grid_entry subscribe_function not a function");
      console.assert(typeof originator_id === "string", "resizable_splitter_grid_entry  originator_id not a string");
      subscribe_to_width[originator_id] = subscribe_function;
    },
    publishWidthChange: function publishWidthChange() {
      var left_width = 0;
      var right_width = 0;
      var left_pane_width = _reactHoverGrid["default"].getComputedWidth(resizable_splitter_grid_left_id);
      if (left_pane_width !== null) {
        var right_pane_width = _reactHoverGrid["default"].getComputedWidth(resizable_splitter_grid_right_id);
        if (left_pane_width > PANE_MARGIN) {
          left_width = left_pane_width - PANE_MARGIN;
        }
        if (right_pane_width > PANE_MARGIN) {
          right_width = right_pane_width - PANE_MARGIN;
        }
        current_widths = _defineProperty(_defineProperty({}, resizable_splitter_grid_left_id, left_width), resizable_splitter_grid_right_id, right_width);
        for (var grid_id in subscribe_to_width) {
          var containerResize_func = subscribe_to_width[grid_id];
          containerResize_func(current_widths[grid_id]);
        }
      }
      var splitter_container = document.getElementById(resize_container_id);
      var splitter_height = splitter_container.style.height;
      var div_data_reactroot = splitter_container.firstElementChild;
      var div_class_SplitPane = div_data_reactroot.firstElementChild;
      div_class_SplitPane.style.height = splitter_height;
    }
  };
}
///////////
function resizeSplit(left_data, right_data, resize_container_id) {
  var left_id = left_data.hover_grid_id;
  var right_id = right_data.hover_grid_id;
  var resizePubSub_splitter = resizePubSub_splitterX(resize_container_id, left_id, right_id);
  left_data.resize_pub_sub = resizePubSub_splitter;
  right_data.resize_pub_sub = resizePubSub_splitter;
  ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_reactSplitPane["default"], {
    split: "vertical",
    defaultSize: LEFT_PANE_WIDTH,
    minSize: 50,
    maxSize: -75,
    onChange: resizePubSub_splitter.publishWidthChange
  }, /*#__PURE__*/React.createElement("div", {
    id: left_id
  }, /*#__PURE__*/React.createElement(_reactHoverGrid["default"], left_data)), /*#__PURE__*/React.createElement("div", {
    id: right_id,
    style: {
      marginLeft: "20px"
    }
  }, /*#__PURE__*/React.createElement(_reactHoverGrid["default"], right_data)))), document.getElementById(resize_container_id));
}
window.resizeSplit = resizeSplit;
var _default = exports["default"] = resizeSplit;