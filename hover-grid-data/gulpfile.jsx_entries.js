'use strict'

// gulp jsx_entries

const gulp = require('gulp')

const babel = require('gulp-babel')
const gutil = require('gulp-util')
const debug = require('gulp-debug')
const moment = require('moment')
let unassert = require('gulp-unassert')
const env = require('node-env-file')

const error_text_color = 'bgRed'
const start_text_color = 'bgGreen'
const jsx_text = '2 jsx_entries JSX ---- '

function handleError (level, error) {
  console.log(gutil.colors[error_text_color](error.message))
  process.exit(1)
}

env('./.env')  // N.B. This defines process.env.NODE_ENV

function onError (error) { handleError.call(this, 'error', error) }

function jsx_to_js_1 () {
  const jsx_source = __dirname + '/entry-points/*.jsx'
  const js_dest = __dirname + '/entry-points/'
  return gulp.src(jsx_source)
          .on('error', onError)
          .pipe(babel({presets: ['es2015', 'stage-2']}))
          .pipe(gulp.dest(js_dest))
          .pipe(debug({title: 'jsx_entries jsx:'}))
}

function remove_asserts_2 () {
  const jsx_source = __dirname + '/entry-points/*.js'
  const js_dest = __dirname + '/entry-points/'
  if (process.env.NODE_ENV === 'development') {
    unassert = require('gulp-empty-pipe')
  }
  return gulp.src(jsx_source)
          .on('error', onError)
          .pipe(unassert())
          .pipe(gulp.dest(js_dest))
          .pipe(debug({title: 'jsx_entries unAssert:'}))
}

function fini_message_3 (cb) {
  const hh_mm_ss = moment().format('hh:mm:ss')
  console.log(gutil.colors[start_text_color](jsx_text + hh_mm_ss))
  cb()
}

gulp.task('jsx_entries', gulp.series(jsx_to_js_1, remove_asserts_2, fini_message_3))
