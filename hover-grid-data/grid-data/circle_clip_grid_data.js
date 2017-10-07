'use strict'

const circle_clip_grid_data = [

  {
    picture_src: 'menu.png'
    , static_col: 1              // N.B. Ie will shrink to 1 circle image wide
    , static_row: 2
  }
  , {
    picture_src: 'bat.png'
    , normal_title: 'Bat'
    , hover_title: 'Bat'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/bat.jpg'
  }, {
    picture_src: 'bees.png'
    , normal_title: 'Bees'
    , hover_title: 'Bees'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/sister_bees.jpg'
  }, {
    picture_src: 'bridge.png'
    , normal_title: 'Bridge'
    , hover_title: 'Bridge'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/snow_bridge.jpg'
  }, {
    picture_src: 'buntzen.png'
    , normal_title: 'Buntzen'
    , hover_title: 'Buntzen'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/buntzen_lake.jpg'
  }, {
    picture_src: 'car.png'
    , normal_title: 'Surfing'
    , hover_title: 'Surfing'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/carSurfing.jpg'
  }, {
    picture_src: 'car_dog.png'
    , normal_title: 'Cato'
    , hover_title: 'Cato'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/car_dog.jpg'
  }, {
    picture_src: 'cato.png'
    , normal_title: 'Cato'
    , hover_title: 'Cato'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/cato.jpg'
  }, {
    picture_src: 'cave.png'
    , normal_title: 'Cave'
    , hover_title: 'Cave'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/cave.jpg'
  }
  , {
    picture_src: 'cranes.png'
    , normal_title: 'Cranes'
    , hover_title: 'Cranes'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/cranes.jpg'
  }
  , {
    picture_src: 'deer.png'
    , normal_title: 'Deer'
    , hover_title: 'Deer'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/deer.jpg'
  }
  , {
    picture_src: 'denver.png'
    , normal_title: 'Denver'
    , hover_title: 'Denver'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/golden_colorado.jpg'
  }
  , {
    picture_src: 'dragon.png'
    , normal_title: 'Dragon'
    , hover_title: 'Dragon'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/dragon.jpg'
  }
  , {
    picture_src: 'eggs.png'
    , normal_title: 'Eggs'
    , hover_title: 'Eggs'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/robin_eggs.jpg'
  }
  , {
    picture_src: 'family.png'
    , normal_title: 'Family'
    , hover_title: 'Family'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/hansenGiles.jpg'
  }
  , {
    picture_src: 'flare.png'
    , normal_title: 'Flare'
    , hover_title: 'Flare'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/trees_snow_sun.jpg'
  }
  , {
    picture_src: 'flower.png'
    , normal_title: 'Pink'
    , hover_title: 'Pink'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/pink_flower.jpg'
  }
  , {
    picture_src: 'frog.png'
    , normal_title: 'Frog'
    , hover_title: 'Frog'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/frog.jpg'
  }
  , {
    picture_src: 'garibaldi.png'
    , normal_title: 'Danes'
    , hover_title: 'Danes'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/lake_garabaldi.jpg'
  }
  , {
    picture_src: 'happy.png'
    , normal_title: 'Willow'
    , hover_title: 'Willow'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/wheres_bugs.jpg'
  }
  , {
    picture_src: 'hello_kitty.png'
    , normal_title: 'Hello'
    , hover_title: 'Hello'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/hello_kitty_skytrain.jpg'
  }
  , {
    picture_src: 'jelly.png'
    , normal_title: 'Jelly'
    , hover_title: 'Jelly'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/weird_eggs.jpg'
  }
  , {
    picture_src: 'kiwi.png'
    , normal_title: 'Kiwi'
    , hover_title: 'Kiwi'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/3_kiwi_airforce.jpg'
  }
  , {
    picture_src: 'like.png'
    , normal_title: 'Like'
    , hover_title: 'Like'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/6_i_like_coffee.jpg'
  }
  , {
    picture_src: 'longs.png'
    , normal_title: 'Longs Peak'
    , hover_title: 'Longs Peak'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/longs_peak.jpg'
  }
  , {
    picture_src: 'maggie.png'
    , normal_title: 'Maggie'
    , hover_title: 'Maggie'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/alouette_mtn.jpg'
  }
  , {
    picture_src: 'minnekhada.png'
    , normal_title: 'Minnekhada'
    , hover_title: 'Minnekhada'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/minnekhada.jpg'
  }
  , {
    picture_src: 'monster.png'
    , normal_title: 'Monster'
    , hover_title: 'Monster'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/wood_monster.jpg'
  }
  , {
    picture_src: 'mud.png'
    , normal_title: 'Willow'
    , hover_title: 'Willow'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/this_little_piggy.jpg'
  }
  , {
    picture_src: 'new_west.png'
    , normal_title: 'New West'
    , hover_title: 'New West'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/new_west.jpg'
  }
  , {
    picture_src: 'newt.png'
    , normal_title: 'Newt'
    , hover_title: 'Newt'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/frozen_newt.jpg'
  }
  , {
    picture_src: 'nuke.png'
    , normal_title: 'Nuke'
    , hover_title: 'Nuke'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/9_denver_nukes.jpg'
  }
  , {
    picture_src: 'pigs.png'
    , normal_title: 'Bacon'
    , hover_title: 'Bacon'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/nz_pigs.jpg'
  }
  , {
    picture_src: 'pkd.png'
    , normal_title: 'PKD'
    , hover_title: 'PKD'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/7_pkd_tombstone.jpg'
  }
  , {
    picture_src: 'plane.png'
    , normal_title: 'NZ Air'
    , hover_title: 'NZ Air'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/3_kiwi_airforce.jpg'
  }
  , {
    picture_src: 'quarry.png'
    , normal_title: 'Quarry'
    , hover_title: 'Quarry'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/old_quary_colorado_springs.jpg'
  }
  , {
    picture_src: 'ramp.png'
    , normal_title: 'Ramp'
    , hover_title: 'Ramp'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/fat_bastard.jpg'
  }
  , {
    picture_src: 'seymour.png'
    , normal_title: 'Seymour'
    , hover_title: 'Seymour'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/buntzen_lake.jpg'
  }
  , {
    picture_src: 'sfu.png'
    , normal_title: 'SFU'
    , hover_title: 'SFU'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/20150731_173406.jpg'
  }
  , {
    picture_src: 'shrooms.png'
    , normal_title: 'Shrooms'
    , hover_title: 'Shrooms'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/mushrooms.jpg'
  }
  , {
    picture_src: 'sky_train.png'
    , normal_title: 'Tower'
    , hover_title: 'Tower'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/new_west.jpg'
  }
  , {
    picture_src: 'smile.png'
    , normal_title: 'Maggie'
    , hover_title: 'Maggie'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/maggie.jpg'
  }
  , {
    picture_src: 'snow_lake.png'
    , normal_title: 'Snow Lake'
    , hover_title: 'Snow Lake'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/snow_lake_colorado.jpg'
  }
  , {
    picture_src: 'st_marks.png'
    , normal_title: 'St. Marks'
    , hover_title: 'St. Marks'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/20150930_154416.jpg'
  }
  , {
    picture_src: 'sun.png'
    , normal_title: 'Maggie'
    , hover_title: 'Maggie'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/_maggie_sun.jpg'
  }
  , {
    picture_src: 'the_lions.png'
    , normal_title: 'The Lions'
    , hover_title: 'The Lions'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/the_lions.jpg'
  }
  , {
    picture_src: 'tiger.png'
    , normal_title: 'Tiger'
    , hover_title: 'Tiger'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/tiger.jpg'
  }
  , {
    picture_src: 'tree.png'
    , normal_title: 'Coquitlam'
    , hover_title: 'Coquitlam'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/white_rock.jpg'
  }
  , {
    picture_src: 'tree_bears.png'
    , normal_title: 'Bears'
    , hover_title: 'Bears'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/tree_bears.jpg'
  }
  , {
    picture_src: 'two_trees.png'
    , normal_title: 'Trees'
    , hover_title: 'Trees'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/two_trees.jpg'
  }
  , {
    picture_src: 'wet_maggie.png'
    , normal_title: 'Maggie'
    , hover_title: 'Maggie'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/20160507_120911.jpg'
  }
  , {
    picture_src: 'whale.png'
    , normal_title: 'Rock'
    , hover_title: 'Rock'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/a_rock_called_the_whale_sm.jpg'
  }
  , {
    picture_src: 'white.png'
    , normal_title: 'Flower'
    , hover_title: 'Flower'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/white_flower.jpg'
  }
  , {
    picture_src: 'willow.png'
    , normal_title: 'Willow'
    , hover_title: 'Willow'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/dog_head.jpg'
  }
  , {
    picture_src: 'dennet.png'
    , normal_title: 'Dennet'
    , hover_title: 'Dennet'
    , link_url: '/hover-grid-images/circle_clip_grid_images/original_images/dennet_lake.jpg'
  }
]

