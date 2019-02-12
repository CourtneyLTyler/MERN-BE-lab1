const mongoose = require('./connection.js')
const Schema = mongoose.Schema;

const Note = new Schema({
  title: String,
  content: String
})

const NoteModel = mongoose.model('Note', Note)

module.exports = NoteModel

