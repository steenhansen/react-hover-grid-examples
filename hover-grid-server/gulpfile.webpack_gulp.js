'use strict'

// gulp webpack_gulp

const gulp = require('gulp')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const moment = require('moment')
const path = require('path')
const start_text_color = 'bgGreen'
let uglify = require('gulp-uglify-es').default


function webpack_gulp_1 (cb) {
  const webpack = require('webpack')
  const webpackConfiguration = require('./webpack.config.js')
  const compiler = webpack(webpackConfiguration)
  const webpack_text = '4 webpack_gulp ---- '
  compiler.run((err_ignored, stats_ignored) => {
    console.log(gutil.colors[start_text_color](webpack_text))
    const hh_mm_ss = moment().format('hh:mm:ss')
    console.log(gutil.colors[start_text_color](webpack_text + hh_mm_ss))
   cb()
  })
}

function webpack_gulp_2 (cb) {
  if (process.env.NODE_ENV ==='development'){
    cb()
  }else {
    const commons_dest = path.resolve(__dirname + '/../public/')
    const commons_source = commons_dest + '/commons.*.js'
    return gulp.src(commons_source)
      .pipe(uglify())
      .pipe(gulp.dest(commons_dest))
      .pipe(debug({title: 'public commons.*.js compression :'}))
  }
}

gulp.task('webpack_gulp', gulp.series(webpack_gulp_1, webpack_gulp_2))
