'use strict'

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')
let ssr_with_js_grid_pieces = require('../../hover-grid-data/ssr_with_js_grid_pieces.js')
const browser_helpers = require('../../hover-grid-data/browser_helpers.js')

module.exports = function (req, res, HTML_DIR, IMAGES_DIR) {
  const {ssr_with_js_grid_html, ssr_with_js_grid_json, ssr_with_js_grid_css} = ssr_with_js_grid_pieces.start_ssr_info(req, HTML_DIR, IMAGES_DIR)
  let ssr_with_js_grid_pre_ssr = jsx_chunks.readEntryJsx('ssr_with_js_grid_entry_ssr.jsx')
  let ssr_with_js_grid_pre_jsx = jsx_chunks.readEntryJsx('ssr_with_js_grid_entry.jsx')
  const ssr_with_js_grid_path = path.resolve(__dirname + '/../../hover-grid-data/grid-data/ssr_with_js_grid_data.js')
  let ssr_with_js_grid_pre_js = jsx_chunks.readResourceFile(ssr_with_js_grid_path)
  const ssr_with_js_grid_page = path.resolve(__dirname + '/ssr_no_js_grid_page.js')
  let ssr_with_js_grid_pre_page = jsx_chunks.readResourceFile(ssr_with_js_grid_page)
  let events_promises = [ssr_with_js_grid_css
                        ,ssr_with_js_grid_pre_ssr
                        ,ssr_with_js_grid_pre_jsx
                        ,ssr_with_js_grid_pre_js
                        ,ssr_with_js_grid_pre_page]
  return Promise.all(events_promises)
    .then(([ssr_with_js_grid_css
           ,ssr_with_js_grid_pre_ssr
           ,ssr_with_js_grid_pre_jsx
           ,ssr_with_js_grid_pre_js
           ,ssr_with_js_grid_pre_page]) => {
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      let invalid_checksum = jsx_chunks.expectInvalidChecksum(process.env.NODE_ENV)
      const ssr_with_js_grid_pre_ssr_text = jsx_chunks.html2Text(ssr_with_js_grid_pre_ssr)
      const ssr_with_js_grid_pre_jsx_text = jsx_chunks.html2Text(ssr_with_js_grid_pre_jsx)
      const ssr_with_js_grid_pre_page_text = jsx_chunks.html2Text(ssr_with_js_grid_pre_page)
      const menu_html = jsx_chunks.grid_menu('srr_no_js_grid')

      const no_js_srr_html = `
        <!doctype html>
          <html lang="en-US">
           <head>
            <title>No Js SSR</title>
            ${always_show_vert_scroll}
              <style>${ssr_with_js_grid_css}</style>
             </head>  
            <body>
                ${menu_html}
                    ${invalid_checksum}
                   <script>
                         window._HOVER_TILES ={}
                         window._HOVER_TILES.ssr_with_js_grid_json=${ssr_with_js_grid_json}
                      </script>
               <div style="background-color:#eee;
                            padding:20px;">
                      <div style="overflow:hidden">
                        <div
                         id='s'
                         style='width:100%;'>${ssr_with_js_grid_html}</div><!-- id='s_grid_id' -->
                      </div>
               </div>  
 <br>          
This React Hover Grid is generated isomorphically, there is no Javascript on this page.<br>             
- to display the grid without seeing unloaded images, each picture is first retrieved via inlined data-uri that is
  stored in public/hover-grid-images/ssr_with_js_grid_images/low_quality which is generated with 'gulp all'<br>
- as there is no Javascript, the grid width is controlled with media queries matching popular screen widths, like 1280px
- there is only jerky browser resizing without Javascript
- server screen sizes supported in [412, 414, 480, 568, 640, 667, 720, 732, 736, 768, 800, 900, 1024, 1050, 1080, 
                                  1200, 1280, 1360, 1366, 1440, 1600, 1680, 1920]
       
          <div style='clear:both'>&nbsp;</div>
                  <pre style="background-color:#eee">${ssr_with_js_grid_pre_ssr_text}</pre>
                  <pre style="background-color:#ddd">${ssr_with_js_grid_pre_jsx_text}</pre>
                  <pre style="background-color:#ccc">${ssr_with_js_grid_pre_js}</pre>
                   <pre style='background-color:#bbb'>${ssr_with_js_grid_pre_page_text}</pre>
                  
               </body>
            </html>`
    res.flushHeaders()     
    var no_js_srr_minified= jsx_chunks.minify_html(no_js_srr_html, process.env.NODE_ENV)
    res.end(no_js_srr_minified)
  })
}