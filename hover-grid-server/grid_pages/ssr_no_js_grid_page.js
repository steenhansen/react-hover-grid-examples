'use strict'

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')
let fast_grid_srr = require('../../hover-grid-data/fast_grid_ssr.js')

module.exports = function (req, res, HTML_DIR, IMAGES_DIR) {
  const {fast_grid_html, fast_grid_json, fast_grid_css} = fast_grid_srr.start_ssr_info(req, HTML_DIR, IMAGES_DIR)
  let fast_grid_pre_ssr = jsx_chunks.readEntryJsx('fast_grid_entry_ssr.jsx')
  let fast_grid_pre_jsx = jsx_chunks.readEntryJsx('fast_grid_entry.jsx')
  const fast_grid_path = path.resolve(__dirname + '/../../hover-grid-data/grid-data/fast_grid_data.js')
  let fast_grid_pre_js = jsx_chunks.readResourceFile(fast_grid_path)
  let events_promises = [fast_grid_css, fast_grid_pre_ssr, fast_grid_pre_jsx, fast_grid_pre_js ]
  return Promise.all(events_promises)
    .then(([fast_grid_css, fast_grid_pre_ssr, fast_grid_pre_jsx, fast_grid_pre_js ]) => {
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      let invalid_checksum = jsx_chunks.expectInvalidChecksum(process.env.NODE_ENV)
      const fast_grid_pre_ssr_text = jsx_chunks.html2Text(fast_grid_pre_ssr)
      const fast_grid_pre_jsx_text = jsx_chunks.html2Text(fast_grid_pre_jsx)
      const no_js_srr_html = `
        <!doctype html>
          <html lang="en-US">
            <title>Hover Grid</title>
            ${always_show_vert_scroll}
              <style>${fast_grid_css}</style>
            <body>
                    ${invalid_checksum}
                   <script>
                         window._HOVER_TILES ={}
                         window._HOVER_TILES.fast_grid_json=${fast_grid_json}
                      </script>
               <div style="background-color:gray;
                            margin-left:10px;
                            margin-right:10px;">
                    hlhhhjkj
                    <div style=" background-color:gray;"> 
                      <div style="margin-left:20px; margin-right:20px; background-color:gray; overflow:hidden">
                        <div
                         id='s'
                         style='width:100%;'>${fast_grid_html}</div><!-- id='s_grid_id' -->
                      </div>
                    </div>
                    kjkkjkljhkjh
               </div>  
                      
       
          <div style='clear:both'>&nbsp;</div>
                  <pre style="background-color:#eee">${fast_grid_pre_ssr_text}</pre>
                  <pre style="background-color:#ddd">${fast_grid_pre_jsx_text}</pre>
                  <pre style="background-color:#ccc">${fast_grid_pre_js}</pre>
                  
                  
               </body>
            </html>`
    res.flushHeaders()     
    var no_js_srr_minified= jsx_chunks.minify_html(no_js_srr_html, process.env.NODE_ENV)
    res.end(no_js_srr_minified)
  })
}
