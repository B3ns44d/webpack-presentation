require("../css/style.css");
require("../css/app2.css");

console.log("Running app2...");

const content = require("./content.js");
const log = require("./log.js");

log("At app2...");
document.write(content.app2);
