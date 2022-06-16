const CIRCLE_HEIGHT = 150;
const CIRCLE_WIDTH = 198;

const circle_clip_grid_data = [
  {
    picture_src: "menu.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    static_col: 2, // N.B. Ie will shrink to 1 circle image wide
    static_row: 2,
  },
  {
    picture_src: "bat.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Bat",
    hover_title: "Bat",
    link_url: "/hover-grid-images/circle_grid_images/bat.png",
  },
  {
    picture_src: "bees.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Bees",
    hover_title: "Bees",
    link_url: "/hover-grid-images/circle_grid_images/bees.png",
  },
  {
    picture_src: "bridge.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Bridge",
    hover_title: "Bridge",
    link_url: "/hover-grid-images/circle_grid_images/bridge.png",
  },
  {
    picture_src: "buntzen.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Buntzen",
    hover_title: "Buntzen",
    link_url: "/hover-grid-images/circle_grid_images/buntzen.png",
  },
  {
    picture_src: "car.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Surfing",
    hover_title: "Surfing",
    link_url: "/hover-grid-images/circle_grid_images/car.png",
  },
  {
    picture_src: "car_dog.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Cato",
    hover_title: "Cato",
    link_url: "/hover-grid-images/circle_grid_images/car_dog.png",
  },
  {
    picture_src: "cato.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Cato",
    hover_title: "Cato",
    link_url: "/hover-grid-images/circle_grid_images/cato.png",
  },
  {
    picture_src: "cave.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Cave",
    hover_title: "Cave",
    link_url: "/hover-grid-images/circle_grid_images/cave.png",
  },
  {
    picture_src: "cranes.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Cranes",
    hover_title: "Cranes",
    link_url: "/hover-grid-images/circle_grid_images/cranes.png",
  },
  {
    picture_src: "deer.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Deer",
    hover_title: "Deer",
    link_url: "/hover-grid-images/circle_grid_images/deer.png",
  },
  {
    picture_src: "denver.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Denver",
    hover_title: "Denver",
    link_url: "/hover-grid-images/circle_grid_images/denver.png",
  },
  {
    picture_src: "dragon.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Dragon",
    hover_title: "Dragon",
    link_url: "/hover-grid-images/circle_grid_images/dragon.png",
  },
  {
    picture_src: "eggs.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Eggs",
    hover_title: "Eggs",
    link_url: "/hover-grid-images/circle_grid_images/eggs.png",
  },
  {
    picture_src: "family.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Family",
    hover_title: "Family",
    link_url: "/hover-grid-images/circle_grid_images/family.png",
  },
  {
    picture_src: "flare.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Flare",
    hover_title: "Flare",
    link_url: "/hover-grid-images/circle_grid_images/flare.png",
  },
  {
    picture_src: "flower.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Pink",
    hover_title: "Pink",
    link_url: "/hover-grid-images/circle_grid_images/flower.png",
  },
  {
    picture_src: "frog.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Frog",
    hover_title: "Frog",
    link_url: "/hover-grid-images/circle_grid_images/frog.png",
  },
  {
    picture_src: "garibaldi.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Danes",
    hover_title: "Danes",
    link_url: "/hover-grid-images/circle_grid_images/garibaldi.png",
  },
  {
    picture_src: "happy.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Willow",
    hover_title: "Willow",
    link_url: "/hover-grid-images/circle_grid_images/happy.png",
  },
  {
    picture_src: "hello_kitty.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Hello",
    hover_title: "Hello",
    link_url: "/hover-grid-images/circle_grid_images/hello_kitty.png",
  },
  {
    picture_src: "jelly.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Jelly",
    hover_title: "Jelly",
    link_url: "/hover-grid-images/circle_grid_images/jelly.png",
  },
  {
    picture_src: "kiwi.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Kiwi",
    hover_title: "Kiwi",
    link_url: "/hover-grid-images/circle_grid_images/kiwi.png",
  },
  {
    picture_src: "like.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Like",
    hover_title: "Like",
    link_url: "/hover-grid-images/circle_grid_images/like.png",
  },
  {
    picture_src: "longs.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Longs Peak",
    hover_title: "Longs Peak",
    link_url: "/hover-grid-images/circle_grid_images/longs.png",
  },
  {
    picture_src: "maggie.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Maggie",
    hover_title: "Maggie",
    link_url: "/hover-grid-images/circle_grid_images/maggie.png",
  },
  {
    picture_src: "minnekhada.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Minnekhada",
    hover_title: "Minnekhada",
    link_url: "/hover-grid-images/circle_grid_images/minnekhada.png",
  },
  {
    picture_src: "monster.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Monster",
    hover_title: "Monster",
    link_url: "/hover-grid-images/circle_grid_images/monster.png",
  },
  {
    picture_src: "mud.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Willow",
    hover_title: "Willow",
    link_url: "/hover-grid-images/circle_grid_images/mud.png",
  },
  {
    picture_src: "new_west.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "New West",
    hover_title: "New West",
    link_url: "/hover-grid-images/circle_grid_images/new_west.png",
  },
  {
    picture_src: "newt.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Newt",
    hover_title: "Newt",
    link_url: "/hover-grid-images/circle_grid_images/newt.png",
  },
  {
    picture_src: "nuke.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Nuke",
    hover_title: "Nuke",
    link_url: "/hover-grid-images/circle_grid_images/nuke.png",
  },
  {
    picture_src: "pigs.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Bacon",
    hover_title: "Bacon",
    link_url: "/hover-grid-images/circle_grid_images/pigs.png",
  },
  {
    picture_src: "pkd.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "PKD",
    hover_title: "PKD",
    link_url: "/hover-grid-images/circle_grid_images/pkd.png",
  },
  {
    picture_src: "plane.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "NZ Air",
    hover_title: "NZ Air",
    link_url: "/hover-grid-images/circle_grid_images/plane.png",
  },
  {
    picture_src: "quarry.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Quarry",
    hover_title: "Quarry",
    link_url: "/hover-grid-images/circle_grid_images/quarry.png",
  },
  {
    picture_src: "ramp.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Ramp",
    hover_title: "Ramp",
    link_url: "/hover-grid-images/circle_grid_images/ramp.png",
  },
  {
    picture_src: "seymour.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Seymour",
    hover_title: "Seymour",
    link_url: "/hover-grid-images/circle_grid_images/seymour.png",
  },
  {
    picture_src: "sfu.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "SFU",
    hover_title: "SFU",
    link_url: "/hover-grid-images/circle_grid_images/sfu.png",
  },
  {
    picture_src: "shrooms.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Shrooms",
    hover_title: "Shrooms",
    link_url: "/hover-grid-images/circle_grid_images/shrooms.png",
  },
  {
    picture_src: "sky_train.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Tower",
    hover_title: "Tower",
    link_url: "/hover-grid-images/circle_grid_images/sky_train.png",
  },
  {
    picture_src: "smile.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Maggie",
    hover_title: "Maggie",
    link_url: "/hover-grid-images/circle_grid_images/smile.png",
  },
  {
    picture_src: "snow_lake.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Snow Lake",
    hover_title: "Snow Lake",
    link_url: "/hover-grid-images/circle_grid_images/snow_lake.png",
  },
  {
    picture_src: "st_marks.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "St. Marks",
    hover_title: "St. Marks",
    link_url: "/hover-grid-images/circle_grid_images/st_marks.png",
  },
  {
    picture_src: "sun.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Maggie",
    hover_title: "Maggie",
    link_url: "/hover-grid-images/circle_grid_images/sun.png",
  },
  {
    picture_src: "the_lions.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "The Lions",
    hover_title: "The Lions",
    link_url: "/hover-grid-images/circle_grid_images/the_lions.png",
  },
  {
    picture_src: "tiger.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Tiger",
    hover_title: "Tiger",
    link_url: "/hover-grid-images/circle_grid_images/tiger.png",
  },
  {
    picture_src: "tree.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Coquitlam",
    hover_title: "Coquitlam",
    link_url: "/hover-grid-images/circle_grid_images/tree.png",
  },
  {
    picture_src: "tree_bears.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Bears",
    hover_title: "Bears",
    link_url: "/hover-grid-images/circle_grid_images/tree_bears.png",
  },
  {
    picture_src: "two_trees.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Trees",
    hover_title: "Trees",
    link_url: "/hover-grid-images/circle_grid_images/two_trees.png",
  },
  {
    picture_src: "wet_maggie.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Maggie",
    hover_title: "Maggie",
    link_url: "/hover-grid-images/circle_grid_images/wet_maggie.png",
  },
  {
    picture_src: "whale.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Rock",
    hover_title: "Rock",
    link_url: "/hover-grid-images/circle_grid_images/whale.png",
  },
  {
    picture_src: "white.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Flower",
    hover_title: "Flower",
    link_url: "/hover-grid-images/circle_grid_images/white.png",
  },
  {
    picture_src: "willow.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Willow",
    hover_title: "Willow",
    link_url: "/hover-grid-images/circle_grid_images/willow.png",
  },
  {
    picture_src: "dennet.png",
    picture_width: CIRCLE_WIDTH,
    picture_height: CIRCLE_HEIGHT,
    normal_title: "Dennet",
    hover_title: "Dennet",
    link_url: "/hover-grid-images/circle_grid_images/dennet.png",
  },
];

circle_data = {
  //onResize: place_circle_menu,
  //hover_grid_id: "circle_grid_id",
  hover_grid_row_height: CIRCLE_HEIGHT,
  pictureTile_text: circle_clip_grid_data,
  pictureTile_list: circle_clip_grid_data,
  max_rows: 4,
  tile_edge: 2,
  ver_text_edge: 10,
  filter_hover: "grayscale(1)",
  filter_normal: "none",
  hover_area: "south",
  normal_area: "south",

  shuffle_seconds: 5,
  normal_style: {
    fontFamily: "Helvetica Neue Light, HelveticaNeue-Light, Helvetica Neue, Calibri, Helvetica, Arial",
    fontSize: "17px",
    color: "white",
  },
  hover_style: {
    fontFamily: "Helvetica Neue Light, HelveticaNeue-Light, Helvetica Neue, Calibri, Helvetica, Arial",
    fontSize: "16px",
    color: "black",
    fontWeight: "bold",
  },
};