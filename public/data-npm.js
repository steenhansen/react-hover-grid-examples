const NPM_HEIGHT = 234;

const tile_bernie = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/npm_grid_images/tile_sized/1_canada_bernie.jpg",
  picture_width: 367,
  picture_height: NPM_HEIGHT,
  filter_hover: "sepia(1)",
  normal_area: "north-west",
  hover_area: "south-east",
  normal_title: "Bernie",
  hover_title: "HONDA",
  normal_style: { fontFamily: "Abril Fatface, cursive", fontSize: "24px", color: "white" },
  hover_style: { fontFamily: "Zilla Slab, serif", fontSize: "30px", color: "black", fontWweight: "bold" },
  hover_linear_gradient: { clear_percent: 50, gradient_rgba: "rgba(255, 255, 255, 1)" },
  normal_linear_gradient: { clear_percent: 75, gradient_rgba: "rgba(0, 0, 0, 0.99)" },
};

const tile_amc = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/npm_grid_images/tile_sized/2_amc_spirit.jpg",
  picture_width: 416,
  picture_height: NPM_HEIGHT,
  filter_hover: "hue-rotate(150deg)",
  normal_area: "north-west",
  hover_area: "south-east",
  normal_title: " Spirit",
  hover_title: "by AMC ",
  normal_style: { fontFamily: "Shrikhand, cursive", fontSize: "24px", color: "#9BC7EC" },
  hover_style: { fontFamily: "Shrikhand, cursive", fontSize: "24px", color: "#000" },
  hover_linear_gradient: { clear_percent: 70, gradient_rgba: "rgba(155, 199, 236, 0.99)" },
  normal_linear_gradient: { clear_percent: 60, gradient_rgba: "rgba(0, 0, 0, 0.99)" },
};

const tile_kiwi = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/npm_grid_images/tile_sized/3_kiwi_airforce.jpg",
  picture_width: 312,
  picture_height: NPM_HEIGHT,
  filter_hover: "grayscale(1)",
  normal_area: "south-west",
  hover_area: "north-east",
  normal_title: "New Zealand",
  normal_info: "Airforce",
  hover_title: "Tauranga",
  hover_linear_gradient: { clear_percent: 50, gradient_rgba: "rgba(255, 255, 255, 0.99)" },
  normal_style: { fontFamily: "Lobster Two, cursive", fontSize: "24px", color: "#102F66" },
};

const tile_cranes = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/npm_grid_images/tile_sized/4_christmas_cranes.jpg",
  picture_width: 416,
  picture_height: NPM_HEIGHT,
  link_url: "https://www.google.ca/maps/@49.2619256,-122.8890653,320m/data=!3m1!1e3?hl=en",
};

const tile_observ = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/npm_grid_images/tile_sized/5_sfu_observatory.jpg",
  picture_width: 416,
  picture_height: NPM_HEIGHT,
  link_url:
    "https://www.google.ca/maps/place/SFU+Trottier+Observatory/@49.2784171,-122.9149342,195m/data=!3m1!1e3!4m5!3m4!1s0x0:0xdf1603c7a7c098f1!8m2!3d49.2785011!4d-122.9149546?hl=en",
};

const tile_coffee = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/npm_grid_images/tile_sized/6_i_like_coffee.jpg",
  picture_width: 432,
  picture_height: NPM_HEIGHT,
};

const tile_pkd = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/npm_grid_images/tile_sized/7_pkd_tombstone.jpg",
  picture_width: 312,
  picture_height: NPM_HEIGHT,
  link_url: "https://www.google.ca/maps/@40.259518,-103.8095973,230m/data=!3m1!1e3?hl=en",
};

const tile_hello_kitty = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/npm_grid_images/tile_sized/8_hello_kitty_skytrain.jpg",
  picture_width: 416,
  picture_height: NPM_HEIGHT,
  normal_title: "Hello Skytrain",
  normal_area: "south",
  normal_style: { fontFamily: "HarmoniaSansW01-Bold", fontSize: "30px", color: "white", fontWeight: "bold" },

  hover_title: "Hello Skytrain",
  hover_area: "south",
  hover_style: { fontFamily: "UniqueRegular", fontSize: "30px", color: "black", fontWeight: "bold" },

  link_url:
    "https://www.google.ca/maps/place/Commercial+-+Broadway+Station/@49.2630943,-123.0704535,188m/data=!3m1!1e3!4m12!1m6!3m5!1s0x0:0xdf1603c7a7c098f1!2sSFU+Trottier+Observatory!8m2!3d49.2785011!4d-122.9149546!3m4!1s0x5486714ed1cbf3cf:0xed9b913d83dd63fd!8m2!3d49.2626442!4d-123.0692567?hl=en",
};

const tile_nukes = {
  picture_src: "https://d3rprn9azbpq5l.cloudfront.net/npm_grid_images/tile_sized/9_denver_nukes.jpg",
  picture_width: 312,
  picture_height: NPM_HEIGHT,
  link_url:
    "https://www.google.ca/maps/place/Wings+Over+the+Rockies+Air+%26+Space+Museum/@39.7208786,-104.8960433,233m/data=!3m1!1e3!4m5!3m4!1s0x876c7c59c91171dd:0xfa643c8583ff8546!8m2!3d39.720977!4d-104.895763?hl=en",
};

const the_data = [tile_bernie, tile_amc, tile_kiwi, tile_cranes, tile_observ, tile_pkd, tile_hello_kitty, tile_nukes, tile_coffee];

const npm_data = {
  //hover_grid_id: "npm_grid_id",
  hover_grid_row_height: NPM_HEIGHT,
  pictureTile_text: the_data,
  pictureTile_list: the_data,
  max_rows: 2,
  google_font_link: [
    "https://fonts.googleapis.com/css?family=Abril+Fatface|Schoolbell|Fredericka+the+Great|Carter+One|Allerta+Stencil|Lobster+Two|Shrikhand|Orbitron|Permanent+Marker|Share+Tech+Mono",
    //, "https://db.onlinewebfonts.com/c/99f44be299d4608af6fbe99aa38ce446?family=HarmoniaSansW01-Bold"   // css link in web page for https
    "https://fontlibrary.org/face/unique",
  ],
};
