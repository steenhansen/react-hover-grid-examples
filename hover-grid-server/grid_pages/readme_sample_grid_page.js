'use strict'  // web page

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')

module.exports = function (req, res) {
  let readme_sample_grid_entry = jsx_chunks.chunkhashEntry('readme_sample_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  let readme_sample_grid_pre_jsx = jsx_chunks.readEntryJsx('readme_sample_grid_entry.jsx')
  const readme_sample_grid_data = path.resolve(__dirname + '/../../hover-grid-data/grid-data/readme_sample_grid_data.js')
  let readme_sample_grid_pre_js = jsx_chunks.readResourceFile(readme_sample_grid_data)
  const readme_sample_grid_page = path.resolve(__dirname + '/readme_sample_grid_page.js')
  let readme_sample_grid_pre_page = jsx_chunks.readResourceFile(readme_sample_grid_page)
  let events_promises = [readme_sample_grid_entry
    , common_js_include
    , readme_sample_grid_pre_jsx
    , readme_sample_grid_pre_js
    , readme_sample_grid_pre_page]
  return Promise.all(events_promises)
    .then(([readme_sample_grid_entry
      , common_js_include
      , readme_sample_grid_pre_jsx
      , readme_sample_grid_pre_js
      , readme_sample_grid_pre_page]) => {
      const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV, req)
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      const readme_sample_grid_pre_jsx_text = jsx_chunks.html2Text(readme_sample_grid_pre_jsx)
      const readme_sample_grid_pre_page_text = jsx_chunks.html2Text(readme_sample_grid_pre_page)
      const menu_html = jsx_chunks.grid_menu('readme_sample_grid', process.env.NODE_ENV)
      const readme_sample_grid_html = `
        <!doctype html>
          <html lang="en-US">
           <head>
            <title>NPM Example</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
            ${always_show_vert_scroll}
             </head>
            <body>
           ${menu_html}

   <div style="clear:both">
                    Change the width of the browser to see the React-Hover-Grids resize and adjust the images.
 The <a href="https://www.npmjs.com/package/react-hover-grid">NPM package</a> has more information.
 </div>

          
          <style>
            .readme-sample-grid-css-style{
                color: yellow;
                font-size: 21px;
            }
          </style>
          
            
                  <div id='readme_sample_grid_id' style='width:100%;'>&nbsp;</div>
                  
                     <div style='clear:both'>&nbsp;</div>
<br>                  
The first three images have image filters on hover, gradients on text, and gradients on hover text. 
The other images have links to Google maps.

                          
                  ${react_includes}
                 
                  <script src="${common_js_include}"></script>
                  <script DEFER src="${readme_sample_grid_entry}"></script>    
                  
                 <div style='clear:both'>&nbsp;</div>
                 
                  	<pre style='background-color:#eee'>${readme_sample_grid_pre_jsx_text}</pre>
                    <pre style='background-color:#ddd'>${readme_sample_grid_pre_js}</pre>
                    <pre style='background-color:#ccc'>${readme_sample_grid_pre_page_text}</pre>
                  
                  
               </body>
          </html>`
        var tiny_minified = jsx_chunks.minify_html(readme_sample_grid_html, process.env.NODE_ENV)
        res.send(tiny_minified)
    })
}
