// node start-webserver 5001

const first_arg = process.argv[2];
let port_number;
if (Number.isInteger(Number(first_arg))) {
  port_number = Number(first_arg);
} else {
  port_number = 5002;
}

require("./webpage-server/express-pages.js")(port_number);
