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

  express_server.get('/', function (req, res) {
    require('./grid_pages/all_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/city_grid', function (req, res) {
    require('./grid_pages/city_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/mountains_grid', function (req, res) {
    require('./grid_pages/mountains_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/sizeable_grid', function (req, res) {
    require('./grid_pages/sizeable_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/fast_grid', function (req, res) {
    require('./grid_pages/fast_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/tiny_grid', function (req, res) {
    require('./grid_pages/tiny_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
  })

  express_server.get('/ssr-no-js', function (req, res) {
    require('./grid_pages/ssr_no_js_grid_page')(req, res, HTML_DIR, IMAGES_DIR)
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
