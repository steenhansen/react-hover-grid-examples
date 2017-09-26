'use strict'
import ReactHoverGrid from 'react-hover-grid'

import React from 'react'
import ReactDOM from 'react-dom'

const SECOND_TIME = 0.01
const MAX_WIDTH = 1000
const MIN_WIDTH = 100

const shrink_grow_grid_data = require('../grid-data/shrink_grow_grid_data')
const browser_helpers = require('../browser_helpers.js')
const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

function setGridWidth (width_int, shrink_grow_grid_id) {
  const elem = document.getElementById(shrink_grow_grid_id)
  elem.style.width = width_int + 'px'
}

let resizePubSub_timer = (function (seconds_between) {
  let current_width = 100
  let subscribed_function
  let is_hover_function
  let inc_dec = 1
  let shrink_grow_grid_id

  return {
    subscribeToWidthChange: function (grid_update_function, grid_id, grid_get_hover_function) {
      subscribed_function = grid_update_function
      is_hover_function = grid_get_hover_function
      shrink_grow_grid_id = grid_id
      setInterval(this.publishWidthChange, seconds_between * 1000)
      setGridWidth(current_width, shrink_grow_grid_id)
      return current_width
    }
    , publishWidthChange: function () {
      const is_hovering_on_grid = is_hover_function()
      if (!is_hovering_on_grid) {
        const window_width = ReactHoverGrid.windowWidth()
        if (inc_dec === 1) {
          if (current_width >= window_width || current_width >= MAX_WIDTH) {
            inc_dec = -1
          }
        } else {
          if (current_width <= MIN_WIDTH) {
            inc_dec = 1
          }
        }
        current_width = current_width + inc_dec
        if (inc_dec === 1) {
          setGridWidth(current_width, shrink_grow_grid_id)
          subscribed_function(current_width)
        } else {
          subscribed_function(current_width)
          setGridWidth(current_width, shrink_grow_grid_id)
        }
      }
    }
  }
})(SECOND_TIME)

const shrink_grow_grid_texts = shrink_grow_grid_data.pictureTile_text
const shrink_grow_grid_widths = all_tile_image_widths['shrink_grow_grid']

const pictureTile_widths = browser_helpers.mergeWidthsWithText(shrink_grow_grid_texts, shrink_grow_grid_widths, 'shrink_grow_grid_images')
shrink_grow_grid_data['pictureTile_list'] = pictureTile_widths

shrink_grow_grid_data.resize_pub_sub = resizePubSub_timer
let shrink_grow_grid_ReactHoverGrid = ReactDOM.render(<ReactHoverGrid
  {...shrink_grow_grid_data}
/>, document.getElementById(shrink_grow_grid_data.hover_grid_id))

module.exports = {shrink_grow_grid_ReactHoverGrid}
