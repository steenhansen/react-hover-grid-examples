"use strict";

const fs = require("fs");
let flat_menu = fs.readFileSync("webpage-server/flat-menu.html");

module.exports = function (req, res) {
  const npm_example_grid_html = `
      <!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>NPM Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <script src="data-npm.js"></script>

    <link rel="stylesheet" href="style-npm.css" />


${flat_menu}



    <div style="clear: both">
      Change the width of the browser to see the React-Hover-Grids resize and adjust the images. The
      <a href="https://www.npmjs.com/package/react-hover-grid">NPM package</a> has more information.
    </div>

    <div id="npm_grid_id" style="width: 100%">&nbsp;</div>

    The first three images have image filters on hover, gradients on text, and gradients on hover text. The other images have links to Google maps.

    <script crossorigin src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>

    <script src="jsx_npm.js"></script>

    <script>
      npmHover(npm_data, "npm_grid_id");
    </script>
  </body>
</html>
`;
  res.send(npm_example_grid_html);
};
