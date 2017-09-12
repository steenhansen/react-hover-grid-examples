'use strict'

// webpack --progress --colors --watch

// gulp webpack_gulp

const path = require('path')
const env = require('node-env-file')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')

const WebpackCleanupPlugin = require('webpack-cleanup-plugin')

const MAX_BYTES_INLINE_IMAGE_SIZE = 8192

env('./.env')  // N.B. This defines process.env.NODE_ENV

const jsx_transpile_loader = {
  test: /\.jsx$/
  , exclude: /node_modules/
  , loader: 'babel-loader'
}

const inline_css_loader = {
  test: /\.css$/
  , loader: 'style-loader!css-loader'
}

const inline_images_loader = {
  test: /\.(png|jpg)$/
  , loader: `url-loader?limit=${MAX_BYTES_INLINE_IMAGE_SIZE}`
}

const jsx_entries = {
   ssr_with_js_grid_entry: '../hover-grid-data/entry-points/ssr_with_js_grid_entry.jsx'
  , shrink_grow_grid_entry: '../hover-grid-data/entry-points/shrink_grow_grid_entry.jsx'
  , resizable_splitter_grid_entry: '../hover-grid-data/entry-points/resizable_splitter_grid_entry.jsx'
  , npm_example_grid_entry: '../hover-grid-data/entry-points/npm_example_grid_entry.jsx'
}

const js_vars_and_files = {
  libraryTarget: 'var'
  , library: ['GLOBAL_WEBPACK', '[name]']
  , path: path.join(__dirname, '../public')
  , filename: '[name].[chunkhash].js'
  , chunkFilename: '[chunkhash].js'
}

const react_cdns = {
  'react': 'React'
  ,'react-dom': 'ReactDOM'
  ,'react-dom/server': 'ReactDOMServer'
}

const js_chunks_location_plugin = new AssetsPlugin({filename: './hover-grid-server/webpack_js_chunks.json'})

const node_env_plugin = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }
})

const js_chunks_hashed_plugin = new webpack.optimize.CommonsChunkPlugin({
  name: 'commons'
  , filename: '[name].[chunkhash].js'
  ,chunkFilename: '[chunkhash].js'
})

const do_cleanup_plugin = new WebpackCleanupPlugin({exclude: ['**/*.jpg'
                                                             , '**/*.png'
                                                             , '**/*.gif'
                                                            , '**/*.css'
                                                            , '*.ico']})
module.exports = {
  context: path.resolve(__dirname, './')
  ,module: {loaders: [jsx_transpile_loader
                    , inline_css_loader
                    , inline_images_loader]}
  ,entry: jsx_entries
  ,output: js_vars_and_files
  ,externals: react_cdns
  ,plugins: [js_chunks_location_plugin
    , node_env_plugin
    , js_chunks_hashed_plugin
    , do_cleanup_plugin
  ]
}
