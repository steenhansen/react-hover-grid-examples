'use strict'

const path = require('path')

const jsonPromise = require('jsonfile-promised')
const fsPromise = require('fs-promise')
const kangax_minify = require('html-minifier').minify

const WEBPACK_CHUNKS = path.resolve(__dirname + '/../hover-grid-server/webpack_js_chunks.json')

/*
 N.B. kangax_minify cannot handle "minifyCSS: true" with the bl

 This css gets the kibosh and turns into a '&quote'
 '"Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial; cursive'
 */

function minify_html (html_text, node_env) {
  if (node_env === 'development') {
    return html_text
  } else {
    var minified_html = kangax_minify(html_text, {
      removeAttributeQuotes: true
      , collapseWhitespace: true
      , conservativeCollapse: true
      , minifyJS: true
      , removeComments: true
    })
    return minified_html
  }
}

function minify_css (css_text, node_env) {
  if (node_env === 'development') {
    return css_text
  } else {
    var minified_css = kangax_minify(css_text, {
      minifyCSS: true
      , collapseWhitespace: true
      , removeComments: true
    })
    return minified_css
  }
}

function chunkhashEntry (bundle_name, req) {
  const host_url = req.headers.host
  return jsonPromise.readFile(WEBPACK_CHUNKS)
      .then(js_file_parts => {
      const js_bundle = js_file_parts[bundle_name]['js']
      const chunkhash_url = '//' + host_url + '/' + js_bundle
      return chunkhash_url
    }
).
  catch(err => console.error(err + ' ' + bundle_name + ' in webpack_js_chunks.json as it is missing from webpack.config.js')
)
}

function readResourceFile (resource_path) {
  const file_contents = fsPromise.readFile(resource_path, 'utf8')
  return file_contents
}

function readEntryJsx (grid_1_data) {
  const file_contents = fsPromise.readFile('hover-grid-data/entry-points/' + grid_1_data, 'utf8')
  return file_contents
}

function html2Text (a_string_1) {
  const a_string_2 = a_string_1.replace(/</g, '&lt;')
  const a_string_3 = a_string_2.replace(/>/g, '&gt;')
  return a_string_3
}

function gmapJsIncludes (node_env, req) {
  if (node_env === 'development') {
    const host_url = req.headers.host
    var common_js = ` <script src="//${host_url}/develop-js/browser-polyfill.js"></script>   
                          <script src="//${host_url}/develop-js/react.js"></script>
	                        <script src="//${host_url}/develop-js/react-dom.js"></script>	`
  } else {
    var common_js = ` <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>   
                          <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js"></script>
	                        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js"></script>	`
  }
  return common_js
}

function expectInvalidChecksum (node_env) {
  let invalid_checksum = ''
  if (node_env === 'development') {
    invalid_checksum = `<script>
                          console.warn('If using server_screen_size then expect invaid checksum as server and browser are completely different')
                       </script>`
  }
  return invalid_checksum
}

function alwaysShowVerticalScrollbar () {
  const always_show_vert_scroll = `<style> html { overflow-y: scroll; height: 101%; } </style>`
  return always_show_vert_scroll
}

function circle_menu (current_grid, node_env) {
  current_grid = current_grid + '_circle'
  const menu_css = `
<style>
#circle-menu {
    margin: 0;
    padding: 0px 0px 11px 0px;
    font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial;
    z-index:333;
    position:absolute;
    display:none;
    font-size: 15px;
}

#circle-menu li {
    display: block;
    margin: 0;
    box-sizing: border-box;
    text-align:center;
    line-height:18px;
}

#circle-menu li a {
  color:red;
  text-decoration:none; 
}
  
#circle-menu li a:hover {
    color:black;
    text-decoration: underline;
}

#circle-menu li#${current_grid} a {
  color:black;
   font-weight:bold;
   cursor:default;

}
#circle-menu li#${current_grid} a:hover {
  text-decoration:none; 
}
</style>
`
  const compressed_css = minify_css (menu_css, node_env) 
  const menu_html = `
    <ul id="circle-menu">
      <li id="show_all_grid_circle"><a href="/">Home</a></li>
      <li id="resizable_splitter_grid_circle"><a href="resizable-splitter">Re-Sizable</a></li>
      <li id="shrink_grow_grid_circle"><a href="shrink-grow">Shrink&amp;Grow</a></li>
      <li id="npm_example_grid_circle"><a href="npm-example">NPM&nbsp;Example</a></li>
      <li id="readme_sample_grid"><a href="readme-sample">Readme Sample</a></li>
      <li id="srr_no_js_grid_circle"><a href="ssr-no-js">No&nbsp;Js&nbsp;SSR</a></li>
      <li id="ssr_with_js_grid_circle"><a href="ssr-with-js">Js&nbsp;SSR</a></li>
      <li id="circle_clip_grid_circle"><a href="circle-clip">Circles</a></li>
    </ul>
    
`
  const compressed_html = minify_html (menu_html, node_env) 
  const compressed_menu = compressed_css + compressed_html
  return compressed_menu
}

function grid_menu (current_grid, node_env) {
  const number_spaces = 8 + 1
  const li_width = 100 / number_spaces
  const menu_css = `
<style>
#grid-menu {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial;
}

#grid-menu li {
                            float: left;
                             width: ${li_width}%;
    display: block;
    margin: 0;
    background-color: #eee;
    padding: 10px;
    box-sizing: border-box;
}

#grid-menu li a {
  color:dimgray;
  text-decoration:none; 
}
  
#grid-menu li a:hover {
    color:black;
    text-decoration: underline;
}

#grid-menu li#${current_grid} a {
  color:black;
   font-weight:bold;
   cursor:default;

}
#grid-menu li#${current_grid} a:hover {
  text-decoration:none; 
}
</style>`

  const compressed_css = minify_css (menu_css, node_env) 

  const menu_html= `
   <ul id="grid-menu">
      <li id="show_all_grid"><a href="/">Home</a></li>
      <li id="resizable_splitter_grid"><a href="resizable-splitter">Re-Sizable</a></li>
      <li id="shrink_grow_grid"><a href="shrink-grow">Shrink &amp; Grow</a></li>
      <li id="npm_example_grid"><a href="npm-example">NPM Example</a></li>
      <li id="readme_sample_grid"><a href="readme-sample">Readme Sample</a></li>
      <li id="srr_no_js_grid"><a href="ssr-no-js">No Js SSR</a></li>
      <li id="ssr_with_js_grid"><a href="ssr-with-js">Js SSR</a></li>
      <li id="circle_clip_grid"><a href="circle-clip">Circles</a></li>
    </ul>
`
  const compressed_html = minify_html (menu_html, node_env) 
  const compressed_menu = compressed_css + compressed_html
  return compressed_menu

}

module.exports = {
  minify_html: minify_html
  , chunkhashEntry: chunkhashEntry
  , readResourceFile: readResourceFile
  , readEntryJsx: readEntryJsx
  , html2Text: html2Text
  , gmapJsIncludes: gmapJsIncludes
  , expectInvalidChecksum: expectInvalidChecksum
  , alwaysShowVerticalScrollbar: alwaysShowVerticalScrollbar
  , circle_menu: circle_menu
  , grid_menu: grid_menu
}
