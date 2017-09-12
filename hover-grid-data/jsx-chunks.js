'use strict'

const path = require('path')

const jsonPromise = require('jsonfile-promised')
const fsPromise = require('fs-promise')
const kangax_minify = require('html-minifier').minify

const WEBPACK_CHUNKS = path.resolve(__dirname + '/../hover-grid-server/webpack_js_chunks.json')

/*
 N.B. kangax_minify cannot handle "minifyCSS: true"

 This css gets the kibosh and turns into a '&quote'
 '"Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial; cursive'

 */

function minify_html(html_text, node_env){
    if (node_env === 'development') {
        return html_text
    }else {
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


function chunkhashEntry(bundle_name, req) {
    const host_url = req.headers.host

    return jsonPromise.readFile(WEBPACK_CHUNKS)
        .then(js_file_parts => {
          const js_bundle = js_file_parts[bundle_name]['js']
          const chunkhash_url = '//' + host_url + '/' + js_bundle
          return chunkhash_url
      }).catch(err => console.error(err + ' ' + bundle_name +' in webpack_js_chunks.json as it is missing from webpack.config.js')


    

)
}

function readResourceFile(resource_path) {
    const file_contents = fsPromise.readFile(resource_path, 'utf8')
    return file_contents
}

function readEntryJsx(grid_1_data) {
    const file_contents = fsPromise.readFile('hover-grid-data/entry-points/' + grid_1_data, 'utf8')
    return file_contents
}

function html2Text(a_string_1) {
    const a_string_2 = a_string_1.replace(/</g, '&lt;')
    const a_string_3 = a_string_2.replace(/>/g, '&gt;')
    return a_string_3
}

function gmapJsIncludes(node_env) {
    if (node_env === 'development') {
        var common_js = ` <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.js"></script>   
                      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
	                  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>	`
    } else {
        var common_js = ` <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"></script>   
                      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.min.js"></script>
	                  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.min.js"></script>	`
    }
    return common_js
}

function expectInvalidChecksum(node_env) {
    let invalid_checksum = ''
    if (node_env === 'development') {
        invalid_checksum = `<script>
                          console.warn('If using server_screen_size then expect invaid checksum as server and browser are completely different')
                       </script>`
    }
    return invalid_checksum
}

function alwaysShowVerticalScrollbar() {
    const always_show_vert_scroll = `<style> html { overflow-y: scroll; height: 101%; } </style>`
    return always_show_vert_scroll
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
}
