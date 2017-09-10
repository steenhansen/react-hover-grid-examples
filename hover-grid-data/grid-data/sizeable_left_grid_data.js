const left_grid_data = [
  {
    picture_src: 'alouette_mtn.jpg'
    , normal_title: 'Maggie'
    , hover_title: 'Above Pumping Station'
    , normal_style: '.my_pink_class'
  }, {
    picture_src: 'car_deer.jpg'
    , normal_area: 'north-west'
    , hover_area: 'south-east'
    , normal_title: 'car deer'
    , hover_title: 'Maggie on the Mountain'
  }, {
    picture_src: 'fiji_bat.jpg'
    , normal_title: 'Fiji Bat'
    , normal_info: 'Park'
    , hover_title: 'Snowing'
    , hover_info: 'on the Pitt'
  }, {
    picture_src: 'green_tree.jpg'
    , normal_title: 'Green Tree'
    , normal_info: 'Park'
    , hover_title: 'Snowing'
    , hover_info: 'on the Pitt'
  }, {
    picture_src: 'mushrooms.jpg'
    , normal_title: 'Mushroom Tree'
    , normal_info: 'Park'
    , hover_title: 'Snowing'
    , hover_info: 'on the Pitt'
  }, {
    picture_src: 'cato.jpg'
    , normal_title: 'Cato'
  }, {
    picture_src: 'no_swim.jpg'
    , normal_title: 'Maggie'
  }, {
    picture_src: 'snow_bridge.jpg'
    , normal_title: 'Mountain Bike '
  }, {
    picture_src: 'trees_snow_sun.jpg'
    , normal_title: 'Flare'
  }
]

module.exports = {
  hover_grid_id: 'sizeable_left_grid_id'
  , hover_grid_row_height: 250
  , pictureTile_text: left_grid_data
  , tile_edge: 0
  , max_rows: 2
  , resize_nested_component: true
}
