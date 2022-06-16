"use strict";

import SplitPane from "react-split-pane";
import ReactHoverGrid from "react-hover-grid";

const LEFT_PANE_WIDTH = 400;
const PANE_MARGIN = 20;

function resizePubSub_splitterX(resize_container_id, resizable_splitter_grid_left_id, resizable_splitter_grid_right_id) {
  let current_widths = {
    [resizable_splitter_grid_left_id]: LEFT_PANE_WIDTH,
    [resizable_splitter_grid_right_id]: LEFT_PANE_WIDTH,
  };
  let subscribe_to_width = {};
  return {
    subscribeToWidthChange: function (subscribe_function, originator_id) {
      console.assert(typeof subscribe_function === "function", "resizable_splitter_grid_entry subscribe_function not a function");
      console.assert(typeof originator_id === "string", "resizable_splitter_grid_entry  originator_id not a string");
      subscribe_to_width[originator_id] = subscribe_function;
    },
    publishWidthChange: function () {
      let left_width = 0;
      let right_width = 0;

      const left_pane_width = ReactHoverGrid.getComputedWidth(resizable_splitter_grid_left_id);
      if (left_pane_width !== null) {
        const right_pane_width = ReactHoverGrid.getComputedWidth(resizable_splitter_grid_right_id);
        if (left_pane_width > PANE_MARGIN) {
          left_width = left_pane_width - PANE_MARGIN;
        }
        if (right_pane_width > PANE_MARGIN) {
          right_width = right_pane_width - PANE_MARGIN;
        }
        current_widths = {
          [resizable_splitter_grid_left_id]: left_width,
          [resizable_splitter_grid_right_id]: right_width,
        };
        for (const grid_id in subscribe_to_width) {
          const containerResize_func = subscribe_to_width[grid_id];
          containerResize_func(current_widths[grid_id]);
        }
      }
      const splitter_container = document.getElementById(resize_container_id);
      const splitter_height = splitter_container.style.height;
      const div_data_reactroot = splitter_container.firstElementChild;
      const div_class_SplitPane = div_data_reactroot.firstElementChild;
      div_class_SplitPane.style.height = splitter_height;
    },
  };
}
///////////
function resizeSplit(left_data, right_data, resize_container_id) {
  const left_id = left_data.hover_grid_id;
  const right_id = right_data.hover_grid_id;
  const resizePubSub_splitter = resizePubSub_splitterX(resize_container_id, left_id, right_id);
  left_data.resize_pub_sub = resizePubSub_splitter;
  right_data.resize_pub_sub = resizePubSub_splitter;

  ReactDOM.render(
    <div>
      <SplitPane split="vertical" defaultSize={LEFT_PANE_WIDTH} minSize={50} maxSize={-75} onChange={resizePubSub_splitter.publishWidthChange}>
        <div id={left_id}>
          <ReactHoverGrid {...left_data} />
        </div>
        <div id={right_id} style={{ marginLeft: "20px" }}>
          <ReactHoverGrid {...right_data} />
        </div>
      </SplitPane>
    </div>,
    document.getElementById(resize_container_id)
  );
}

window.resizeSplit = resizeSplit;
export default resizeSplit;
