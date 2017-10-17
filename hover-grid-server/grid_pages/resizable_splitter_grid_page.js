'use strict'

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')

module.exports = function (req, res) {
  let resizable_splitter_grid_entry = jsx_chunks.chunkhashEntry('resizable_splitter_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  let resizable_splitter_grid_pre_jsx = jsx_chunks.readEntryJsx('resizable_splitter_grid_entry.jsx')
  const resizable_splitter_grid_path = path.resolve(__dirname + '/../../hover-grid-data/grid-data/sizeable_left_grid_data.js')
  let resizable_splitter_grid_pre_js = jsx_chunks.readResourceFile(resizable_splitter_grid_path)
  const resizable_splitter_grid_page = path.resolve(__dirname + '/resizable_splitter_grid_page.js')
  let resizable_splitter_grid_pre_page = jsx_chunks.readResourceFile(resizable_splitter_grid_page)
  let events_promises = [resizable_splitter_grid_entry
    , common_js_include
    , resizable_splitter_grid_pre_jsx
    , resizable_splitter_grid_pre_js
    , resizable_splitter_grid_pre_page]
  return Promise.all(events_promises)
      .then(([resizable_splitter_grid_entry
        , common_js_include
        , resizable_splitter_grid_pre_jsx
        , resizable_splitter_grid_pre_js
        , resizable_splitter_grid_pre_page]) => {
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV, req)
      const sizable_grid_pre_jsx_text = jsx_chunks.html2Text(resizable_splitter_grid_pre_jsx)
      const resizable_splitter_grid_pre_page_text = jsx_chunks.html2Text(resizable_splitter_grid_pre_page)
      const menu_html = jsx_chunks.grid_menu('resizable_splitter_grid', process.env.NODE_ENV)
      const resizable_splitter_grid_html = `
              <!doctype html>
              <html lang="en-US">
               <head>
                <title>Re-Sizable</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
                ${always_show_vert_scroll}
                <link href="splitter_style.css" rel="stylesheet">
                 </head>
                <body>
                    ${menu_html}
                  <br>
                  <div id='resizable_splitter_grid_id' style='width:100px; margin:0 auto; height:444px'>&nbsp;</div>
<br>                  
A <a href="https://github.com/tomkp/react-split-pane" target="_blank">react-split-pane<a> splits two resizable React Hover Grids
- Publish/Subscribe is used to match the React Hover Grids' width to their containers

                  
                  
                  
                  ${react_includes}
                  <script src="${common_js_include}"></script>
                  <script DEFER src="${resizable_splitter_grid_entry}"></script>    
                <div style='clear:both'>&nbsp;</div>
                
                <pre style='background-color:#eee'>${sizable_grid_pre_jsx_text}</pre>
                    <pre style='background-color:#ddd'>${resizable_splitter_grid_pre_js}</pre>
                    <pre style='background-color:#ccc'>${resizable_splitter_grid_pre_page_text}</pre>
                    
                </body>
              </html>`
      res.flushHeaders()
  var sizeable_minified = jsx_chunks.minify_html(resizable_splitter_grid_html, process.env.NODE_ENV)
  res.end(sizeable_minified)
})
}
