const mongoose = require('./schema.js')
const Note = mongoose.model('Note')
const translationData = require('./note-data.json')


Note.remove({})
  .then(() => {
    Note.collection.insert(translationData)
      .then((notes) => {
        console.log(notes)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
