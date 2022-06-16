"use strict";

import ReactHoverGrid from "react-hover-grid";
import ReactDOM from "react-dom";

function circleHover(hover_data, circle_put_id, circle_menu_id) {
  const place_circle_menu = function onResize() {
    const static_tile = document.getElementById("the_static_tile");
    if (static_tile) {
      document.getElementById(circle_menu_id).style.display = "block";
      const image_rect = static_tile.getBoundingClientRect();
      const circle_menu = document.getElementById(circle_menu_id);
      const menu_style = circle_menu.getBoundingClientRect();
      const half_image_width = image_rect.width / 2;
      const half_menu_width = menu_style.width / 2;
      const menu_left = window.pageXOffset + image_rect.left + half_image_width - half_menu_width + "px";
      const menu_top = window.pageYOffset + image_rect.top + 12 + "px";
      const current_top = document.getElementById(circle_menu_id).style.top;
      const current_left = document.getElementById(circle_menu_id).style.left;
      if (current_top !== menu_top || current_left !== menu_left) {
        document.getElementById(circle_menu_id).style.top = menu_top;
        document.getElementById(circle_menu_id).style.left = menu_left;
      }
    }
  };

  hover_data.onResize = place_circle_menu;
  hover_data.hover_grid_id = circle_put_id;
  const grid_id = hover_data.hover_grid_id;

  ReactDOM.render(<ReactHoverGrid {...hover_data} />, document.getElementById(grid_id));
}

window.circleHover = circleHover;
export default circleHover;
