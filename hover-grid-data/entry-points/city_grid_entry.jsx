'use strict'  

import ReactHoverGrid from 'react-hover-grid'
import React from 'react'
import ReactDOM from 'react-dom'
const city_grid_data = require('../grid-data/city_grid_data.js')

const browser_helpers = require('../browser_helpers.js')




const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')


const city_grid_texts =  city_grid_data.pictureTile_text
const city_grid_widths =  all_tile_image_widths['city_grid']


const pictureTile_widths= browser_helpers.mergeWidthsWithText(city_grid_texts, city_grid_widths, 'city_grid_images')
city_grid_data['pictureTile_list']=pictureTile_widths
const city_grid_ReactHoverGrid = ReactDOM.render(<ReactHoverGrid {...city_grid_data} />
                                      , document.getElementById(city_grid_data.hover_grid_id))
module.exports = {city_grid_ReactHoverGrid}
