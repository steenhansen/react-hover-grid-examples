'use strict'  // web page

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')
const browser_helpers = require('../../hover-grid-data/browser_helpers.js')

module.exports = function (req, res) {
  let npm_example_grid_entry = jsx_chunks.chunkhashEntry('npm_example_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  let npm_example_grid_pre_jsx = jsx_chunks.readEntryJsx('npm_example_grid_entry.jsx')
  const npm_example_grid_data = path.resolve(__dirname + '/../../hover-grid-data/grid-data/npm_example_grid_data.js')
  let npm_example_grid_pre_js = jsx_chunks.readResourceFile(npm_example_grid_data)
  const npm_example_grid_page = path.resolve(__dirname + '/npm_example_grid_page.js')
  let npm_example_grid_pre_page = jsx_chunks.readResourceFile(npm_example_grid_page)
  let events_promises = [npm_example_grid_entry
                        ,common_js_include
                        ,npm_example_grid_pre_jsx
                        ,npm_example_grid_pre_js
                        ,npm_example_grid_pre_page]
  return Promise.all(events_promises)
      .then(([npm_example_grid_entry
             ,common_js_include 
             ,npm_example_grid_pre_jsx
             ,npm_example_grid_pre_js
             ,npm_example_grid_pre_page]) => {
      const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV, req)
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      const npm_example_grid_pre_jsx_text = jsx_chunks.html2Text(npm_example_grid_pre_jsx)
      const npm_example_grid_pre_page_text = jsx_chunks.html2Text(npm_example_grid_pre_page)
      const menu_html = jsx_chunks.grid_menu('npm_example_grid')
      const npm_example_grid_html = `
        <!doctype html>
          <html lang="en-US">
           <head>
            <title>NPM Example</title>
            ${always_show_vert_scroll}
             </head>
            <body>
           ${menu_html}
          
            
                  <div id='npm_example_grid_id' style='width:100%;'>&nbsp;</div>
                  
                  
<br>                  
The first three images have image filters on hover, gradients on text, and gradients on hover text. 
The other images have links to Google maps.

                          
                  ${react_includes}
                 
                  <script src="${common_js_include}"></script>
                  <script DEFER src="${npm_example_grid_entry}"></script>    
                  
                 <div style='clear:both'>&nbsp;</div>
                 
                  	<pre style='background-color:#eee'>${npm_example_grid_pre_jsx_text}</pre>
                    <pre style='background-color:#ddd'>${npm_example_grid_pre_js}</pre>
                    <pre style='background-color:#ccc'>${npm_example_grid_pre_page_text}</pre>
                  
                  
               </body>
          </html>`
      res.flushHeaders()
      var tiny_minified = jsx_chunks.minify_html(npm_example_grid_html, process.env.NODE_ENV)
      res.end(tiny_minified)
})
}
