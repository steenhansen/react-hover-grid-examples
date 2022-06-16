// gulp circles

/*
  how to get GraphicsMagick image processing working on Windows

  1 Install GraphicsMagick from SourceForge 
    https://sourceforge.net/projects/graphicsmagick/files/graphicsmagick-binaries/

  2 Version 1.3.35 works, 1.3.36 does not on my machine

  3 https://sourceforge.net/projects/graphicsmagick/files/graphicsmagick-binaries/1.3.35/

  4 https://sourceforge.net/projects/graphicsmagick/files/graphicsmagick-binaries/1.3.35/GraphicsMagick-1.3.35-Q8-win64-dll.exe/download

  5 Con-Emu needs to have both User and System Environment variables set

  6. command line output if enter 'gm'
    $ gm  
        GraphicsMagick 1.3.35 2020-02-23 Q8 http://www.GraphicsMagick.org/
        Copyright (C) 2002-2020 GraphicsMagick Group.
*/

/*
  Graphics Magick for Node.js docs =>  http://aheckmann.github.io/gm/docs.html#trim

  https://www.npmjs.com/package/gm
*/
const CIRCLE_DIRECTORY = "circle-images/";

const CIRCLE_MASK = CIRCLE_DIRECTORY + "image-masks/circle-mask.png";

const TRANSPARENT_PINK = "#FF4CB7";

const CIRCLE_1_START = CIRCLE_DIRECTORY + "circle_1_start/";
const CIRCLE_1_PNGS = CIRCLE_1_START + "*.png";

const CIRCLE_2_SQUARE = CIRCLE_DIRECTORY + "circle_2_square/";
const CIRCLE_2_PNGS = CIRCLE_2_SQUARE + "*.png";

const CIRCLE_3_SAME_SIZE = CIRCLE_DIRECTORY + "circle_3_same_size/";
const CIRCLE_3_PNGS = CIRCLE_3_SAME_SIZE + "*.png";

const CIRCLE_4_ROUNDS = CIRCLE_DIRECTORY + "circle_4_rounds/";
const CIRCLE_4_PNGS = CIRCLE_4_ROUNDS + "*.png";

const CIRCLE_5_TRANS = CIRCLE_DIRECTORY + "circle_5_trans/";
const CIRCLE_5_PNGS = CIRCLE_5_TRANS + "*.png";

const CIRCLE_6_BALL = CIRCLE_DIRECTORY + "circle_6_ball/";
const CIRCLE_6_PNGS = CIRCLE_6_BALL + "*.png";

const CIRCLE_7_EDGED = CIRCLE_DIRECTORY + "circle_7_edged/";
const CIRCLE_7_PNGS = CIRCLE_7_EDGED + "*.png";

const CIRCLE_8_FINAL = CIRCLE_DIRECTORY + "tile_sized/";
const CIRCLE_8_PNGS = CIRCLE_8_FINAL + "*.png";

const CIRCLE_9_PUBLIC = "public/hover-grid-images/circle_grid_images/tile_sized/";

const debug = require("gulp-debug");
const del = require("del");
var gm = require("gulp-gm");
const gulp = require("gulp");

const FINAL_HEIGHT = 151;
const FINAL_WIDTH_WITH_CLEAR_EDGES = 201;

const WORK_SQUARE = FINAL_HEIGHT;

const CENTER_X = Math.floor(FINAL_HEIGHT / 2) + 1;
const CENTER_Y = CENTER_X;

var square_xys = [];
var x_middles = [];
var y_middles = [];

function clearWork_0(done) {
  del.sync([
    // NOT CIRCLE_1_START as these are the original files
    CIRCLE_2_SQUARE + "*/",
    CIRCLE_3_SAME_SIZE + "*/",
    CIRCLE_4_ROUNDS + "*/",
    CIRCLE_5_TRANS + "*/",
    CIRCLE_6_BALL + "*/",
    CIRCLE_7_EDGED + "*/",
    CIRCLE_8_FINAL + "*/",
    //    CIRCLE_9_PUBLIC + "*/",    don't clear this is where the large clicked on images are stored
  ]);

  gulp
    .src("public/hover-grid-images/circle_grid_images/menu.png")
    //   .pipe(debug({ title: "00000:" }))
    .pipe(gulp.dest(CIRCLE_9_PUBLIC));

  done();
}

function getImageInfo_1() {
  var y_middle, x_middle, square_xy;
  return (
    gulp
      .src(CIRCLE_1_PNGS)
      //.pipe(debug({ title: "11111111111:" }))
      .pipe(
        gm(function (gm_object) {
          process.stdout.write("1");
          gm_object.size(function (err, size) {
            const { width, height } = size;
            if (width > height) {
              y_middle = 0;
              x_middle = (width - height) / 2;
              square_xy = height;
            } else {
              x_middle = 0;
              y_middle = (height - width) / 2;
              square_xy = width;
            }
            square_xys.push(square_xy);
            x_middles.push(x_middle);
            y_middles.push(y_middle);
          });
          return gm_object;
        })
      )
  );
}

function loseFileExtension(gm_object) {
  const image_file_long = gm_object.source;
  const image_file_short = image_file_long.substring(0, image_file_long.length - 4);
  return image_file_short;
}

