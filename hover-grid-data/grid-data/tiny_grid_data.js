'use strict'  // data file

const tiny_grid_data = [{
    picture_src: '1_canada_bernie.jpg'
    , filter_hover: 'sepia(1)'
    , normal_area: 'north-west'
    , hover_area: 'south-east'
    , normal_title: 'Bernie'
    , hover_title: 'HONDA'
    , normal_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'white'}
    , hover_style: {fontFamily: "'Zilla Slab', serif", fontSize: '30px', color: 'black', fontWweight: 'bold'}
    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 1)'}
    , normal_linear_gradient: {clear_percent: 75, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  },{
  picture_src: '2_amc_spirit.jpg'
  , filter_hover: 'hue-rotate(150deg)'
  , normal_area: 'north-west'
  , hover_area: 'south-east'
  , normal_title: ' Spirit'
  , hover_title: 'by AMC '
  , normal_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#9BC7EC'}
  , hover_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#000'}
  , hover_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(155, 199, 236, 0.99)'}
  , normal_linear_gradient: {clear_percent: 60, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
}, {
  picture_src: '3_kiwi_airforce.jpg'
  , filter_hover: 'grayscale(1)'
  , normal_area: 'south-west'
  , hover_area: 'north-east'
  , normal_title: 'New Zealand'
  , normal_info: 'Airforce'
  , hover_title: 'Tauranga'
  , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}
  , normal_style: {fontFamily: "'Lobster Two', cursive", fontSize: '24px', color: '#102F66'}
}]

module.exports = {
  hover_grid_id: 'tiny_grid_id'
  , hover_grid_row_height: 234
  , pictureTile_text:tiny_grid_data
  , max_rows:2
  , google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Schoolbell|Fredericka+the+Great|Carter+One|Allerta+Stencil|Lobster+Two|Shrikhand|Orbitron|Permanent+Marker|Share+Tech+Mono'

//  , google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Zilla+Slab:700'
}
