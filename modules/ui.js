const c = require("chalk");

function nl() {
  console.log("\n");
}

function err(text) {
  console.log("\n" + c.bgRed.bold("Error:") + c.inverse(" " + text + " \n"));
}

function warn(text) {
  console.log("\n" + c.bgRed.bold("Warning:") + c.inverse(" " + text + " \n"));
}

function print(text) {
  console.log(c.yellow.bold(String(text)));
}
function showMenu() {
  nl();
  console.log(c.cyan("Welcome! Please select and option."));
  console.log(c.green("1) Create a new note."));
  console.log(c.blue("2) View a note."));
  console.log(c.magenta("3) List all notes."));
  console.log(c.red("4) Delete a note."));
  console.log(c.white("5) Exit."));
  console.log(c.yellow("Please input choice.(1,2,3,4,5)"));
}

module.exports = {
  showMenu,
  err,
  warn,
  print
};
