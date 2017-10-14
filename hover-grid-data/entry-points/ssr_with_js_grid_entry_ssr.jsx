'use strict'
import ReactHoverGrid from 'react-hover-grid'
import React from 'react'
const ReactDOMServer = require('react-dom/server')

const browser_helpers = require('../browser_helpers.js')
const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

var lodash_shuffle = require('lodash/shuffle.js')



function ssr_js_grid_ReactHoverGrid(ssr_with_js_grid_data) {
  const ssr_with_js_grid_picture_tiles = ssr_with_js_grid_data.pictureTile_text
  const ssr_with_js_grid_widths = all_tile_image_widths['ssr_with_js_grid']
  let pictureTile_sizes = browser_helpers.mergeWidthsWithText(ssr_with_js_grid_picture_tiles, ssr_with_js_grid_widths, 'ssr_with_js_grid_images')

  if (ssr_with_js_grid_data.init_shuffle_ssr) {
    pictureTile_sizes = lodash_shuffle(pictureTile_sizes)
  }

  ssr_with_js_grid_data['pictureTile_list'] = pictureTile_sizes

  let ssr_with_js_grid_hover_grid_ssr = React.createElement(ReactHoverGrid, ssr_with_js_grid_data)
  let ssr_with_js_grid_html_ssr = ReactDOMServer.renderToStaticMarkup(ssr_with_js_grid_hover_grid_ssr)

  return ssr_with_js_grid_html_ssr
}






module.exports = {ssr_js_grid_ReactHoverGrid: ssr_js_grid_ReactHoverGrid}

