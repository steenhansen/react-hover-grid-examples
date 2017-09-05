'use strict'

const path = require('path')
let jsx_chunks = require('../hover-grid-data/jsx-chunks.js')
const splitter_style = require('./splitter_style_css.js')



module.exports = function (req, res) {
  const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV)
  let sizeable_grid_entry = jsx_chunks.chunkhashEntry('sizeable_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  let sizeable_grid_pre_jsx = jsx_chunks.readEntryJsx('sizeable_grid_entry.jsx')
  const sizeable_grid_path = path.resolve(__dirname + '/../hover-grid-data/grid-data/sizeable_left_grid_data.js')
  let sizeable_grid_pre_js = jsx_chunks.readResourceFile(sizeable_grid_path)
  const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
  let events_promises = [sizeable_grid_entry, common_js_include, sizeable_grid_pre_jsx, sizeable_grid_pre_js]
  return Promise.all(events_promises)
                  .then(([sizeable_grid_entry, common_js_include, sizeable_grid_pre_jsx, sizeable_grid_pre_js]) => {
            const sizable_grid_pre_jsx_text = jsx_chunks.html2Text(sizeable_grid_pre_jsx)
            const sizeable_grid_piece = `
              <!doctype html>
              <html lang="en-US">
                <title>Hover Grid</title>
                ${always_show_vert_scroll}
                
                 ${splitter_style.splitter_css}
               
                <body>
                   VERTICAL STUFF
                  <br>
                  
                  <div id='sizeable_grid_id' style='width:100px; margin:0 auto; '>&nbsp;</div>
                  
                  ${react_includes}
                  <script src="${common_js_include}"></script>
                  <script DEFER src="${sizeable_grid_entry}"></script>    
                  
                <div style='clear:both'>&nbsp;</div>
                  <pre>${sizable_grid_pre_jsx_text}</pre>
                  <pre>${sizeable_grid_pre_js}</pre>
                                    
                </body>
              </html>`
            res.flushHeaders()     // N.B. for compression
  res.end(sizeable_grid_piece)
})
}
