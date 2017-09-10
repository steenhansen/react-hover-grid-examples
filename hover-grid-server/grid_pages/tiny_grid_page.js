'use strict'  // web page

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')

module.exports = function (req, res) {
  let tiny_grid_entry = jsx_chunks.chunkhashEntry('tiny_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  let tiny_grid_pre_jsx = jsx_chunks.readEntryJsx('tiny_grid_entry.jsx')
  const tiny_grid_data = path.resolve(__dirname + '/../../hover-grid-data/grid-data/tiny_grid_data.js')
  let tiny_grid_pre_js = jsx_chunks.readResourceFile(tiny_grid_data)
  const tiny_grid_page = path.resolve(__dirname + '//tiny_grid_page.js')
  let tiny_grid_pre_page = jsx_chunks.readResourceFile(tiny_grid_page)
  let events_promises = [tiny_grid_entry, common_js_include, tiny_grid_pre_jsx, tiny_grid_pre_js, tiny_grid_pre_page]
  return Promise.all(events_promises)
      .then(([tiny_grid_entry, common_js_include, tiny_grid_pre_jsx, tiny_grid_pre_js, tiny_grid_pre_page]) => {
      const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV)
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      const tiny_grid_pre_jsx_text = jsx_chunks.html2Text(tiny_grid_pre_jsx)
      const tiny_grid_pre_page_text = jsx_chunks.html2Text(tiny_grid_pre_page)
      const tiny_grid_html = `
        <!doctype html>
          <html lang="en-US">
            <title>Hover Grid</title>
            ${always_show_vert_scroll}
            <body>
          
            <br>
                  <div id='tiny_grid_id' style='width:100%;'>&nbsp;</div>
                  ${react_includes}
                  <script src="${common_js_include}"></script>
                  <script DEFER src="${tiny_grid_entry}"></script>    
                  
                 <div style='clear:both'>&nbsp;</div>
                  	<pre style='background-color:#ddd'>${tiny_grid_pre_jsx_text}</pre>
                    <pre style='background-color:#ccc'>${tiny_grid_pre_js}</pre>
                    <pre style='background-color:#bbb'>
Images 
  public/hover-grid-images/tiny_grid_images/amc_spirit.jpg
                                            canada_bernie.jpg
                                            christmas_cranes.jpg
                                            denver_nukes.jpg
                                            hello_kitty_skytrain.jpg
                                            i_like_coffee.jpg
                                            kiwi_airforce.jpg
                                            pkd_tombstone.jpg
                                            sfu_observatory.jpg
</pre>
                    <pre style='background-color:#aaa'>${tiny_grid_pre_page_text}</pre>
                  
                  
               </body>
          </html>`
      res.flushHeaders()
      var tiny_minified = jsx_chunks.minify_html(tiny_grid_html, process.env.NODE_ENV)
      res.end(tiny_minified)
})
}
