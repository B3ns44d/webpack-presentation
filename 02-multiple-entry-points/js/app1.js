require("../css/style.css");

console.log("Running app1...");

const content = require("./content.js");
const log = require("./log.js");

log("At app1...");
document.write(content.app1);
