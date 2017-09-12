'use strict'  // jsx entry file

import ReactHoverGrid from 'react-hover-grid'
import React from 'react'
import ReactDOM from 'react-dom'

const npm_example_grid_data = require('../grid-data/npm_example_grid_data.js')
const browser_helpers = require('../browser_helpers.js')
const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

const npm_example_grid_texts =  npm_example_grid_data.pictureTile_text
const npm_example_grid_widths =  all_tile_image_widths['npm_example_grid']
const pictureTile_widths= browser_helpers.mergeWidthsWithText(npm_example_grid_texts, npm_example_grid_widths, 'npm_example_grid_images')
npm_example_grid_data['pictureTile_list']=pictureTile_widths
const npm_example_grid_ReactHoverGrid = ReactDOM.render(<ReactHoverGrid {...npm_example_grid_data} />
                                               , document.getElementById(npm_example_grid_data.hover_grid_id))

module.exports = {npm_example_grid_ReactHoverGrid}
