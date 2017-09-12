'use strict'

import React from 'react'
import SplitPane from 'react-split-pane'     //  https://github.com/tomkp/react-split-pane
import ReactHoverGrid from 'react-hover-grid'

const LEFT_PANE_WIDTH = 400
const PANE_MARGIN = 20
const SPLITTER_CONTAINER_ID = 'resizable_splitter_grid_id'


const browser_helpers = require('../browser_helpers.js')
const all_tile_image_widths = require('../grid-data/all_tile_image_widths.js')

const resizable_splitter_grid_left_data = require('../grid-data/sizeable_left_grid_data')
const sizeable_left_grid_id =resizable_splitter_grid_left_data.hover_grid_id

const resizable_splitter_grid_right_data = require('../grid-data/sizeable_right_grid_data')
const sizeable_right_grid_id =resizable_splitter_grid_right_data.hover_grid_id


let sizeable_resizePubSub_splitter = (function (resizable_splitter_grid_left_id, resizable_splitter_grid_right_id) {
  let current_widths = {[resizable_splitter_grid_left_id]: LEFT_PANE_WIDTH, [resizable_splitter_grid_right_id]: LEFT_PANE_WIDTH}
  let subscribe_to_width = {}

  return {
    subscribeToWidthChange: function (subscribe_function, originator_id) {
      console.assert(typeof subscribe_function === 'function', 'resizable_splitter_grid_entry subscribe_function not a function')
      console.assert(typeof originator_id === 'string', 'resizable_splitter_grid_entry  originator_id not a string')
      subscribe_to_width[originator_id] = subscribe_function
    }
    , publishWidthChange: function () {
      let left_width = 0
      let right_width = 0

      const left_pane_width = ReactHoverGrid.getComputedWidth(resizable_splitter_grid_left_id)
      if (left_pane_width !== null) {
        const right_pane_width = ReactHoverGrid.getComputedWidth(resizable_splitter_grid_right_id)
        if (left_pane_width > PANE_MARGIN) {
          left_width = left_pane_width - PANE_MARGIN
        }
        if (right_pane_width > PANE_MARGIN) {
          right_width = right_pane_width - PANE_MARGIN
        }
        current_widths = {[resizable_splitter_grid_left_id]: left_width, [resizable_splitter_grid_right_id]: right_width}
        for (const grid_id in subscribe_to_width) {
          const containerResize_func = subscribe_to_width[grid_id]
          containerResize_func(current_widths[grid_id])
        }
      }
      const splitter_container = document.getElementById(SPLITTER_CONTAINER_ID)
      const splitter_height = splitter_container.style.height
      const div_data_reactroot = splitter_container.firstElementChild
      const div_class_SplitPane = div_data_reactroot.firstElementChild
      div_class_SplitPane.style.height=splitter_height
    }
  }
})(sizeable_left_grid_id, sizeable_right_grid_id)


const left_grid_texts =  resizable_splitter_grid_left_data.pictureTile_text
const left_grid_widths =  all_tile_image_widths['sizeable_left_grid']
const left_pictureTile_widths= browser_helpers.mergeWidthsWithText(left_grid_texts, left_grid_widths, 'sizeable_left_grid_images')
resizable_splitter_grid_left_data['pictureTile_list']=left_pictureTile_widths
resizable_splitter_grid_left_data.resize_pub_sub = sizeable_resizePubSub_splitter

const right_grid_texts =  resizable_splitter_grid_right_data.pictureTile_text
const right_grid_widths =  all_tile_image_widths['sizeable_right_grid']
const right_pictureTile_widths= browser_helpers.mergeWidthsWithText(right_grid_texts, right_grid_widths, 'sizeable_right_grid_images')
resizable_splitter_grid_right_data['pictureTile_list']=right_pictureTile_widths
resizable_splitter_grid_right_data.resize_pub_sub = sizeable_resizePubSub_splitter

let resizable_splitter_grid_HoverGrid = ReactDOM.render(
  <div>
     <SplitPane split='vertical'
      defaultSize={LEFT_PANE_WIDTH}
      minSize={50}
      maxSize={-75}
      onChange={sizeable_resizePubSub_splitter.publishWidthChange}>
      <div id={sizeable_left_grid_id}>
        <ReactHoverGrid {...resizable_splitter_grid_left_data} />
      </div>
      <div id={sizeable_right_grid_id}
           style={{marginLeft: '20px'}}>
        <ReactHoverGrid {...resizable_splitter_grid_right_data} />
      </div>
    </SplitPane>
  </div>
        , document.getElementById(SPLITTER_CONTAINER_ID))

module.exports = { resizable_splitter_grid_HoverGrid }
