const mongoose = require('./connection.js')
const Schema = mongoose.Schema;

const Note = new Schema({
  title: String,
  content: String
})



module.exports = {
  Note: mongoose.model('Note', Note)
}
