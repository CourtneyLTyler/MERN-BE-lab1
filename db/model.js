const mongoose = require('./connection.js')

const Note = new mongoose.Schema({
  title: String,
  content: String
})

const Note = mongoose.model('Note', Note)

module.exports = {
  Note
}