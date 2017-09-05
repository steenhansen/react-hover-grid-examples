'use strict'

let jsx_chunks = require('../hover-grid-data/jsx-chunks.js')
const splitter_style = require('./splitter_style_css.js')
let fast_grid_srr = require('../hover-grid-data/fast_grid_ssr.js')

module.exports = function (req, res, HTML_DIR, IMAGES_DIR) {
  let invalid_checksum = jsx_chunks.expectInvalidChecksum(process.env.NODE_ENV)
  const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV)
  const {fast_grid_html, fast_grid_json, fast_grid_css, fast_grid_entry} = fast_grid_srr.start_ssr_info(req, HTML_DIR, IMAGES_DIR)



  let city_grid_entry = jsx_chunks.chunkhashEntry('city_grid_entry', req)
  let sizeable_grid_entry = jsx_chunks.chunkhashEntry('sizeable_grid_entry', req)


  let mountains_grid_entry = jsx_chunks.chunkhashEntry('mountains_grid_entry', req)


  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
  let events_promises = [fast_grid_entry, fast_grid_css, city_grid_entry, sizeable_grid_entry, mountains_grid_entry, common_js_include]
  return Promise.all(events_promises)
                  .then(([fast_grid_entry, fast_grid_css, city_grid_entry, sizeable_grid_entry, mountains_grid_entry, common_js_include ]) => {


            const fast_grid_peice = `
        <!doctype html>
          <html lang="en-US">
            <title>Hover Grid</title>
            ${always_show_vert_scroll}
            ${splitter_style.splitter_css}
            <style>${fast_grid_css}</style>
            <body>
                    ${invalid_checksum}
                  
                  <script>
                         window._HOVER_TILES ={}
                         window._HOVER_TILES.fast_grid_json=${fast_grid_json}
                      </script>
                      
               <div style="background-color:yellow;
                            margin-left:50px;
                            margin-right:50px;">
                    header 90%
                    <div style=" background-color:gray;"> 
                      <div style="margin-left:50px; margin-right:50px; background-color:blue; overflow:hidden">
                        <div
                         id='s'
                         style='width:100%;'>${fast_grid_html}</div><!-- id='s_grid_id' -->
                      </div>
                    </div>
                    footer 90%
               </div>  
               <a href="/fast_grid">Fast grid with code</a>
               <a href="/fast_grid">Fast grid with code</a>
               
                 
              
                 `
            res.setHeader('Content-Type', 'text/HTML')
  res.write(fast_grid_peice)
  res.flushHeaders()     // N.B. for compression
  const rest_browser_peices = `


 <div style='clear:both'>&nbsp;</div>
 
                    <div id='mountains_grid_id' style='width:100px; margin:0 auto; '>&nbsp;</div>
 
 <div style='clear:both'>&nbsp;</div>
 
   <div  style="background-color:purple;
                            margin-left:50px;
                            margin-right:50px;">
                    header 90%
                    <div style=" background-color:gray;"> 
                      <div style="margin-left:50px; margin-right:50px; background-color:pink; overflow:hidden">
                         <div id='city_grid_id' style='width:100%;'>&nbsp;</div>
                      </div>
                    </div>
                    footer 90%
               </div>  
               
               
               
               
                 <div style='clear:both'>&nbsp;</div>
                        <div id='sizeable_grid_id' style='width:100px; margin:0 auto; '>&nbsp;</div>
                  ${react_includes}
                  <script src="${common_js_include}"></script>
            
                    <script DEFER src="${fast_grid_entry}"></script>    
                    <script DEFER src="${city_grid_entry}"></script>    
                  
                    <script DEFER src="${sizeable_grid_entry}"></script>  
                                
                    <script DEFER src="${mountains_grid_entry}"></script>      
               </body>
            </html>`
  res.flushHeaders()     // N.B. for compression
  res.end(rest_browser_peices)
})
}
