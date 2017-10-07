'use strict'

/*
 Images
 public/hover-grid-images/readme_sample_grid_images/1_east_van.png
                                                    2_over_sasemat.png
                                                    3_bc_snake.png
                                                    4_amazon_in_bc.png
 */

const readme_sample_grid_data = [
  {
    picture_src: '1_east_van.png'
    , normal_area: 'north-east'
    , hover_area: 'south-west'
    , normal_style: 'color: red'
    , normal_title_style: 'font-size: 23px; font-family: Arial;'
    , normal_info_style: 'font-size: 19px; font-family: Arial;'
    , hover_style: {color: 'green'}
    , hover_title_style: {fontSize: '17px'}
    , hover_info_style: {fontSize: '11px'}
    , normal_title: 'East'
    , normal_info: 'Vancouver'
    , hover_title: 'East'
    , hover_info: 'Van'
  } , {
    picture_src: '2_over_sasamat.png'
    , hover_gradient: 'rgba(255, 0, 0, 0.1)'
    , normal_gradient: 'rgba(0, 255, 0, 0.1)'
    , link_url: 'https://www.vancouvertrails.com/trails/sasamat-lake/'
  } , {
    picture_src: '3_bc_snake.png'
    , normal_area: 'north-east'
    , hover_area: 'south-west'
    , hover_linear_gradient: {clear_percent: 50, gradient_rgba: 'rgba(255, 255, 255, 1)'}
    , normal_linear_gradient: {clear_percent: 75, gradient_rgba: 'rgba(0, 0, 0, 0.99)'}
  } , {
    picture_src: '4_amazon_in_bc.png'
    , normal_title: 'css'
    , normal_title_style: '.readme-sample-grid-css-style'
    , filter_normal: 'hue-rotate(250deg)'
    , filter_hover: 'hue-rotate(150deg)'
  }

]

module.exports = {
  hover_grid_id: 'readme_sample_grid_id'
  , hover_grid_row_height: 234
  , pictureTile_text: readme_sample_grid_data
}