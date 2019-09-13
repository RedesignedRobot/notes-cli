const db = require("./db");
const readline = require("readline-sync");
const director = require("./director");

function navigate(choice) {
  if (choice === 1) {
    var noteTitle = readline.question("Note title : ");
    var noteBody = readline.question("Note body : ");

    if (noteBody.length == 0 || noteTitle.length == 0) {
      director.dirtyClose("Empty note created.");
    }
  } else if (choice === 2) {
  } else if (choice === 3) {
  } else if (choice === 4) {
  }
}

module.exports = {
  navigate
};
