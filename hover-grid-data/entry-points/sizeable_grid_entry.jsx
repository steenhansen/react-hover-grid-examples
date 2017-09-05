'use strict'

import React from 'react'
import SplitPane from 'react-split-pane'     //  https://github.com/tomkp/react-split-pane
import ReactHoverGrid from 'react-hover-grid'

const LEFT_PANE_SIZE = 400
const PANE_MARGIN = 20

const picture_tile_widths = require('../picture_tile_widths.js')
const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

const sizeable_grid_left_data = require('../grid-data/sizeable_left_grid_data')
const sizeable_left_grid_id =sizeable_grid_left_data.hover_grid_id

const sizeable_grid_right_data = require('../grid-data/sizeable_right_grid_data')
const sizeable_right_grid_id =sizeable_grid_right_data.hover_grid_id


let sizeable_resizePubSub_splitter = (function (sizeable_grid_left_id, sizeable_grid_right_id) {
  let current_widths = {[sizeable_grid_left_id]: LEFT_PANE_SIZE, [sizeable_grid_right_id]: LEFT_PANE_SIZE}
  let subscribe_to_width = {}

  return {
    subscribeToWidthChange: function (subscribe_function, originator_id) {
      console.assert(typeof subscribe_function === 'function', 'sizeable_grid_entry subscribe_function not a function')
      console.assert(typeof originator_id === 'string', 'sizeable_grid_entry  originator_id not a string')
      subscribe_to_width[originator_id] = subscribe_function
    }
    , publishWidthChange: function () {
      let left_width = 0
      let right_width = 0

      const left_pane_width = ReactHoverGrid.getComputedWidth(sizeable_grid_left_id)
      if (left_pane_width !== null) {
        const right_pane_width = ReactHoverGrid.getComputedWidth(sizeable_grid_right_id)
        if (left_pane_width > PANE_MARGIN) {
          left_width = left_pane_width - PANE_MARGIN
        }
        if (right_pane_width > PANE_MARGIN) {
          right_width = right_pane_width - PANE_MARGIN
        }
        current_widths = {[sizeable_grid_left_id]: left_width, [sizeable_grid_right_id]: right_width}
        for (const grid_id in subscribe_to_width) {
          const containerResize_func = subscribe_to_width[grid_id]
          containerResize_func(current_widths[grid_id])
        }
      }
    }
  }
})(sizeable_left_grid_id, sizeable_right_grid_id)


const left_grid_texts =  sizeable_grid_left_data.pictureTile_text
const left_grid_widths =  all_tile_image_widths['sizeable_left_grid']
const left_pictureTile_widths= picture_tile_widths.mergeWidthsWithText(left_grid_texts, left_grid_widths, 'sizeable_left_grid_images')
sizeable_grid_left_data['pictureTile_list']=left_pictureTile_widths
sizeable_grid_left_data.resize_pub_sub = sizeable_resizePubSub_splitter



const right_grid_texts =  sizeable_grid_right_data.pictureTile_text
const right_grid_widths =  all_tile_image_widths['sizeable_right_grid']
const right_pictureTile_widths= picture_tile_widths.mergeWidthsWithText(right_grid_texts, right_grid_widths, 'sizeable_right_grid_images')
sizeable_grid_right_data['pictureTile_list']=right_pictureTile_widths
sizeable_grid_right_data.resize_pub_sub = sizeable_resizePubSub_splitter

let sizeable_grid_HoverGrid = ReactDOM.render(
  <div>
     <SplitPane split='vertical'
      defaultSize={LEFT_PANE_SIZE}
      minSize={50}
      maxSize={-75}
      onChange={sizeable_resizePubSub_splitter.publishWidthChange}>
      <div id={sizeable_left_grid_id}>
        <ReactHoverGrid {...sizeable_grid_left_data} />
      </div>
      <div id={sizeable_right_grid_id}
           style={{marginLeft: '20px'}}>
        <ReactHoverGrid {...sizeable_grid_right_data} />
      </div>
    </SplitPane>
  </div>
        , document.getElementById('sizeable_grid_id'))

module.exports = { sizeable_grid_HoverGrid }
