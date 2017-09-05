'use strict'

import ReactHoverGrid from 'react-hover-grid'
import React from 'react'
import ReactDOM from 'react-dom'

const fast_grid_data = window._HOVER_TILES.fast_grid_json
const fast_grid_HoverGrid = ReactDOM.render(<ReactHoverGrid {...fast_grid_data} />
        , document.getElementById(fast_grid_data.ssr_grid_id))
module.exports = {fast_grid_HoverGrid}
