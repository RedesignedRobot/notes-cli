const ui = require("./ui");

function dirtyClose(text) {
  console.clear();
  ui.err("Application terminated", text);
  process.exit(1);
}

function cleanClose() {
  ui.print("Bye");
  process.exit(0);
}

module.exports = {
    dirtyClose,
    cleanClose,
}