'use strict'

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')

module.exports = function (req, res) {
  let mountains_grid_entry = jsx_chunks.chunkhashEntry('mountains_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  let mountains_grid_pre_jsx = jsx_chunks.readEntryJsx('mountains_grid_entry.jsx')
  const mountains_grid_path = path.resolve(__dirname + '/../../hover-grid-data/grid-data/mountains_grid_data.js')
  let mountains_grid_pre_js = jsx_chunks.readResourceFile(mountains_grid_path)
  let events_promises = [mountains_grid_entry, common_js_include, mountains_grid_pre_jsx, mountains_grid_pre_js]
  return Promise.all(events_promises)
      .then(([mountains_grid_entry, common_js_include, mountains_grid_pre_jsx, mountains_grid_pre_js]) => {
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV)
      const mountains_grid_pre_jsx_text = jsx_chunks.html2Text(mountains_grid_pre_jsx)
      const mountains_grid_html = `
        <!doctype html>
          <html lang="en-US">
            <title>Hover Grid</title>
            ${always_show_vert_scroll}
            <body>
            Showing Google Fonts, Word Placements, Gradients, and Automatic Image Re-Sizing
            <br>
                  <div id='mountains_grid_id' style='width:100px; margin:0 auto; '>&nbsp;</div>
                  ${react_includes}
                  <script src="${common_js_include}"></script>
                  <script DEFER src="${mountains_grid_entry}"></script>    
                  
                 <div style='clear:both'>&nbsp;</div>
                  	<pre>${mountains_grid_pre_jsx_text}</pre>
                            	<pre>${mountains_grid_pre_js}</pre>
               </body>
          </html>`
      res.flushHeaders() 
      var mountains_minified = jsx_chunks.minify_html(mountains_grid_html, process.env.NODE_ENV)
      res.end(mountains_minified)
  })
}
