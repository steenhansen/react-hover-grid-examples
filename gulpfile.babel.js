'use strict'


/*

IF YOU GET THIS MESSAGE
  Error: Cannot find module '../build/Release/sharp.node'

THEN
  $ yarn upgrade sharp




 module.js:597
 return process.dlopen(module, path._makeLong(filename));
 ^

 Error: The specified procedure could not be found.

*/


var gulp = require('gulp')
var env = require('node-env-file')
var error_text_color = 'bgRed'
var gutil = require('gulp-util')
env('./.env')  // N.B. This defines process.env.NODE_ENV

require('./node_modules/react-hover-grid/gulpfile.hover_tiles_compile.js')
require('./hover-grid-data/gulpfile.jsx_entries.js')
require('./hover-grid-data/gulpfile.image_data_uri_width.js')

require('./hover-grid-data/gulpfile.image_circle_width.js')

require('./hover-grid-server/gulpfile.webpack_gulp.js')

require('./hover-grid-data/lint_entry.js')
require('./node_modules/react-hover-grid/lint_hover.js')

const compile_all = gulp.series('hover_tiles_compile', 'jsx_entries', 'webpack_gulp')
const build_all = gulp.series('hover_tiles_compile', 'jsx_entries', 'image_data_uri_width', 'webpack_gulp')
const lint_all = gulp.series('lint_entry', 'lint_hover')

const all_gulps = gulp.series('hover_tiles_compile', 'jsx_entries', 'image_circle_width',
                              'image_data_uri_width', 'webpack_gulp', 'lint_entry', 'lint_hover')

gulp.task('compile', compile_all)
gulp.task('build', build_all)
gulp.task('lint', lint_all)

gulp.task('all', all_gulps)

gulp.task('default', function (cb) {
  console.log('  gulp compile')
  console.log('    gulp hover_tiles_compile')
  console.log('    gulp jsx_entries')
  console.log('    gulp webpack_gulp')

  console.log('  gulp build')
  console.log('    gulp hover_tiles_compile')
  console.log('    gulp jsx_entries')
  console.log('    gulp webpack_gulp')
  console.log('    gulp image_circle_width')
  console.log('    gulp image_data_uri_width')

  console.log('  gulp lint')
  console.log('    gulp lint_hover')
  console.log('    gulp lint_entry')

  console.log('  gulp all')

  cb()
})

console.log(gutil.colors[error_text_color]('::::::::::::::: NODE ENVIRONMENT ===', process.env.NODE_ENV))
