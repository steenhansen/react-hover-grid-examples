"use strict";

// node lambda-all.js 
  const fs = require("fs");
let circle_css = fs.readFileSync("public/style-circle.css");
let inline_css = fs.readFileSync("public/inline-images.css");
let npm_css = fs.readFileSync("public/style-npm.css");
let readme_css = fs.readFileSync("public/style-readme.css");
let resize_css = fs.readFileSync("public/style-resize.css");

let common_js = fs.readFileSync("public/jsx_common.js");
let circle_js = fs.readFileSync("public/data-circle.js");
let npm_js = fs.readFileSync("public/data-npm.js");
let readme_js = fs.readFileSync("public/data-readme.js");
let resize_js = fs.readFileSync("public/data-resize.js");
let shrink_js = fs.readFileSync("public/data-shrink.js");





  let ssr_entry = require("./javascript-compiled/entry-nojs.js");
  let ssr_with_js_grid_html = ssr_entry.ssr_js_grid_ReactHoverGrid();
  const no_images = ssr_with_js_grid_html.replaceAll("<img ", "<link "); // to show initial look without slowing done connection

  const as_one_html = `
 <!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>React-Hover-Grid</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script crossorigin src="https://unpkg.com/react@16.0.0/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>
  </head>
  <body style="background-image: url('https://d3rprn9azbpq5l.cloudfront.net/sq.png')">

    <br />
    Change the width of the browser to see the React-Hover-Grids resize and adjust the images. The
    <a href="https://www.npmjs.com/package/react-hover-grid">NPM package</a> has more information.
    <br />



    <ul id="circle-menu" style="display:none">
       <br/>
      <li><a href="https://www.npmjs.com/package/react-hover-grid">NPM</a></li>
      <br/>
      <li><a href="https://react-hover-grid.onrender.com/">150sec to start website</a></li>
      <br/>
      <li><a href="https://github.com/steenhansen/react-hover-grid-examples">GitHub</a></li>
    </ul>
    <br />


<style>${circle_css}</style>
<style>${inline_css}</style>
<style>${resize_css}</style>
<style>${readme_css}</style>
<style>${npm_css}</style>

<script>${common_js}</script>
<script>${circle_js}</script>
<script>${npm_js}</script>
<script>${readme_js}</script>
<script>${resize_js}</script>
<script>${shrink_js}</script>



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

 


  fs.writeFile("lambda-hover.html", as_one_html, err=>console.log(err));
