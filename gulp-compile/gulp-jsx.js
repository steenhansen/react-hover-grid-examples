const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("jsx", function (done) {
  return gulp
    .src("javascript-jsx/*.jsx")
    .pipe(
      babel({
        presets: ["@babel/preset-env", "@babel/preset-react"],
      })
    )
    .pipe(gulp.dest("javascript-compiled/"));
});
