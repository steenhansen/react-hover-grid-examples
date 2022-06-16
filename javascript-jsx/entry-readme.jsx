import ReactHoverGrid from "react-hover-grid";

function readmeHover(hover_data, container_id) {
  ReactDOM.render(<ReactHoverGrid {...hover_data} />, document.getElementById(container_id));
}

window.readmeHover = readmeHover;
export default readmeHover;
