import ReactHoverGrid from "react-hover-grid";

function npmHover(hover_data, npm_container_id) {
  hover_data.hover_grid_id = npm_container_id;
  const grid_id = hover_data.hover_grid_id;
  ReactDOM.render(<ReactHoverGrid {...hover_data} />, document.getElementById(grid_id));
}

window.npmHover = npmHover;
export default npmHover;
