const right_grid_data = [
  {
    picture_src: 'nz_pigs.jpg'
    , normal_title: 'Pigs in NZ'
    , hover_title: 'Above Pumping Station'
    , normal_style: '.my_pink_class'
  }, {
    picture_src: 'robin_eggs.jpg'
    , normal_title: 'Robin Blue'
    , normal_info: 'Park'
    , hover_title: 'Snowing'
    , hover_info: 'on the Pitt'
  }, {
    picture_src: 'sister_bees.jpg'
    , normal_title: "Sister's Bees"
    , normal_info: 'Park'
    , hover_title: 'Snowing'
    , hover_info: 'on the Pitt'
  }, {
    picture_src: 'tree_bears.jpg'
    , normal_title: 'Tree Bears'
    , normal_info: 'Park'
    , hover_title: 'Snowing'
    , hover_info: 'on the Pitt'
  }, {
    picture_src: 'weird_eggs.jpg'
    , normal_title: 'Eggs'
    , normal_info: 'Park'
    , hover_title: 'Snowing'
    , hover_info: 'on the Pitt'
  }
]

module.exports = {
  hover_grid_id: 'sizeable_right_grid_id'
  , hover_grid_row_height: 100
  , pictureTile_text: right_grid_data
  , tile_edge: 0
  , resize_nested_component: true
}
