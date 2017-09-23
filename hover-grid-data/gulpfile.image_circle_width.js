'use strict'

// gulp image_circle_width

var gm = require('gulp-gm')
var rename = require("gulp-rename2")
const gulp = require('gulp')
const fs = require('fs')
const gutil = require('gulp-util')
const path = require('path')
const error_text_color = 'bgRed'
const start_text_color = 'bgGreen'
const moment = require('moment')
const merge = require('merge-stream')
var del = require('del')
var vinylPaths = require('vinyl-paths')


const jsx_text = ' IMAGE CIRCLE WIDTH ---- '

const HTML_DIR = 'public'
const IMAGES_DIR = 'hover-grid-images'
const HTML_IMAGES = '/' + HTML_DIR + '/' + IMAGES_DIR + '/'

const CIRCLE_IMAGE_DIR = path.resolve(__dirname + '/..') + HTML_IMAGES +'circle_clip_grid_images/'


function clear_circles_1() {
  console.log(gutil.colors[start_text_color](jsx_text))
   const work_folders = [CIRCLE_IMAGE_DIR + 'circle_2_enlarge/*.png'
                        ,CIRCLE_IMAGE_DIR + 'circle_3_frame/*.png'
                        ,CIRCLE_IMAGE_DIR + '/*.png']
  let tasks = work_folders.map(function (work_folder) {
    return gulp.src(work_folder)
      .pipe(vinylPaths(del))
  })
  return merge(tasks)
}

function enlarge_circles_2 () {
  const circle_1_start = path.join(CIRCLE_IMAGE_DIR, 'circle_1_start') + '/*.png'
  const circle_2_enlarge = path.join(CIRCLE_IMAGE_DIR, 'circle_2_enlarge', '/' )
  return gulp.src(circle_1_start)
    .pipe(gm(function (gmfile) {
      var space_for_frame = gmfile.resize(156, 156)
      return space_for_frame
    }))
   .pipe(gulp.dest(circle_2_enlarge))
}

function getFiles (dir) {
  return fs.readdirSync(dir)
    .filter(function (file) {
      if (fs.statSync(path.join(dir, file)).isDirectory()) {
          return false
      } else {
        return true
      }
    })
}

function add_frame_3 () {
  const circle_2_enlarge = CIRCLE_IMAGE_DIR +'circle_2_enlarge'
  var wide_files = getFiles(circle_2_enlarge)
  const grey_frame = CIRCLE_IMAGE_DIR + 'circle_images/grey_frame.png'
  const circle_3_frame = CIRCLE_IMAGE_DIR + 'circle_3_frame/'
  let tasks = wide_files.map(function (the_image) {
    var image_path = circle_2_enlarge +'/'+the_image
      return gulp.src(grey_frame)
            .pipe(gm(function (gmfile) {
                       var on_top_of_grey= gmfile.composite(image_path)
                       return on_top_of_grey
                      }))
            .pipe(rename(function (pathObj, filePath) {
                           var new_path = pathObj.join(  pathObj.dirname(filePath), the_image )
                           return new_path
                        }))
   .pipe(gulp.dest(circle_3_frame))
  })
  return merge(tasks)
}

function widden_frame_4 () {
  const circle_3_frame = CIRCLE_IMAGE_DIR +'circle_3_frame'
  var framed_files = getFiles(circle_3_frame)
  const blank_rect = CIRCLE_IMAGE_DIR + 'circle_images/blank_rect.png'
  let tasks = framed_files.map(function (the_image) {
    var image_path = circle_3_frame +'/'+the_image
      return gulp.src(blank_rect)
            .pipe(gm(function (gmfile) {
                   var on_top_of_grey= gmfile.composite(image_path).geometry('+25+0')
                       return on_top_of_grey
                      }))
            .pipe(rename(function (pathObj, filePath) {
                           var new_path = pathObj.join(  pathObj.dirname(filePath), the_image )
                           return new_path
                        }))
   .pipe(gulp.dest(CIRCLE_IMAGE_DIR))
  })
  return merge(tasks)
}

function fini_message_5 (cb) {
  var hh_mm_ss = moment().format('hh:mm:ss')
  console.log(gutil.colors[start_text_color](jsx_text + hh_mm_ss))
  cb()
}

gulp.task('image_circle_width', gulp.series(
    clear_circles_1
  , enlarge_circles_2
  , add_frame_3
  , widden_frame_4
  , fini_message_5
))


