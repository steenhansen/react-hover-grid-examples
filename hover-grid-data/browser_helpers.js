'use strict'



function getComputedStyleById(elem_id){
    const element = document.getElementById(elem_id)
    const elem_style = window.getComputedStyle(element)
    return elem_style
}

function getBoundingClientRectById(elem_id){
    const element = document.getElementById(elem_id)
    const rect = element.getBoundingClientRect()
    return rect
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
module.exports = {
   getComputedStyleById:getComputedStyleById
    ,getBoundingClientRectById:getBoundingClientRectById
   , mergeWidthsWithText: mergeWidthsWithText }