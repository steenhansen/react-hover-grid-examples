'use strict'  // web page

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')

module.exports = function (req, res) {
  let circle_clip_grid_entry = jsx_chunks.chunkhashEntry('circle_clip_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  let circle_clip_grid_pre_jsx = jsx_chunks.readEntryJsx('circle_clip_grid_entry.jsx')
  const circle_clip_grid_data = path.resolve(__dirname + '/../../hover-grid-data/grid-data/circle_clip_grid_data.js')
  let circle_clip_grid_pre_js = jsx_chunks.readResourceFile(circle_clip_grid_data)
  const circle_clip_grid_page = path.resolve(__dirname + '/circle_clip_grid_page.js')
  let circle_clip_grid_pre_page = jsx_chunks.readResourceFile(circle_clip_grid_page)
  let events_promises = [circle_clip_grid_entry
    , common_js_include
    , circle_clip_grid_pre_jsx
    , circle_clip_grid_pre_js
    , circle_clip_grid_pre_page]
  return Promise.all(events_promises)
    .then(([circle_clip_grid_entry
      , common_js_include
      , circle_clip_grid_pre_jsx
      , circle_clip_grid_pre_js
      , circle_clip_grid_pre_page]) => {
      const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV, req)
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      const circle_clip_grid_pre_jsx_text = jsx_chunks.html2Text(circle_clip_grid_pre_jsx)
      const circle_clip_grid_pre_page_text = jsx_chunks.html2Text(circle_clip_grid_pre_page)
      const circle_menu = jsx_chunks.circle_menu('circle_clip_grid', process.env.NODE_ENV)

      const circle_clip_grid_html = `
        <!doctype html>
          <html lang="en-US">
           <head>
            <title>Circle Clip</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
            ${always_show_vert_scroll}
             </head>
            <body  style=' background-image: url("sq.png");' >
           ${circle_menu}



                  <div id='circle_clip_grid_id' style='width:100%;'>&nbsp;</div>
                  
                  
<br>                  
Image 1,2 is static so that the menu can be displayed. 
Images are cycled through randomly.
Images have a black and white filter on hover. 

                          
                  ${react_includes}
                 
                  <script src="${common_js_include}"></script>
                  <script DEFER src="${circle_clip_grid_entry}"></script>    
                  
                 <div style='clear:both'>&nbsp;</div>
                 
                  	<pre style='background-color:#eee'>${circle_clip_grid_pre_jsx_text}</pre>
                    <pre style='background-color:#ddd'>${circle_clip_grid_pre_js}</pre>
                    <pre style='background-color:#ccc'>${circle_clip_grid_pre_page_text}</pre>
                  
                  
               </body>
          </html>`
      var tiny_minified = jsx_chunks.minify_html(circle_clip_grid_html, process.env.NODE_ENV)
      res.send(tiny_minified)
    })
}
