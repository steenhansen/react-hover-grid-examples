'use strict'

import ReactHoverGrid from 'react-hover-grid'
import React from 'react'
import ReactDOM from 'react-dom'

const readme_sample_grid_data = require('../grid-data/readme_sample_grid_data.js')
const browser_helpers = require('../browser_helpers.js')
const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

const readme_sample_grid_texts = readme_sample_grid_data.pictureTile_text
const readme_sample_grid_widths = all_tile_image_widths['readme_sample_grid']
const pictureTile_widths = browser_helpers.mergeWidthsWithText(readme_sample_grid_texts, readme_sample_grid_widths, 'readme_sample_grid_images')
readme_sample_grid_data['pictureTile_list'] = pictureTile_widths
const readme_sample_grid_ReactHoverGrid = ReactDOM.render(<ReactHoverGrid {...readme_sample_grid_data} />
  , document.getElementById(readme_sample_grid_data.hover_grid_id))

module.exports = {readme_sample_grid_ReactHoverGrid}
