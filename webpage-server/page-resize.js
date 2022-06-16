"use strict";

const fs = require("fs");
let flat_menu = fs.readFileSync("webpage-server/flat-menu.html");

module.exports = function (req, res) {
  const resizable_splitter_grid_html = `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Re-Sizable</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link href="style-resize.css" rel="stylesheet" />
  </head>
  <body>
  ${flat_menu}
  
    <div style="clear: both">
      Change the width of the browser to see the React-Hover-Grids resize and adjust the images. The
      <a href="https://www.npmjs.com/package/react-hover-grid">NPM package</a> has more information.
       Drag vertical gray divider left and right.
    </div>
   <br />   <br />
    <div id="resize_grid_id" style="width: 100px; margin: 0 auto; height: 444px">&nbsp;</div>
    <br />
    A <a href="https://github.com/tomkp/react-split-pane" target="_blank">react-split-pane</a> splits two resizable React Hover Grids - Publish/Subscribe is
    used to match the React Hover Grids' width to their containers

    <script crossorigin src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>

    <script src="jsx_resize.js"></script>
    <script src="data-resize.js"></script>

    <script>
      resizeSplit(left_data, right_data, "resize_grid_id");
    </script>
  </body>
</html>

              `;
  res.send(resizable_splitter_grid_html);
};
