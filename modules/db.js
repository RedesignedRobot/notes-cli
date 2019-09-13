const m = require("mongoose");
const ui = require("./ui");
const noteTemplate = require("./note");

const dbURL = "mongodb://localhost:27017/test_db";

function insertNote(noteJSON) {
  m.connect(dbURL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  });
  var data = JSON.parse(noteJSON);

  var model = new noteTemplate.noteModel();
  model._id = data._id;
  model.title = data.title;
  model.body = data.body;
  model.save(function(err) {
    if (err) {
      throw new Error(err);
    }
    m.connection.close();
  });
}

// function verifyNote(id) {
//   var blackbox = noteTemplate.noteModel;
//   blackbox.findOne({ title: "t1" }, function(err, note) {
//     console.log(note);
//   });
}
module.exports = {
  insertNote,
  verifyNote
};
