"use strict"; // web page

const fs = require("fs");
let flat_menu = fs.readFileSync("webpage-server/flat-menu.html");

module.exports = function (req, res) {
  const readme_sample_grid_html = `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>NPM Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    ${flat_menu}

    <div style="clear: both">
      Change the width of the browser to see the React-Hover-Grids resize and adjust the images. The
      <a href="https://www.npmjs.com/package/react-hover-grid">NPM package</a> has more information.
    </div>



    <div style="clear: both">&nbsp;</div>
    <br />
    
    <script crossorigin src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
    <script crossorigin src="https://unpkg.com/prop-types@15.6.2/prop-types.js"></script>

    <link rel="stylesheet" href="style-readme.css" />
    
    <script src="jsx_readme.js"></script>
    <script src="data-readme.js"></script>
    <div id="readme_grid_id">abc----123</div>

    <script>
      readmeHover(readme_data, "readme_grid_id");
    </script>


  </body>
</html>
  
  
  `;

  res.send(readme_sample_grid_html);
};
