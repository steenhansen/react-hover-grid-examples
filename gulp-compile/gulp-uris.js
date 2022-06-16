/*
  gulp uris



*/
const path = require("path");
const debug = require("gulp-debug");
const gulp = require("gulp");
const responsive = require("gulp-responsive");
const imageDataURI = require("gulp-image-data-uri");
const concat = require("gulp-concat");
const del = require("del");

function clearLowQuality_0(done) {
  del.sync(["public/hover-grid-images/nojs-images/low_quality/*/"]);
  done();
}

function lowQuality_1() {
  const picture_quality = 7;
  var large_folder = "public/hover-grid-images/nojs_grid_images/tile_sized/";
  var small_files = "public/hover-grid-images/nojs_grid_images/low_quality/";
  let shrink_to_tile_size = { ["*.{png,jpg}"]: { quality: picture_quality, normalize: true } };
  return (
    gulp
      .src(large_folder + "*.{png,jpg}")
      //  .pipe(debug({ title: "lowQuality:" }))
      .pipe(responsive(shrink_to_tile_size))
      .pipe(gulp.dest(small_files))
  );
}

function uriData_2() {
  var low_quality = "public/hover-grid-images/nojs_grid_images/low_quality/*.{png,jpg}";
  var css_folder = "public/";
  return (
    gulp
      .src(low_quality)
      //.pipe(debug({ title: "uriData:" }))
      .pipe(
        imageDataURI({
          customClass: function (image_classname, file_name) {
            //console.log(file_name);
            const period_ext = path.extname(file_name.path);
            const file_extension = period_ext.substring(1);
            const img_classname_type = image_classname + "-" + file_extension;
            return img_classname_type;
          },
        })
      )
      .pipe(concat("inline-images.css"))
      .pipe(gulp.dest(css_folder))
  );
}

gulp.task("uris", function (done) {
  var callInSeries = gulp.series(clearLowQuality_0, lowQuality_1, uriData_2);
  callInSeries();
  done();
});
