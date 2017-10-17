'use strict'

const path = require('path')
let jsx_chunks = require('../../hover-grid-data/jsx-chunks.js')
let ssr_with_js_grid_pieces = require('../../hover-grid-data/ssr_with_js_grid_pieces.js')

const circle_clip_grid_data = require('../../hover-grid-data/grid-data/circle_clip_grid_data.js')

module.exports = function (req, res, HTML_DIR, IMAGES_DIR) {
  const {ssr_with_js_grid_html, ssr_with_js_grid_json, ssr_with_js_grid_css, ssr_with_js_grid_entry} = ssr_with_js_grid_pieces.start_ssr_info(req, HTML_DIR, IMAGES_DIR)
  let circle_clip_grid_entry = jsx_chunks.chunkhashEntry('circle_clip_grid_entry', req)
  let npm_example_grid_entry = jsx_chunks.chunkhashEntry('npm_example_grid_entry', req)
  let resizable_splitter_grid_entry = jsx_chunks.chunkhashEntry('resizable_splitter_grid_entry', req)
  let shrink_grow_grid_entry = jsx_chunks.chunkhashEntry('shrink_grow_grid_entry', req)
  let common_js_include = jsx_chunks.chunkhashEntry('commons', req)
  const show_all_grid_page = path.resolve(__dirname + '/show_all_grid_page.js')
  let show_all_grid_pre_page = jsx_chunks.readResourceFile(show_all_grid_page)
  let events_promises = [circle_clip_grid_entry
    , ssr_with_js_grid_entry
    , ssr_with_js_grid_css
    , npm_example_grid_entry
    , resizable_splitter_grid_entry
    , shrink_grow_grid_entry
    , common_js_include
    , show_all_grid_pre_page]
  return Promise.all(events_promises)
      .then(([circle_clip_grid_entry
        , ssr_with_js_grid_entry
        , ssr_with_js_grid_css
        , npm_example_grid_entry
        , resizable_splitter_grid_entry
        , shrink_grow_grid_entry
        , common_js_include
        , show_all_grid_pre_page]) => {
      const always_show_vert_scroll = jsx_chunks.alwaysShowVerticalScrollbar()
      let invalid_checksum = jsx_chunks.expectInvalidChecksum(process.env.NODE_ENV)
      const show_all_grid_pre_page_text = jsx_chunks.html2Text(show_all_grid_pre_page)
      const menu_html = jsx_chunks.grid_menu('show_all_grid', process.env.NODE_ENV)
      const circle_menu = jsx_chunks.circle_menu('show_all_grid', process.env.NODE_ENV)
      const react_includes = jsx_chunks.gmapJsIncludes(process.env.NODE_ENV, req)


      const onResize = circle_clip_grid_data.onResize
      const circleIntervalMenu = circle_clip_grid_data.circleIntervalMenu

      const fast_html = `
        <!doctype html>
          <html lang="en-US">
            <head>
              <title>React Hover Grid</title>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/> 
              ${always_show_vert_scroll}
              <style>${ssr_with_js_grid_css}</style>
            </head>
           <body  style=' background-image: url("sq.png");' >


<style>
/*
      www.OnlineWebFonts.Com 
      You must credit the author Copy this link on your web 
      <div>Font made from <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>is licensed by CC BY 3.0</div>
      OR
      <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>


      https://db.onlinewebfonts.com/c/99f44be299d4608af6fbe99aa38ce446?family=HarmoniaSansW01-Bold
      does not use https, thus we get 'insecure font', below fixes that

*/
@font-face {font-family: "HarmoniaSansW01-Bold";
    src: url("https://db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.eot"); /* IE9*/
    src: url("https://db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
    url("https://db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.woff2") format("woff2"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.woff") format("woff"), /* chrome firefox */
    url("https://db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.ttf") format("truetype"), /* chrome firefox opera Safari, Android, iOS 4.2+*/
    url("https://db.onlinewebfonts.com/t/99f44be299d4608af6fbe99aa38ce446.svg#HarmoniaSansW01-Bold") format("svg"); /* iOS 4.1- */
}
</style>


              ${menu_html}
              ${circle_menu}
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
              
               <div id='circle_clip_grid_id' style='width:100%;'>&nbsp;</div>
               
        <div style='clear:both'>&nbsp;</div>
        
             <div id='shrink_grow_grid_id' style='width:100px; margin:0 auto; '>&nbsp;</div>

  <div style='clear:both'>&nbsp;</div>
      
                 <link href="splitter_style.css" rel="stylesheet">
            <div id='resizable_splitter_grid_id' style='width:100px; margin:0 auto 500px auto; '>&nbsp;</div>
        
     
        
        <div style='clear:both'>&nbsp;</div>     
             <pre style='background-color:#eee'>${show_all_grid_pre_page_text}</pre>
        ${react_includes}
        <script src="${common_js_include}"></script>
          <script DEFER src="${circle_clip_grid_entry}">GLOBAL_WEBPACK["circle_clip_grid_entry"].circleIntervalMenu()</script> 
        <script DEFER src="${ssr_with_js_grid_entry}"></script>    
        <script DEFER src="${npm_example_grid_entry}"></script>    
        <script DEFER src="${resizable_splitter_grid_entry}"></script>  
        <script DEFER src="${shrink_grow_grid_entry}"></script>      
        
<script>
 function globalReadyRun(global_var, module_name, func_name, global_wait_sec){
    function runGlobalRoutine() {
      try {
        var global_function = window[global_var][module_name][func_name]
        global_function(global_wait_sec)
      }catch(e){
          setTimeout(runGlobalRoutine, global_wait_sec);
      }
    }
    runGlobalRoutine()
 }

globalReadyRun('GLOBAL_WEBPACK', 'circle_clip_grid_entry', 'circleIntervalMenu', 100 );
</script>
        

      </body>
    </html>`
      res.flushHeaders()
  var rest_minified = jsx_chunks.minify_html(fast_html, process.env.NODE_ENV)
  res.end(rest_minified)
})
}
