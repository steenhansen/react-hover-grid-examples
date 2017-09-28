'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var compression = require('compression')

const env = require('node-env-file')
var router = express.Router()

const HTML_DIR = 'public'
const IMAGES_DIR = 'hover-grid-images'

function logExpressErrors (e, req, res, next) {
  global.Method_logger.chronicle('error', 'express-error', module.filename, ' e.stack', e.stack)
  next(e)
}

function expressErrorHandler (e, req, res, next) {
  res.status(500)
  res.send('SERVER ERROR')
  if (false) {
    next()
  }
}

let web_server = function (public_static_files, localhost_port) {
  let express_server = express()
  env('./.env')  // N.B. This defines process.env.NODE_ENV
  const node_env = process.env.NODE_ENV
  console.log(`  Started web server on - http://localhost:${localhost_port}, node_env=${node_env}, public_folder=${public_static_files} `)

  if (node_env !== 'development') {
    express_server.use(compression())
  }

  express_server.use(express.static(public_static_files, {maxAge: '1y'}))
  express_server.use(bodyParser.urlencoded({extended: true}))
  express_server.use(bodyParser.json())
  express_server.use('/', router)
  express_server.use(logExpressErrors)
  express_server.use(expressErrorHandler)

  express_server.get('/', function (req, res) {   //  all => show_all
    require('./grid_pages/show_all_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/resizable-splitter', function (req, res) {
    require('./grid_pages/resizable_splitter_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/ssr-no-js', function (req, res) {
    require('./grid_pages/ssr_no_js_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/ssr-with-js', function (req, res) {
    require('./grid_pages/ssr_with_js_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/shrink-grow', function (req, res) {
    require('./grid_pages/shrink_grow_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/npm-example', function (req, res) {
    require('./grid_pages/npm_example_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/circle-clip', function (req, res) {
    require('./grid_pages/circle_clip_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('*', function (req, res) {
    res.redirect('/')
  })

  express_server.set('port', (process.env.PORT || localhost_port))
  var node_port = express_server.get('port')
  express_server.listen(node_port).on('error', function (e) {
    console.log(e)
    process.exit()
  })
  return express_server
}

module.exports = function (port_number) {
  return web_server('public', port_number)
}
