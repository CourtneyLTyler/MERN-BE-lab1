const mongoose = require('./connection.js')

const Note = new mongoose.Schema({
  title: String,
  content: String
})

mongoose.model("Note", Note)

module.exports = mongoose