function onResize () {
  const static_tile = document.getElementById('the_static_tile')
  if (static_tile) {
    document.getElementById('circle-menu').style.display = 'block'
    const image_rect = static_tile.getBoundingClientRect()
    const circle_menu = document.getElementById('circle-menu')
    const menu_style = circle_menu.getBoundingClientRect()
    const half_image_width = image_rect.width / 2
    const half_menu_width = menu_style.width / 2
    const menu_left = (window.pageXOffset + image_rect.left + half_image_width - half_menu_width ) + 'px'
    const menu_top = (window.pageYOffset + image_rect.top + 2) + 'px'
    const current_top = document.getElementById('circle-menu').style.top
    const current_left = document.getElementById('circle-menu').style.left
    if (current_top !== menu_top || current_left !== menu_left) {
      document.getElementById('circle-menu').style.top = menu_top
      document.getElementById('circle-menu').style.left = menu_left
    }
  }
}

module.exports = {
  hover_grid_id: 'circle_clip_grid_id'
  , hover_grid_row_height: 150
  , pictureTile_text: circle_clip_grid_data
  , max_rows: 4
  , tile_edge: 2
  , ver_text_edge: 10
  , filter_hover: 'grayscale(1)'
  , filter_normal: 'none'
  , hover_area: 'south'
  , normal_area: 'south'

  , onResize: onResize

  , shuffle_seconds: 5
  , normal_style: {
    fontFamily: "Helvetica Neue Light, HelveticaNeue-Light, Helvetica Neue, Calibri, Helvetica, Arial"
    , fontSize: '17px'
    , color: 'white'
  }
  , hover_style: {
    fontFamily: "Helvetica Neue Light, HelveticaNeue-Light, Helvetica Neue, Calibri, Helvetica, Arial"
    , fontSize: '16px'
    , color: 'black'
    , fontWeight: 'bold'
  }

}
