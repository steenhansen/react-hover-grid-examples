"use strict";

const fs = require("fs");
let flat_menu = fs.readFileSync("webpage-server/flat-menu.html");

module.exports = function (req, res) {
  let ssr_entry = require("../javascript-compiled/entry-nojs.js");
  let ssr_with_js_grid_html = ssr_entry.ssr_js_grid_ReactHoverGrid();
  const no_images = ssr_with_js_grid_html.replaceAll("<img ", "<link ");

  const no_js_srr_html = `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>No Js SSR</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="inline-images.css" />
  </head>
  <body>
  ${flat_menu}
    To actually see the small "Data URLs" images upgrade to normal large images in action on the lower grid, change
     the throttling to 'Regular 3G' in the 'Network' tab.
    <div style="clear: both">
      Change the width of the browser to see the React-Hover-Grids resize and adjust the images via css. The
      <a href="https://www.npmjs.com/package/react-hover-grid">NPM package</a> has more information.
    </div>

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

    <div style="clear:both"></div>
    Screen sizes supported in [412, 414, 480, 568, 640, 667, 720, 732, 736, 768, 800, 900, 1024, 1050, 1080, 1200, 1280, 1360, 1366, 1440, 1600, 1680,
    1920]


  </body>
</html>

            `;
  res.send(no_js_srr_html);
};
