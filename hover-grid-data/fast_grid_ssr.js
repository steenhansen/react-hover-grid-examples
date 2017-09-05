'use strict'

let jsx_chunks = require('./jsx-chunks.js')

function start_ssr_info (req, HTML_DIR, IMAGES_DIR) {
  const fast_grid_data = require('./grid-data/fast_grid_data')
  let fast_grid_html = require('./entry-points/fast_grid_entry_ssr.js')(fast_grid_data)
  const fast_grid_json = JSON.stringify(fast_grid_data)
  let fast_grid_entry = jsx_chunks.chunkhashEntry('fast_grid_entry', req)
  const inline_css_images = '../../' + HTML_DIR + '/' + IMAGES_DIR + '/fast_grid_images/inline-images.css'
  let fast_grid_css = jsx_chunks.readEntryJsx(inline_css_images, req)
  return {fast_grid_html: fast_grid_html, fast_grid_json: fast_grid_json, fast_grid_css: fast_grid_css, fast_grid_entry: fast_grid_entry}
}

module.exports = {
  start_ssr_info: start_ssr_info
}