function makeSquares_2() {
  return (
    gulp
      .src(CIRCLE_1_PNGS)
      //    .pipe(debug({ title: "222222222222:" }))
      .pipe(
        gm(function (any_size) {
          process.stdout.write("2");
          var square_xy = square_xys.shift();
          var x_middle = x_middles.shift();
          var y_middle = y_middles.shift();
          var space_for_frame = any_size.crop(square_xy, square_xy, x_middle, y_middle);
          return space_for_frame;
        })
      )
      .pipe(gulp.dest(CIRCLE_2_SQUARE))
  );
}

function resizeAllSame_3() {
  return (
    gulp
      .src(CIRCLE_2_PNGS)
      // .pipe(debug({ title: "333333:" }))
      .pipe(
        gm(function (random_size) {
          process.stdout.write("3");
          var same_size = random_size.resizeExact(WORK_SQUARE, WORK_SQUARE);
          return same_size;
        })
      )
      .pipe(gulp.dest(CIRCLE_3_SAME_SIZE))
  );
}

function makeCircle_4() {
  return (
    gulp
      .src(CIRCLE_3_PNGS)
      //   .pipe(debug({ title: "44444444444:" }))
      .pipe(
        gm(function (round_image) {
          process.stdout.write("4");
          var ball_image_on_pink = round_image.composite(CIRCLE_MASK);
          return ball_image_on_pink;
        })
      )
      .pipe(gulp.dest(CIRCLE_4_ROUNDS))
  );
}

function pinkTrans_5() {
  return (
    gulp
      .src(CIRCLE_4_PNGS)
      //  .pipe(debug({ title: "55555555555:" }))
      .pipe(
        gm(function (transparent_corners) {
          process.stdout.write("5");
          //  http://aheckmann.github.io/gm/docs.html#transparent
          return transparent_corners.transparent(TRANSPARENT_PINK);
        })
      )
      .pipe(gulp.dest(CIRCLE_5_TRANS))
  );
}

//  https://stackoverflow.com/questions/25488338/how-to-find-average-color-of-an-image-with-imagemagick
//  gm("img.png").drawCircle(x0, y0, x1, y1);
function drawColoredBall_6() {
  var hexes = {};
  return (
    gulp
      .src(CIRCLE_5_PNGS)
      //.pipe(debug({ title: "6666666 AAAAAAAAAAAA" }))
      .pipe(
        gm(function (average_color) {
          process.stdout.write(".");
          const color_file_short = loseFileExtension(average_color);
          average_color
            .setFormat("ppm")
            .resize(1, 1)
            .toBuffer(function (err, buffer) {
              const hex_buff = buffer.toString("hex");
              const last_3_hex = hex_buff.slice(-6);
              const hash_hex = "#" + last_3_hex;
              hexes[color_file_short] = hash_hex;
            });
          return average_color;
        })
      )
      //    .pipe(debug({ title: "6666666 BBBBBBBBBBBBBB:" }))
      .pipe(
        gm(function (colored_circle) {
          process.stdout.write("6");
          const circle_file_short = loseFileExtension(colored_circle);
          const hash_hex = hexes[circle_file_short];
          colored_circle.setFormat("png");
          colored_circle.transparent(TRANSPARENT_PINK);
          colored_circle.fill(hash_hex);
          // draw circle from center to left side of image one pixel in, halfway down
          colored_circle.drawCircle(CENTER_X - 1, CENTER_Y - 1, 2, CENTER_Y);
          colored_circle.transparent(TRANSPARENT_PINK);
          return colored_circle;
        })
      )
      //   .pipe(debug({ title: "6666666 CCCCCCCCCCCCCCCCc:" }))
      .pipe(gulp.dest(CIRCLE_6_BALL))
  );
}

function colorEdge_7() {
  return (
    gulp
      .src(CIRCLE_6_PNGS)
      //.pipe(debug({ title: "77777777777" }))
      .pipe(
        gm(function (gmfile) {
          process.stdout.write("7");
          var the_path = gmfile.source;
          var the_dest = the_path.replace("circle_6_ball", "circle_5_trans");
          var colored_edge = gmfile.composite(the_dest);
          return colored_edge;
        })
      )
      .pipe(gulp.dest(CIRCLE_7_EDGED))
  );
}

function moveToPublic_8() {
  return (
    gulp
      .src(CIRCLE_7_PNGS)
      //.pipe(debug({ title: "88888888888888" }))
      .pipe(
        gm(function (gmfile) {
          process.stdout.write("8");
          const overlapping_clear_sides = gmfile.resize(151, 151).gravity("Center").extent(FINAL_WIDTH_WITH_CLEAR_EDGES, FINAL_HEIGHT).transparent("#FFFFFF");
          return overlapping_clear_sides;
        })
      )
      .pipe(gulp.dest(CIRCLE_8_FINAL))
  );
}

function moveToPublic_9() {
  return (
    gulp
      .src(CIRCLE_8_PNGS)
      //.pipe(debug({ title: "99999999999" }))
      .pipe(
        gm(function (gmfile) {
          process.stdout.write("9");
          return gmfile;
        })
      )
      .pipe(gulp.dest(CIRCLE_9_PUBLIC))
  );
}

gulp.task("circles", function (done) {
  var callInSeries = gulp.series(
    clearWork_0,
    getImageInfo_1,
    makeSquares_2,
    resizeAllSame_3,
    makeCircle_4,
    pinkTrans_5,
    drawColoredBall_6,
    colorEdge_7,
    moveToPublic_8,
    moveToPublic_9
  );
  callInSeries();
  done();
});
