const mongoose = require('./model.js')
const Note = mongoose.model('Note')
const NoteData = require('./note-data.json')


Note.remove({})
  .then(() => {
    Note.collection.insert(NoteData)
      .then((notes) => {
        console.log(notes)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })

