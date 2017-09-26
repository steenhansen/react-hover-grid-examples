'use strict'  // jsx entry file

import ReactHoverGrid from 'react-hover-grid'
import React from 'react'
import ReactDOM from 'react-dom'

const circle_clip_grid_data = require('../grid-data/circle_clip_grid_data.js')
const browser_helpers = require('../browser_helpers.js')
const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

const circle_clip_grid_texts = circle_clip_grid_data.pictureTile_text
const circle_clip_grid_widths = all_tile_image_widths['circle_clip_grid']
const pictureTile_widths = browser_helpers.mergeWidthsWithText(circle_clip_grid_texts, circle_clip_grid_widths, 'circle_clip_grid_images')
circle_clip_grid_data['pictureTile_list'] = pictureTile_widths
const circle_clip_grid_ReactHoverGrid = ReactDOM.render(<ReactHoverGrid {...circle_clip_grid_data} />
  , document.getElementById(circle_clip_grid_data.hover_grid_id))

function circleIntervalMenu (interval_seconds) {
  setInterval(circle_clip_grid_data.onResize, interval_seconds)
}

module.exports = {
  circle_clip_grid_ReactHoverGrid: circle_clip_grid_ReactHoverGrid
  , circleIntervalMenu: circleIntervalMenu
}
