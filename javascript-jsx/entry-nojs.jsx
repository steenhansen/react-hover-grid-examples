"use strict";
import ReactHoverGrid from "react-hover-grid";
import React from "react";
const ReactDOMServer = require("react-dom/server");

const { the_hover } = require("../public/data-nojs.js");

var lodash_shuffle = require("lodash/shuffle.js");

function ssr_js_grid_ReactHoverGrid() {
  if (the_hover.init_shuffle_ssr) {
    const new_list = lodash_shuffle(the_hover.pictureTile_list);
    the_hover["pictureTile_list"] = new_list;
  }
  let ssr_with_js_grid_hover_grid_ssr = React.createElement(ReactHoverGrid, the_hover);
  let ssr_with_js_grid_html_ssr = ReactDOMServer.renderToStaticMarkup(ssr_with_js_grid_hover_grid_ssr);
  return ssr_with_js_grid_html_ssr;
}

module.exports = { ssr_js_grid_ReactHoverGrid: ssr_js_grid_ReactHoverGrid };
