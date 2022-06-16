// npx webpack-cli

// npx webpack-cli --node-env 'development'

let the_mode = "production";

let optimization = { minimize: false }; ///   !!!!!!!!!!!!!!!!!

if (process.env.NODE_ENV === "development") {
  the_mode = "development";
  optimization = { minimize: false };
}

const path = require("path");
const css_loader = { test: /\.css$/, use: "css-loader" };

const image_loader = {
  test: /\.(png|jpg|gif)$/i,
  use: [
    {
      loader: "url-loader",
      options: {
        limit: 8192,
      },
    },
  ],
};

var react_cdns = {
  react: "React",
  "react-dom": "ReactDOM",
  "prop-types": "PropTypes",
};

var webpack_files = {
  jsx_circle: "/javascript-compiled/entry-circle.js",
  jsx_common: "/javascript-compiled/entry-common.js",
  jsx_readme: "/javascript-compiled/entry-readme.js",
  jsx_npm: "/javascript-compiled/entry-npm.js",
  jsx_resize: "/javascript-compiled/entry-resize.js",
  jsx_shrink: "/javascript-compiled/entry-shrink.js",
  jsx_nojs: "/javascript-compiled/entry-nojs.js",
};
var browser_files = {
  filename: "[name].js",
  path: path.resolve(__dirname, "public"),
};

module.exports = {
  entry: webpack_files,
  mode: the_mode,
  optimization: optimization,
  externals: react_cdns,
  output: browser_files,
  module: {
    rules: [image_loader, css_loader],
  },
  plugins: [],
};
