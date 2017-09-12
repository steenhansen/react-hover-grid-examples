'use strict'

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')
let ssr_with_js_grid_pieces = require('../../hover-grid-data/ssr_with_js_grid_pieces.js')
const browser_helpers = require('../../hover-grid-data/browser_helpers.js')

module.exports = function (req, res, HTML_DIR, IMAGES_DIR) {
  const {ssr_with_js_grid_html, ssr_with_js_grid_json, ssr_with_js_grid_css, ssr_with_js_grid_entry} = ssr_with_js_grid_pieces.start_ssr_info(req, HTML_DIR, IMAGES_DIR)
  let npm_example_grid_entry = jsx_chunks.chunkhashEntry('npm_example_grid_entry', req)
  let resizable_splitter_grid_entry = jsx_chunks.chunkhashEntry('resizable_splitter_grid_entry', req)
  let shrink_grow_grid_entry = jsx_chunks.chunkhashEntry('shrink_grow_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  const show_all_grid_page = path.resolve(__dirname + '/show_all_grid_page.js')
  let show_all_grid_pre_page = jsx_chunks.readResourceFile(show_all_grid_page)
  let events_promises = [ssr_with_js_grid_entry
                       ,ssr_with_js_grid_css
                       ,npm_example_grid_entry
                       ,resizable_splitter_grid_entry
                       ,shrink_grow_grid_entry
                       ,common_js_include
                       ,show_all_grid_pre_page]
  return Promise.all(events_promises)
      .then(([ssr_with_js_grid_entry
             ,ssr_with_js_grid_css
             ,npm_example_grid_entry
             ,resizable_splitter_grid_entry
             ,shrink_grow_grid_entry
             ,common_js_include
             ,show_all_grid_pre_page]) => {
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      let invalid_checksum = jsx_chunks.expectInvalidChecksum(process.env.NODE_ENV)
      const show_all_grid_pre_page_text = jsx_chunks.html2Text(show_all_grid_pre_page)
      const menu_html = browser_helpers.grid_menu('show_all_grid')
      const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV)
      const fast_html = `
        <!doctype html>
          <html lang="en-US">
            <head>
              <title>React Hover Grid</title>
              ${always_show_vert_scroll}
              <style>${ssr_with_js_grid_css}</style>
            </head>
            <body>
              ${menu_html}
              ${invalid_checksum}
              <script>   window._HOVER_TILES ={}
                         window._HOVER_TILES.ssr_with_js_grid_json=${ssr_with_js_grid_json}  </script>
                      
              <div style="background-color:#eee; padding:20px;">
                      <div style="overflow:hidden">
                    <div id='s' style='width:100%;'>${ssr_with_js_grid_html}</div><!-- id='s_grid_id' -->
                  </div>
              
              </div>  
        <div style='clear:both'>&nbsp;</div>
            <div id='npm_example_grid_id' style='width:100%;'>&nbsp;</div>
        <div style='clear:both'>&nbsp;</div>
            <link href="splitter_style.css" rel="stylesheet">
            <div id='resizable_splitter_grid_id' style='width:100px; margin:0 auto 500px auto; '>&nbsp;</div>
        <div style='clear:both'>&nbsp;</div>
             <div id='shrink_grow_grid_id' style='width:100px; margin:0 auto; '>&nbsp;</div>
        <div style='clear:both'>&nbsp;</div>     
             <pre style='background-color:#eee'>${show_all_grid_pre_page_text}</pre>
        ${react_includes}
        <script src="${common_js_include}"></script>
        <script DEFER src="${ssr_with_js_grid_entry}"></script>    
        <script DEFER src="${npm_example_grid_entry}"></script>    
        <script DEFER src="${resizable_splitter_grid_entry}"></script>  
        <script DEFER src="${shrink_grow_grid_entry}"></script>      
      </body>
    </html>`
  res.flushHeaders()    
  var rest_minified = jsx_chunks.minify_html(fast_html, process.env.NODE_ENV)
  res.end(rest_minified)
})
}
