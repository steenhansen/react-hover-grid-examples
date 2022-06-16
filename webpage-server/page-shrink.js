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

    <link href="style-shrink.css" rel="stylesheet" />
  </head>
  <body>

  ${flat_menu}

  
    <div style="clear: both">
      Change the width of the browser to see the React-Hover-Grids resize and adjust the images. The
      <a href="https://www.npmjs.com/package/react-hover-grid">NPM package</a> has more information.
    </div>

    <br />
Publish/Subscribe handles the growing and shrinking of this grid; very cpu intensive re-drawing.

    <script crossorigin src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>

    <script src="jsx_shrink.js"></script>
    <script src="data-shrink.js"></script>
    <div id="shrink_grid_id">abc----123</div>

    <script>
      npmShrinkGrow(shrink_data, "shrink_grid_id");
    </script>
   
  </body>
</html>

  `;
  res.send(resizable_splitter_grid_html);
};
