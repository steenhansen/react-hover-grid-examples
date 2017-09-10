'use strict'

function grid_menu(current_grid){
    const number_pages = 5
    const li_width =100/number_pages

const menu_html =`

<style>
#grid-menu {
    margin: 0;
    padding: 0;
    font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial;
}

#grid-menu li {
    display: block;
    float: left;
    margin: 0;
    width: ${li_width}%;
    background-color: #eee;
    padding: 10px;
    box-sizing: border-box;
}

#grid-menu li a {
  color:red;
}
#grid-menu li a:hover {
  color:yellow;
}

#grid-menu li#${current_grid} a {
  color:green;
}
#grid-menu li#${current_grid} a:hover {
  color:purple;
  cursor:default;
  text-decoration:none; 
  font-weight:bold;
}

</style>
    <ul id="grid-menu">
      <li id="tiny_grid"><a href="tiny_grid">Tiny</a></li>
      <li id="city_grid"><a href="city_grid">City</a></li>
    </ul>

 <div style="clear:both">&nbsp;</div>
`
return menu_html
}

function mergeWidthsWithText(grid_pictureTiles, grid_image_widths, dir_name) {
    let image_not_copied = []
    for (let picture_src in grid_image_widths) {
        image_not_copied[picture_src] = true
    }
    let pictureTile_widths = []
    for (let i = 0; i < grid_pictureTiles.length; i++) {
        var picture_src = grid_pictureTiles[i].picture_src
        if (typeof grid_image_widths[picture_src] !== 'undefined') {
            var new_picture_tile = Object.assign({}, grid_pictureTiles[i], grid_image_widths[picture_src])
            pictureTile_widths.push(new_picture_tile)
            image_not_copied[picture_src] = false
        } else {
            if (process.env.NODE_ENV === 'development') {
                console.log('Image', picture_src, 'does not exist in /public/hover-grid-images/' + dir_name)
            }
        }
    }
    for (let picture_src in grid_image_widths) {
        if (image_not_copied[picture_src]) {
            const picture_width = grid_image_widths[picture_src].picture_width
            const picture_height = grid_image_widths[picture_src].picture_height
            const no_text_image = {
                picture_src: picture_src
              , picture_width: picture_width
               , picture_height: picture_height
            }
            pictureTile_widths.push(no_text_image)
        }
    }
    return pictureTile_widths
}
module.exports = { grid_menu:grid_menu
    ,mergeWidthsWithText: mergeWidthsWithText }