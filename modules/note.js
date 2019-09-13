const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  _id: String,
  title: String,
  body: String
});

var noteModel = mongoose.model("Note", NoteSchema);

module.exports = {
  NoteSchema,
  noteModel
};
