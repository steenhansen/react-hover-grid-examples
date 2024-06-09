"use strict";

/*
 Images
 public/hover-grid-images/npm-images/chase_tail.jpg
                                                  dog_head.jpg
                                                  dog_rocks.jpg
                                                  maggie.jpg
                                                  minnekhada.jpg
                                                  pink_flower.jpg
                                                  this_little_piggy.jpg
                                                  two_trees.jpg
                                                  wheres_bugs.jpg
                                                  white_flower.jpg
                                                  maggie_sun.jpg
                                                  dog_car.jpg
                                                  st_marks.jpg
                                                  buntzen.jpg
                                                  fat_bastard.jpg
                                                  the_lions.jpg
                                                  bike_works.jpg
                                                  black_mountain.jpg
                                                  cypress_lake.jpg
                                                  dennet_lake.jpg
                                                  tiger.jpg
                                                  carSurfing.jpg
                                                  hansenGiles.jpg
 */

const NOJS_HEIGHT = 140;

var ssr_with_js_grid_data = [
  {  
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/chase_tail.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
    normal_title: "Willow",
    hover_title: "Belcarra Regional Park",
    link_url: "https://www.google.ca/maps/@49.3017503,-122.9033275,13.85z?hl=en",
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/dog_head.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/dog_rocks.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/maggie.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/minnekhada.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
    normal_title: "Minnekhada Park",
    hover_title: "From Monroe Lake Trail",
    link_url: "https://www.google.ca/maps/@49.3316954,-122.6950204,15z",
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/pink_flower.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/this_little_piggy.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/two_trees.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/wheres_bugs.jpg",
    picture_width: 186,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/white_flower.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/maggie_sun.jpg",
    picture_width: 169,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/dog_car.jpg",
    picture_width: 249,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/st_marks.jpg",
    picture_width: 249,
    picture_height: NOJS_HEIGHT,
    normal_title: "St. Mark's",
    hover_title: "Howe Sound Crest Trail",
    link_url: "https://www.google.ca/maps/@49.4315863,-123.2043971,13.25z?hl=en",
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/buntzen.jpg",
    picture_width: 249,
    picture_height: NOJS_HEIGHT,
    normal_title: "Buntzen Lake",
    hover_title: "Eagle Mountain, BC",
    link_url: "https://www.google.ca/maps/@49.3420378,-122.8297682,13.96z?hl=en",
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/fat_bastard.jpg",
    picture_width: 249,
    picture_height: NOJS_HEIGHT,
    normal_title: "Fat Bastard Trail",
    hover_title: "Eagle Mountain",
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/the_lions.jpg",
    picture_width: 249,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/bike_works.jpg",
    picture_width: 249,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/black_mountain.jpg",
    picture_width: 249,
    picture_height: NOJS_HEIGHT,
    normal_title: "Black Mountain",
    hover_title: "Cypress Mountain Resort",
    link_url: "https://www.google.ca/maps/@49.3750506,-123.2218727,12.65z?hl=en",
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/cypress_lake.jpg",
    picture_width: 249,
    picture_height: NOJS_HEIGHT,
    normal_title: "Cypress Lake",
    hover_title: "Westwood Plateau",
    link_url: "https://www.google.ca/maps/@49.3359519,-122.8178555,15.69z?hl=en",
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/dennet_lake.jpg",
    picture_width: 249,
    picture_height: NOJS_HEIGHT,
    normal_title: "Dennet Lake",
    hover_title: "Burke Mountain",
    link_url: "https://www.google.ca/maps/@49.3477615,-122.701745,13.82z?hl=en",
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/tiger.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/carSurfing.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
  {
    picture_src: "https://d3rprn9azbpq5l.cloudfront.net/nojs_grid_images/tile_sized/hansenGiles.jpg",
    picture_width: 187,
    picture_height: NOJS_HEIGHT,
  },
];

const the_hover = {
  hover_grid_id: "nojs_grid_id",
  ssr_grid_id: "s",
  hover_grid_row_height: NOJS_HEIGHT,
  tile_edge: 0,
  shuffle_seconds: 10, // Since the point is not to have any Javascript has been turned off
  server_render_ssr: true,
  init_shuffle_ssr: true,
  max_rows: 2,

  onResize: (x) => console.log("done on-resize"), // gets over written

  normal_area: "north-west",
  hover_area: "south-east",
  filter_hover: "grayscale(1)",
  normal_style: { fontFamily: "Helvetica Neue Light, HelveticaNeue-Light, Helvetica Neue, Calibri, Helvetica, Arial", fontSize: "24px", color: "white" },
  hover_style: { fontFamily: "Helvetica Neue Light, HelveticaNeue-Light, Helvetica Neue, Calibri, Helvetica, Arial", fontSize: "24px", color: "black" },
  hover_linear_gradient: { clear_percent: 50, gradient_rgba: "rgba(255, 255, 255, 1)" },
  normal_linear_gradient: { clear_percent: 75, gradient_rgba: "rgba(0, 0, 0, 0.99)" },

  server_screen_size: [412, 414, 480, 568, 640, 667, 720, 732, 736, 768, 800, 900, 1024, 1050, 1080, 1200, 1280, 1360, 1366, 1440, 1600, 1680, 1920],
  show_server_grid_sizes: true,
  server_grid_size: [339, 341, 407, 495, 567, 594, 647, 659, 663, 695, 727, 827, 951, 977, 1007, 1127, 1207, 1287, 1293, 1367, 1527, 1607, 1847],
  gulp_ssr_low_quality_perc: 11,

  pictureTile_text: ssr_with_js_grid_data,
  pictureTile_list: ssr_with_js_grid_data,
};
module.exports = {
  the_hover,
};
