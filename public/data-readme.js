const README_HEIGHT = 243;

const tile_east_van = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/readme_grid_images/tile_sized/1_east_van.png",
  picture_width: 208,
  picture_height: README_HEIGHT,
  normal_area: "north-east",
  hover_area: "south-west",
  normal_style: "color: red",
  normal_title_style: "font-size: 23px; font-family: Arial;",
  normal_info_style: "font-size: 19px; font-family: Arial;",
  hover_style: { color: "green" },
  hover_title_style: { fontSize: "17px" },
  hover_info_style: { fontSize: "11px" },
  normal_title: "East",
  normal_info: "Vancouver",
  hover_title: "East",
  hover_info: "Van",
};

const tile_sasamat = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/readme_grid_images/tile_sized/2_over_sasamat.png",
  picture_width: 415,
  picture_height: README_HEIGHT,
  hover_gradient: "rgba(255, 0, 0, 0.1)",
  normal_gradient: "rgba(0, 255, 0, 0.1)",
  link_url: "https://www.vancouvertrails.com/trails/sasamat-lake/",
};

const tile_snake = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/readme_grid_images/tile_sized/3_bc_snake.png",
  picture_width: 229,
  picture_height: README_HEIGHT,
  normal_area: "north-east",
  hover_area: "south-west",
  hover_linear_gradient: { clear_percent: 50, gradient_rgba: "rgba(255, 255, 255, 1)" },
  normal_linear_gradient: { clear_percent: 75, gradient_rgba: "rgba(0, 0, 0, 0.99)" },
};

const tile_amazon = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/readme_grid_images/tile_sized/4_amazon_in_bc.png",
  picture_width: 180,
  picture_height: README_HEIGHT,
  normal_title: "css",
  normal_title_style: ".readme-sample-grid-css-style",
  filter_normal: "hue-rotate(250deg)",
  filter_hover: "hue-rotate(150deg)",
};

picture_sizes = {
  "https://d3rprn9azbpq5l.cloudfront.net/readme_grid_images/tile_sized/1_east_van.png": { picture_width: 208, picture_height: README_HEIGHT },
  "https://d3rprn9azbpq5l.cloudfront.net/readme_grid_images/tile_sized/2_over_sasamat.png": { picture_width: 415, picture_height: README_HEIGHT },
  "https://d3rprn9azbpq5l.cloudfront.net/readme_grid_images/tile_sized/3_bc_snake.png": { picture_width: 229, picture_height: README_HEIGHT },
  "https://d3rprn9azbpq5l.cloudfront.net/readme_grid_images/tile_sized/4_amazon_in_bc.png": { picture_width: 180, picture_height: README_HEIGHT },
};

readme_data = {
  hover_grid_id: "readme_grid_id",
  hover_grid_row_height: README_HEIGHT,
  pictureTile_text: [tile_east_van, tile_sasamat, tile_snake, tile_amazon],
  pictureTile_list: [tile_east_van, tile_sasamat, tile_snake, tile_amazon],
  picture_sizes: picture_sizes,
};
