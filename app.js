const bootstrap = require("./modules/bootstrap");
const navigator = require("./modules/navigator");

var choice = bootstrap.launch();
navigator.navigate(parseInt(choice));