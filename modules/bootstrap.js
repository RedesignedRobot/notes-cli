const ui = require("./ui");
const director = require("./director");

const readline = require("readline-sync");

function launch() {
  ui.mainMenu();
  var choice = readline.question("");
  if (choice > 0 && choice < 5) {
    return choice;
  } else if (choice == 5) {
    director.cleanClose();
  } else {
    director.dirtyClose("Please select a valid choice 1..5");
  }
}

module.exports = {
  launch
};
