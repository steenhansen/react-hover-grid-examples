'use strict'

// gulp lint-web

const debug = require('gulp-debug')
const gulp = require('gulp')
const eslint = require('gulp-eslint')
const gutil = require('gulp-util')
const start_text_color = 'bgRed'

const my_lint_dirs = [
    __dirname + '/../hover-grid-server/*.js'
    ,  __dirname + '/grid-data/*.js'
    , __dirname + '/*.js'
    , __dirname + '/entry-points/*.jsx'
]

const lint_text = '                                          web lint'

gulp.task('lint_entry', function () {
    console.log(gutil.colors[start_text_color](lint_text))
    return gulp.src(my_lint_dirs)
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(debug({title: 'lint_ENTRY_check:'}))
})
