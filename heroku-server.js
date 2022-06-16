// called from package.json by Heroku

const port_number = process.env.PORT || HTTP_PORT;

require("./webpage-server/express-pages.js")(port_number);
