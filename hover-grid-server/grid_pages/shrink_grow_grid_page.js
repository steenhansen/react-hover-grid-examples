'use strict'

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')
const browser_helpers = require('../../hover-grid-data/browser_helpers.js')

module.exports = function (req, res) {
  let shrink_grow_grid_entry = jsx_chunks.chunkhashEntry('shrink_grow_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  let shrink_grow_grid_pre_jsx = jsx_chunks.readEntryJsx('shrink_grow_grid_entry.jsx')
  const shrink_grow_grid_path = path.resolve(__dirname + '/../../hover-grid-data/grid-data/shrink_grow_grid_data.js')
  let shrink_grow_grid_pre_js = jsx_chunks.readResourceFile(shrink_grow_grid_path)
  const shrink_grow_grid_page = path.resolve(__dirname + '/shrink_grow_grid_page.js')
  let shrink_grow_grid_pre_page = jsx_chunks.readResourceFile(shrink_grow_grid_page)
  let events_promises = [shrink_grow_grid_entry
                        ,common_js_include
                        ,shrink_grow_grid_pre_jsx
                        ,shrink_grow_grid_pre_js
                        ,shrink_grow_grid_pre_page]
  return Promise.all(events_promises)
      .then(([shrink_grow_grid_entry
             ,common_js_include
             ,shrink_grow_grid_pre_jsx
             ,shrink_grow_grid_pre_js
             ,shrink_grow_grid_pre_page]) => {
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV, req)
      const shrink_grow_grid_pre_jsx_text = jsx_chunks.html2Text(shrink_grow_grid_pre_jsx)
      const shrink_grow_grid_pre_page_text = jsx_chunks.html2Text(shrink_grow_grid_pre_page)
      const menu_html = jsx_chunks.grid_menu('shrink_grow_grid')

      const shrink_grow_grid_html = `
        <!doctype html>
          <html lang="en-US">
           <head>
            <title>Shrink&amp;Grow</title>
            ${always_show_vert_scroll}
             </head>
            <body>
                ${menu_html}
                                
                                
                                <br>          
Publish/Subscribe handles the growing and shrinking of this grid; cpu intensive re-drawing
 
 
         
                  <div id='shrink_grow_grid_id' style='width:100px; margin:0 auto; '>&nbsp;</div>
                  
                  
                  
                  
                  ${react_includes}
                  <script src="${common_js_include}"></script>
                  <script DEFER src="${shrink_grow_grid_entry}"></script>    
                  
                 <div style='clear:both'>&nbsp;</div>
                 
                 	<pre style='background-color:#eee'>${shrink_grow_grid_pre_jsx_text}</pre>
                    <pre style='background-color:#ddd'>${shrink_grow_grid_pre_js}</pre>
                    <pre style='background-color:#ccc'>${shrink_grow_grid_pre_page_text}</pre>

               </body>
          </html>`
      res.flushHeaders() 
      var mountains_minified = jsx_chunks.minify_html(shrink_grow_grid_html, process.env.NODE_ENV)
      res.end(mountains_minified)
  })
}
