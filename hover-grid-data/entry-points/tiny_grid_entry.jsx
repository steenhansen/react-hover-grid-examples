'use strict'  // jsx entry file

import ReactHoverGrid from 'react-hover-grid'
import React from 'react'
import ReactDOM from 'react-dom'

const tiny_grid_data = require('../grid-data/tiny_grid_data.js')
const browser_helpers = require('../browser_helpers.js')
const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

const tiny_grid_texts =  tiny_grid_data.pictureTile_text
const tiny_grid_widths =  all_tile_image_widths['tiny_grid']
const pictureTile_widths= browser_helpers.mergeWidthsWithText(tiny_grid_texts, tiny_grid_widths, 'tiny_grid_images')
tiny_grid_data['pictureTile_list']=pictureTile_widths
const tiny_grid_ReactHoverGrid = ReactDOM.render(<ReactHoverGrid {...tiny_grid_data} />
                                               , document.getElementById(tiny_grid_data.hover_grid_id))

module.exports = {tiny_grid_ReactHoverGrid}
