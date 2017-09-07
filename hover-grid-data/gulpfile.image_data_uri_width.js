'use strict'

// gulp image_data_uri_width

const gulp = require('gulp')
const fs = require('fs')
const imageDataURI = require('gulp-image-data-uri')
const responsive = require('gulp-responsive')      // https://github.com/mahnunchik/gulp-responsive
const concat = require('gulp-concat')
const path = require('path')
const gutil = require('gulp-util')
const error_text_color = 'bgRed'
const start_text_color = 'bgGreen'
const moment = require('moment')
const merge = require('merge-stream')

const tap = require('gulp-tap')

const jsx_text = '3 DATA_URI ---- '
const TILE_SIZED = 'tile_sized'
const LOW_QUALITY = 'low_quality'
const GRID_DATA = 'hover-grid-data/grid-data'
const HTML_DIR = 'public'
const IMAGES_DIR = 'hover-grid-images'
const HTML_IMAGES = '/' + HTML_DIR + '/' + IMAGES_DIR + '/'
const wildcard_image_types = ['*.png', '*.jpg']




let tile_image_widths = {}
const ALL_TILE_IMAGE_WIDTHS = 'ALL_TILE_IMAGE_WIDTHS.js'

// FROM https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-task-steps-per-folder.md
function getFolders (dir) {
  return fs.readdirSync(dir)
    .filter(function (file) {
      if (fs.statSync(path.join(dir, file)).isDirectory()) {
        const data_folder = file.replace('_images', '_data')
        const hover_grid_row_height = readGridProps(data_folder, 'hover_grid_row_height')
        if (hover_grid_row_height === 0) {
          const missing_json = 'MISSING data in /' + GRID_DATA + '/' + file + ' for' + HTML_IMAGES + file
          console.log(gutil.colors[error_text_color](missing_json))
          return false
        } else {
          return true
        }
      } else {
        return false
      }
    })
}

function readGridProps (image_folder, data_field) {
  const grid_data_file = '../' + GRID_DATA + '/' + image_folder
  console.log('grid_data_file', grid_data_file)
  try {
    const grid_props = require(grid_data_file)
    return grid_props[data_field]
  } catch (e) {
    return 0
  }
}

function getPublicImages () {
  const pubilic_image_dir = path.resolve(__dirname + '/..')
  const images_src = pubilic_image_dir + HTML_IMAGES
  return images_src
}

function resize_original_to_tile_size_1 () {
  console.log(gutil.colors[start_text_color](jsx_text))
  const images_src = getPublicImages()
  const image_folders = getFolders(images_src)
  let tasks = image_folders.map(function (image_folder) {
    const data_folder = image_folder.replace('_images', '_data')
    const tile_grid_height = readGridProps(data_folder, 'hover_grid_row_height')
    const large_pictures = path.join(images_src, image_folder) + '/*.{png,jpg}'
    console.log('lasd', large_pictures)
    const small_pictures = path.join(images_src, image_folder, '/' + TILE_SIZED + '/')
    let shrink_to_tile_size = {['*.{png,jpg}']: {height: tile_grid_height, quality: 100, normalize: true}}
    return gulp.src(large_pictures)
      .pipe(responsive(shrink_to_tile_size))
      .pipe(gulp.dest(small_pictures))
  })
  return merge(tasks)
}

function tile_size_to_low_quality_small_2 () {
    const images_src = getPublicImages()
    const image_folders = getFolders(images_src)
    let tasks = image_folders.map(function (image_folder) {
      const data_folder = image_folder.replace('_images', '_data')
      const gulp_ssr_low_quality_perc = readGridProps(data_folder, 'gulp_ssr_low_quality_perc')
      if (!gulp_ssr_low_quality_perc) {
        const empty_pipe = require('gulp-empty-pipe')
        return gulp.src('*')
          .pipe(empty_pipe())
      } else {
        const large_pictures = path.join(images_src, image_folder, TILE_SIZED) + '/*.{png,jpg}'
        const small_pictures = path.join(images_src, image_folder, '/' + LOW_QUALITY + '/')
        const low_rez_place_holder = {['*.{png,jpg}']: {quality: gulp_ssr_low_quality_perc, normalize: true}}
        return gulp.src(large_pictures)
          .pipe(responsive(low_rez_place_holder))
          .pipe(gulp.dest(small_pictures))
      }
    })
    return merge(tasks)
}

function tiny_css_image_3 () {
    const images_src = getPublicImages()
    const image_folders = getFolders(images_src)
    let tasks = image_folders.map(function (image_folder) {
        const images_src = getPublicImages()
        const low_quality = path.join(images_src, image_folder, LOW_QUALITY)+ '/*.{png,jpg}'
        const css_folder = path.join(images_src, image_folder)
        return gulp.src(low_quality)
          .pipe(imageDataURI({
              customClass: function (image_classname, file_name) {
                const period_ext = path.extname(file_name.path)
                const file_extension = period_ext.substring(1)
                const img_classname_type = image_classname+ '-'+file_extension
                return img_classname_type
              }
            }
          ))
          .pipe(concat('inline-images.css'))
          .pipe(gulp.dest(css_folder))
      }
    )
    return merge(tasks)
}

function tile_width_height_4 () {
  var sizeOf = require('image-size')
  let image_tasks = wildcard_image_types.map(function (wildcard_image_type) {
    const images_src = getPublicImages()
    const image_folders = getFolders(images_src)
    let tasks = image_folders.map(function (image_folder) {
      const data_folder = image_folder.replace('_images', '')
      if (typeof tile_image_widths[data_folder] === 'undefined') {
        tile_image_widths[data_folder] = {}
      }
      const images_src = getPublicImages()
      const tile_quality = path.join(images_src, image_folder, TILE_SIZED, wildcard_image_type)
      return gulp.src(tile_quality)
        .pipe(tap(function (file) {
          let file_name = path.basename(file.path)
          var dimensions = sizeOf(file.path)
          tile_image_widths[data_folder][file_name] = file_name
          tile_image_widths[data_folder][file_name] = {
            picture_width: dimensions.width
            , picture_height: dimensions.height
          }
        }))
    })
    return merge(tasks)
  })
  return merge(image_tasks)
}

function fini_message_5 (cb) {
  const fs = require('fs')
  const all_tile_widths_file = './' + GRID_DATA + '/' + ALL_TILE_IMAGE_WIDTHS
  const json_tile_image_widths = JSON.stringify(tile_image_widths)
  const tile_image_widths_json = ` const all_tile_tile_image_widths = ${json_tile_image_widths} 
                                   module.exports = all_tile_tile_image_widths `
  fs.open(all_tile_widths_file, 'w', function (err) {
    if(err){
      console.log('ERROR in fini_message_5', err)
    }
    fs.writeFile(all_tile_widths_file, tile_image_widths_json)
  })
  var hh_mm_ss = moment().format('hh:mm:ss')
  console.log(gutil.colors[start_text_color](jsx_text + hh_mm_ss))
  cb()
}

gulp.task('image_data_uri_width', gulp.series(
  resize_original_to_tile_size_1
  , tile_size_to_low_quality_small_2
  , tiny_css_image_3
  , tile_width_height_4
  , fini_message_5
))
