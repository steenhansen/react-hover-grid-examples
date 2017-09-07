'use strict'

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')

module.exports = function (req, res) {
  const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV)
  let city_grid_entry = jsx_chunks.chunkhashEntry('city_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  let city_grid_pre_jsx = jsx_chunks.readEntryJsx('city_grid_entry.jsx')
  const city_grid_path = path.resolve(__dirname + '/../../hover-grid-data/grid-data/city_grid_data.js')
  let city_grid_pre_js = jsx_chunks.readResourceFile(city_grid_path)
  const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
  let events_promises = [city_grid_entry, common_js_include, city_grid_pre_jsx, city_grid_pre_js]
  return Promise.all(events_promises)
      .then(([city_grid_entry, common_js_include, city_grid_pre_jsx, city_grid_pre_js]) => {
      const city_grid_pre_jsx_text = jsx_chunks.html2Text(city_grid_pre_jsx)
      const city_grid_html = `
        <!doctype html>
          <html lang="en-US">
            <title>Hover Grid</title>
            ${always_show_vert_scroll}
            <body>
            Showing Google Fonts, Word Placements, Gradients, and Automatic Image Re-Sizing
            <br>
                  <div id='city_grid_id' style='width:100%;'>&nbsp;</div>
                  ${react_includes}
                  <script src="${common_js_include}"></script>
                  <script DEFER src="${city_grid_entry}"></script>    
                  
                 <div style='clear:both'>&nbsp;</div>
                  	<pre style='background-color:#eee'>${city_grid_pre_jsx_text}</pre>
                    <pre style='background-color:#ddd'>${city_grid_pre_js}</pre>
                  
                  
               </body>
          </html>`
      res.flushHeaders()     // N.B. for compression
      var city_minified = jsx_chunks.minify_html(city_grid_html, process.env.NODE_ENV)
      res.end(city_minified)
})
}
