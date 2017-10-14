'use strict'

let jsx_chunks = require('./jsx-chunks.js')





function start_ssr_info (req, HTML_DIR, IMAGES_DIR) {
  const ssr_with_js_grid_data = require('./grid-data/ssr_with_js_grid_data')


let ssr_entry = require('./entry-points/ssr_with_js_grid_entry_ssr.js')
 let ssr_with_js_grid_html = ssr_entry.ssr_js_grid_ReactHoverGrid(ssr_with_js_grid_data)

let ssr_onResize = ssr_with_js_grid_data.onResize



  const ssr_with_js_grid_json = JSON.stringify(ssr_with_js_grid_data)

  let ssr_with_js_grid_entry = jsx_chunks.chunkhashEntry('ssr_with_js_grid_entry', req)



  const inline_css_images = '../../' + HTML_DIR + '/' + IMAGES_DIR + '/ssr_with_js_grid_images/inline-images.css'
  let ssr_with_js_grid_css = jsx_chunks.readEntryJsx(inline_css_images, req)
  return {
    ssr_with_js_grid_html: ssr_with_js_grid_html
    , ssr_with_js_grid_json: ssr_with_js_grid_json
    , ssr_with_js_grid_css: ssr_with_js_grid_css
    , ssr_with_js_grid_entry: ssr_with_js_grid_entry
   , ssr_onResize: ssr_onResize 
  }
}
module.exports = {start_ssr_info: start_ssr_info}