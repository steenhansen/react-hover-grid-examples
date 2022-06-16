"use strict"; // web page

const fs = require("fs");
let flat_menu = fs.readFileSync("webpage-server/flat-menu.html");

module.exports = function (req, res) {
  let ssr_entry = require("../javascript-compiled/entry-nojs.js");
  let ssr_with_js_grid_html = ssr_entry.ssr_js_grid_ReactHoverGrid();
  const no_images = ssr_with_js_grid_html.replaceAll("<img ", "<link "); // to show initial look without slowing done connection

  const circle_clip_grid_html = `
 <!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>React-Hover-Grid</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script crossorigin src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>
        <link rel="stylesheet" href="inline-images.css" />
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
   
<link rel="stylesheet" href="style-circle.css" />
<link rel="stylesheet" href="style-npm.css" />
<link rel="stylesheet" href="style-readme.css" />
<link rel="stylesheet" href="style-resize.css" />






<script src="jsx_common.js"></script>
<scr ipt src="jsx_circle.js"></script>
<scr ipt src="jsx_npm.js"></script>
<scr ipt src="jsx_readme.js"></script>
<scr ipt src="jsx_resize.js"></script>
<scr ipt src="jsx_shrink.js"></script>



<div id="circle_grid_id">abc----123</div>



<hr style="clear:both"><hr style="clear:both">


    <div style="background-color: #eee; padding: 20px">
      <div style="overflow: hidden">
        <div id="s" style="width: 100%">${no_images}</div>
      </div>
    </div>
    <div id="no-js-yet" style="background-color: #f00">This Hover-Grid has no Javascript.
     The top grid is the low res SSR delivered grid with data URI images inside css, 
     whilst below is the same grid after high rez images have loaded over the fuzzy pictures.</div>

    <br />

    <div id="s" style="width: 100%">${ssr_with_js_grid_html}</div>



<hr style="clear:both"><hr style="clear:both">
  <div id="npm_grid_id">abc----123</div>

<hr style="clear:both"><hr style="clear:both">
  <div id="resize_grid_id" style="width: 100px; margin: 0 auto; height: 444px">&nbsp;</div>

<hr style="clear:both"><hr style="clear:both">
  <div id="readme_grid_id">abc----123</div>

<hr style="clear:both"><hr style="clear:both">
  <div id="shrink_grid_id">abc----123</div>



<script src="data-circle.js"></script>
<script src="data-npm.js"></script>
<script src="data-readme.js"></script>
<script src="data-resize.js"></script>
<script src="data-shrink.js"></script>

<script>
  circleHover(circle_data, "circle_grid_id", "circle-menu");
  npmHover(npm_data, "npm_grid_id");
  readmeHover(readme_data, "readme_grid_id");
  resizeSplit(left_data, right_data, "resize_grid_id");
  npmShrinkGrow(shrink_data, "shrink_grid_id");
</script>






  </body>
</html>
`;

  res.send(circle_clip_grid_html);
};
