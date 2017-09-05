'use strict'                                        
import ReactHoverGrid from 'react-hover-grid'
import React from 'react'
const ReactDOMServer = require('react-dom/server')

const picture_tile_widths = require('../picture_tile_widths.js')
const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

var lodash_shuffle = require('lodash/shuffle.js')

module.exports = function (fast_grid_data) {
  const fast_grid_texts =  fast_grid_data.pictureTile_text
  const fast_grid_widths =  all_tile_image_widths['fast_grid']
  let pictureTile_widths= picture_tile_widths.mergeWidthsWithText(fast_grid_texts, fast_grid_widths, 'fast_grid_images')

   if (fast_grid_data.init_shuffle) {
     pictureTile_widths = lodash_shuffle(pictureTile_widths)
   }

  fast_grid_data['pictureTile_list']=pictureTile_widths
  let react_hover_grid_factory = React.createFactory(ReactHoverGrid)
  let fast_grid_hover_grid_ssr = react_hover_grid_factory(fast_grid_data)
  let fast_grid_html_ssr = ReactDOMServer.renderToString(fast_grid_hover_grid_ssr)
  return fast_grid_html_ssr
}


