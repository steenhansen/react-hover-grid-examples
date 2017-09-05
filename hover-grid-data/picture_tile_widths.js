'use strict'

function mergeWidthsWithText (grid_pictureTiles, grid_image_widths, dir_name) {
  for (let picture_src in grid_image_widths) {
    grid_image_widths[picture_src]['not_copied'] = true
  }

  let pictureTile_widths = []
  for (let i = 0; i < grid_pictureTiles.length; i++) {
    var picture_src = grid_pictureTiles[i].picture_src
    if (typeof grid_image_widths[picture_src] !== 'undefined') {
      var new_picture_tile = Object.assign({}, grid_pictureTiles[i], grid_image_widths[picture_src])
      pictureTile_widths.push(new_picture_tile)
      grid_image_widths[picture_src]['not_copied'] = false
    } else {
      if (process.env.NODE_ENV === 'development') {
        console.log('Image', picture_src, 'does not exist in /public/hover-grid-images/' + dir_name)
      }
    }
  }

  for (let picture_src in grid_image_widths) {
    if (grid_image_widths[picture_src]['not_copied']) {
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

module.exports = {
  mergeWidthsWithText: mergeWidthsWithText
}
