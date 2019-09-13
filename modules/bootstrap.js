const ui = require("./ui");

const readline = require("readline-sync");

function launch() {
  ui.showMenu();
  var choice = readline.question("");
  if (choice > 0 && choice < 6) {
    return choice;
  } else {
    ui.err("Please select a valid choice 1..5");
    process.exit(0);
  }
}

module.exports = {
  launch
};
