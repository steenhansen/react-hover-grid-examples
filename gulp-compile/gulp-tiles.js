/*
  gulp tiles

  Shrinks large initial files like
    public/hover-grid-images/npm-images/*.*

  into smaller servable files like
    public/hover-grid-images/npm-images/tile_sized

*/

const debug = require("gulp-debug");
const gulp = require("gulp");
const responsive = require("gulp-responsive");
const del = require("del");

function smallerTiles(image_folder, picture_height, picture_quality) {
  var large_folder = "public/hover-grid-images/" + image_folder + "/";
  var small_tiles = large_folder + "tile_sized/";
  var delete_smalls = small_tiles + "*/";
  console.log("delete smalls", delete_smalls);
  del.sync(delete_smalls);
  let shrink_to_tile_size = { ["*.{png,jpg}"]: { height: picture_height, quality: picture_quality, normalize: true } };
  return (
    gulp
      .src(large_folder + "*.{png,jpg}")
      //.pipe(debug({ title: "smallerTiles:" }))
      .pipe(responsive(shrink_to_tile_size))
      .pipe(gulp.dest(small_tiles))
  );
}

gulp.task("tiles", function (done) {
  // not circle images ! As they are done via "gulp circles"
  smallerTiles("nojs_grid_images", 140, 100);
  smallerTiles("npm_grid_images", 234, 100);
  smallerTiles("readme_grid_images", 234, 100);
  smallerTiles("resize_left_grid_images", 250, 100);
  smallerTiles("resize_right_grid_images", 100, 100);
  smallerTiles("shrink_grid_images", 200, 100);
  done();
});
