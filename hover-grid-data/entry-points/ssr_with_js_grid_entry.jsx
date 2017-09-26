'use strict'

import ReactHoverGrid from 'react-hover-grid'
import React from 'react'
import ReactDOM from 'react-dom'

// N.B. include 'browser_helpers.js' and 'all_tile_image_widths.js' so that they will be
// included in /public/commons.hash.js
require('../browser_helpers.js')
require('../grid-data/all_tile_image_widths.js')

const ssr_with_js_grid_data = window._HOVER_TILES.ssr_with_js_grid_json
const ssr_with_js_grid_HoverGrid = ReactDOM.render(<ReactHoverGrid {...ssr_with_js_grid_data} />
  , document.getElementById(ssr_with_js_grid_data.ssr_grid_id))
module.exports = {ssr_with_js_grid_HoverGrid}
