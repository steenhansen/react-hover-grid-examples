'use strict'  // fast_grid data

var fast_grid_data = [
  {
    picture_src: 'chase_tail.jpg'
    , normal_title: 'Chasing a Wet Tail'
    , hover_title: 'Belcarra Regional Park'
    , normal_area: 'north'
    , hover_area: 'south'
  }, {
    picture_src: 'dog_head.jpg'
    , normal_title: 'Chasing a Wet Tail'
    , hover_title: 'Belcarra Regional Park'
    , normal_area: 'north'
    , hover_area: 'south'
  }, {
    picture_src: 'dog_rocks.jpg'
  }, {
    picture_src: 'maggie.jpg'
  }, {
    picture_src: 'minnekhada.jpg'
    , link_url: 'https://www.google.ca/maps/@49.3316954,-122.6950204,15z'
  }, {
    picture_src: 'pink_flower.jpg'
  }, {
    picture_src: 'this_little_piggy.jpg'
  }, {
    picture_src: 'two_trees.jpg'
  }, {
    picture_src: 'wheres_bugs.jpg'
  }, {
    picture_src: 'white_flower.jpg'
  },{
     picture_src: 'maggie_sun.jpg'
  },{
    picture_src: 'dog_car.jpg'
  },{
    picture_src: 'st_marks.jpg'
  },{
    picture_src: 'buntzen.jpg'
  },{
    picture_src: 'fat_bastard.jpg'
  },{
    picture_src: 'the_lions.jpg'
  },{
    picture_src: 'bike_works.jpg'
  },{
    picture_src: 'black_mountain.jpg'
  },{
    picture_src: 'cypress_lake.jpg'
  },{
    picture_src: 'dennet_lake.jpg'
  },{
    picture_src: 'tiger.jpg'
  },{
    picture_src: 'carSurfing.jpg'
  },{
    picture_src: 'hansenGiles.jpg'
  }

]

module.exports = {
  hover_grid_id: 'fast_grid_id'
  , ssr_grid_id: 's'

  , hover_grid_row_height: 140
  , pictureTile_text: fast_grid_data
  , tile_edge: 0

  //, shuffle_seconds: 5
  , server_render: true

  , init_shuffle: true
  , max_rows:2

  , server_screen_size:[412, 414, 480, 568, 640, 667, 720, 732, 736, 768, 800, 900, 1024, 1050, 1080, 1200, 1280, 1360, 1366, 1440, 1600, 1680, 1920]
  // , show_server_grid_sizes : true
  , server_grid_size:  [179, 181, 247, 335, 407, 434, 487, 499, 503, 535, 567, 667,  791,  817,  847,  967, 1047, 1127, 1133, 1207, 1367, 1447, 1687]

  , gulp_ssr_low_quality_perc: 11

}
