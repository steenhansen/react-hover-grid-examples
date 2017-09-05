const city_grid_data = [
  {
    picture_src: 'buntzen_lake.jpg'
    , normal_area: 'north-west'
    , hover_area: 'south-east'
    , normal_title: 'Buntzen Lake'
    , hover_title: 'Coquitlam, BC'
    , normal_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#9BC7EC'}
    , hover_style: {fontFamily: "'Shrikhand', cursive", fontSize: '24px', color: '#000'}
    , hover_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(155, 199, 236, 0.99)'}
    , normal_linear_gradient: {clear_percent: 60, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  }, {
    picture_src: 'golden_colorado.jpg'
    , normal_area: 'north'
    , hover_area: 'south'
    , normal_title: 'North Table Mountain'
    , hover_title: 'Golden, Co'
    , normal_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'white'}
    , hover_style: {fontFamily: "'Abril Fatface', cursive", fontSize: '24px', color: 'black'}
    , hover_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}
    , normal_linear_gradient: {clear_percent: 70, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  }, {
    picture_src: 'joe_mills_mtn.jpg'
    , normal_area: 'north-east'
    , hover_area: 'south-west'
    , normal_title: 'Snow Cave'
    , hover_title: 'RMNP'
    , normal_style: {fontFamily: "'Schoolbell', cursive", fontSize: '24px', color: '#8341D9'}
    , hover_style: {fontFamily: "'Schoolbell', cursive", fontSize: '24px', color: '#2193EC'}
    , hover_linear_gradient: {clear_percent: 30, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}

  }, {
    picture_src: 'lake_garabaldi.jpg'
    , normal_area: 'east'
    , hover_area: 'west'
    , normal_title: 'Lake Garabaldi'
    , hover_title: 'Whistler, BC'
    , normal_style: {fontFamily: "'Share Tech Mono', monospace", fontSize: '36px', color: 'white'}
    , hover_linear_gradient: {clear_percent: 10, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}

  }, {
    picture_src: 'longs_peak.jpg'
    , normal_area: 'south-east'
    , hover_area: 'north-west'
    , normal_title: "Long's Peak"
    , hover_title: 'RMNP'
    , normal_style: {fontFamily: "'Permanent Marker', cursive", fontSize: '24px', color: '#856771'}
    , hover_style: {fontFamily: "'Permanent Marker', cursive", fontSize: '24px', color: 'black'}
    , hover_linear_gradient: {clear_percent: 40, gradient_rgba: 'rgba(133, 103, 113, 0.99)'}
    , normal_linear_gradient: {clear_percent: 40, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  }, {
    picture_src: 'old_quary_colorado_springs.jpg'
    , normal_area: 'south'
    , hover_area: 'north'
    , normal_title: "Old Quarry"
    , hover_title: 'Colorado Springs, Co'
    , normal_style: {fontFamily: "'Orbitron', sans-serif", fontSize: '32px', fontWeight: 'bolder', color: 'white'}
    , hover_style: {fontFamily: "'Orbitron', sans-serif", fontSize: '18px', fontWeight: 'bolder', color: 'white'}
  }, {
    picture_src: 'snow_lake_colorado.jpg'
    , normal_area: 'south-west'
    , hover_area: 'north-east'
    , normal_title: 'Snow Lake'
    , hover_title: 'RMNP'
    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 0.99)'}
    , normal_style: {fontFamily: "'Lobster Two', cursive", fontSize: '24px', color: '#102F66'}
  }, {
    picture_src: 'whale_rock_utah.jpg'
    , normal_area: 'north-east'
    , hover_area: 'east'
    , normal_title: 'Whale Rock'
    , hover_title: 'Canyonlands, Utah'
    , normal_style: {fontFamily: "'Allerta Stencil', sans-serif", fontSize: '18px', color: '#7D3529'}
  }, {
    picture_src: 'white_rock.jpg'
    , normal_title: 'White Rock'
    , hover_title: 'Coquitlam, BC'
    , normal_style: {fontFamily: "'Carter One', cursive", fontSize: '24px', color: 'red'}
    , hover_gradient: 'rgba(255, 0, 0, 0.1)'

  }
]

module.exports = {
  hover_grid_id: 'mountains_grid_id'
  ,  hover_grid_row_height: 200
  ,  pictureTile_text: city_grid_data
  ,  hor_text_edge: 9
  ,  tile_edge: 2
  , resize_nested_component: true
  ,  google_font_link: 'https://fonts.googleapis.com/css?family=Abril+Fatface|Schoolbell|Fredericka+the+Great|Carter+One|Allerta+Stencil|Lobster+Two|Shrikhand|Orbitron|Permanent+Marker|Share+Tech+Mono'
}
