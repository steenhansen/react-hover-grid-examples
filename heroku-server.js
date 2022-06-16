// called from package.json by Heroku

/*

https://devcenter.heroku.com/articles/nodejs-support#package-installation

In settings/Reveal Config Vars:

  NPM_CONFIG_PRODUCTION=true

To stop Heroku from building the devDependencies. Heroku crashes on 

  gulp-responsive: 3.0.1
    sharp: "^0.23.1"

  gulp-response is used in 'gulp tiles' and 'gulp uris' to deal with images

*/
const port_number = process.env.PORT || HTTP_PORT;

require("./webpage-server/express-pages.js")(port_number);
