'use strict'

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')
let ssr_with_js_grid_pieces = require('../../hover-grid-data/ssr_with_js_grid_pieces.js')

module.exports = function (req, res, HTML_DIR, IMAGES_DIR) {
  let invalid_checksum = jsx_chunks.expectInvalidChecksum(process.env.NODE_ENV)
  const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV, req)
  const {ssr_with_js_grid_html, ssr_with_js_grid_json, ssr_with_js_grid_css, ssr_with_js_grid_entry, ssr_onResize} = ssr_with_js_grid_pieces.start_ssr_info(req, HTML_DIR, IMAGES_DIR)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)

  let ssr_with_js_grid_pre_ssr = jsx_chunks.readEntryJsx('ssr_with_js_grid_entry_ssr.jsx')
  let ssr_with_js_grid_pre_jsx = jsx_chunks.readEntryJsx('ssr_with_js_grid_entry.jsx')
  const ssr_with_js_grid_path = path.resolve(__dirname + '/../../hover-grid-data/grid-data/ssr_with_js_grid_data.js')
  let ssr_with_js_grid_pre_js = jsx_chunks.readResourceFile(ssr_with_js_grid_path)
  const ssr_with_js_grid_page = path.resolve(__dirname + '/ssr_with_js_grid_page.js')
  let ssr_with_js_grid_pre_page = jsx_chunks.readResourceFile(ssr_with_js_grid_page)
  const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
  let events_promises = [ssr_with_js_grid_entry
    , ssr_with_js_grid_css
    , common_js_include
    , ssr_with_js_grid_pre_ssr
    , ssr_with_js_grid_pre_jsx
    , ssr_with_js_grid_pre_js
    , ssr_with_js_grid_pre_page]
  return Promise.all(events_promises)
      .then(([ssr_with_js_grid_entry
        , ssr_with_js_grid_css
        , common_js_include
        , ssr_with_js_grid_pre_ssr
        , ssr_with_js_grid_pre_jsx
        , ssr_with_js_grid_pre_js
        , ssr_with_js_grid_pre_page]) => {
      const ssr_with_js_grid_pre_ssr_text = jsx_chunks.html2Text(ssr_with_js_grid_pre_ssr)
      const ssr_with_js_grid_pre_jsx_text = jsx_chunks.html2Text(ssr_with_js_grid_pre_jsx)
      const ssr_with_js_grid_pre_page_text = jsx_chunks.html2Text(ssr_with_js_grid_pre_page)
      const menu_html = jsx_chunks.grid_menu('ssr_with_js_grid', process.env.NODE_ENV)


      const fast_html = `
        <!doctype html>
          <html lang="en-US">
           <head>
            <title>Js SSR</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
            ${always_show_vert_scroll}
              <style>${ssr_with_js_grid_css}</style>
            </head>
            <body>
                ${menu_html}

   <div style="clear:both">
                    Change the width of the browser to see the React-Hover-Grids resize and adjust the images.
 The <a href="https://www.npmjs.com/package/react-hover-grid">NPM package</a> has more information.
 </div>

                    ${invalid_checksum}

                   <script>
                         window._HOVER_TILES ={}
                         window._HOVER_TILES.ssr_with_js_grid_json=${ssr_with_js_grid_json}
                         window._HOVER_TILES.ssr_with_js_grid_json.onResize=${ssr_onResize}
                      </script>

               <div style="background-color:#eee; padding:20px;">
                      <div style="overflow:hidden">
                        <div id='s'
                         style='width:100%;'>${ssr_with_js_grid_html}</div><!-- id='s_grid_id' -->
                      </div>
               </div>  
               
<div id='no-js-yet' style='background-color:#f00;'>Viewing server side rendered grid with media queries, as JavaScript has not run yet.</div>
<div id='js-has-run' style='background-color:#0f0; display:none;'>Javascript loaded, viewing local React generated component.</div>

                <br>          
This React Hover Grid is generated isomorphically, but re-rendered in the browser once Javascript is loaded for smooth resizing.<br><br>             
- the variable window._HOVER_TILES is used to transfer grid data from the server to the browser with a possible random ordering<br><br>
- The console message of "Warning: React attempted to reuse markup in a container but the checksum was invalid." is displayed when 
  in development mode since the server does not know how wide to draw the grid until it is rendered in the browser<br><br>
- Server Side Rendering is accomplished via media queries choosing the best match out of many possible choices

 
               
                        ${react_includes}
                  <script src="${common_js_include}"></script>
                    <script DEFER src="${ssr_with_js_grid_entry}"></script>     
       
       
          <div style='clear:both'>&nbsp;</div>
                  <pre style="background-color:#eee">${ssr_with_js_grid_pre_ssr_text}</pre>
                  <pre style="background-color:#ddd">${ssr_with_js_grid_pre_jsx_text}</pre>
                  <pre style="background-color:#ccc">${ssr_with_js_grid_pre_js}</pre>
                   <pre style='background-color:#bbbb'>${ssr_with_js_grid_pre_page_text}</pre>
                  
               </body>
            </html>`
  var rest_minified = jsx_chunks.minify_html(fast_html, process.env.NODE_ENV)
    res.send(rest_minified)
})
}
