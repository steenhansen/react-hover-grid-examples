"use strict"; // web page
const fs = require("fs");
let flat_menu = fs.readFileSync("webpage-server/flat-menu.html");

module.exports = function (req, res) {
  const circle_clip_grid_html = `
 <!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Circle Clip</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script crossorigin src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>
  </head>
  <body style="background-image: url('sq.png')">

  ${flat_menu}

    <br />
    Change the width of the browser to see the React-Hover-Grids resize and adjust the images. The
    <a href="https://www.npmjs.com/package/react-hover-grid">NPM package</a> has more information.
    <br />

    <ul id="circle-menu" style="display:none">
      <li><a href="/">Home</a></li>
      <li><a href="resizable-splitter">Re-Sizable</a></li>
      <li><a href="shrink-grow">Shrink &amp; Grow</a></li>
      <li><a href="npm-example">NPM Example</a></li>
      <li><a href="readme-sample">Readme Sample</a></li>
      <li><a href="ssr-no-js">No Js SSR</a></li>
      <li><a href="circle-clip">Circles</a></li>
    </ul>

    <br />
    Image 2,2 is static so that the menu can be displayed. Images are cycled through randomly. Images have a black and white filter on hover.

    <script src="jsx_circle.js"></script>
    <div id="circle_grid_id">abc----123</div>
    <script src="data-circle.js"></script>
    <script>
      circleHover(circle_data, "circle_grid_id", "circle-menu");
    </script>

    <link rel="stylesheet" href="style-circle.css" />

  </body>
</html>
`;

  res.send(circle_clip_grid_html);
};
