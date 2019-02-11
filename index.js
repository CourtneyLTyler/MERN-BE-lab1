const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/model.js')

const app = express()

app.set('port', process.env.PORT || 3002)
app.use(parser.json())
app.use(cors())
// app.use(express.static('client/build'))
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

app.get('/api/notes', (req, res) => {
    Note.find()
    .then((notes) => {
        res.json(notes)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.post('/api/notes', (req, res) => {
    Note.create(req.body)
      .then((note) => {
        res.json(note)
      })
      .catch((err) => {
        console.log(err)
      })
  })

app.put('/api/notes:id', (req,res) => {
    Note.findOneAndUpdate({ _id: req.params.id }).then (note => {
        res.json(note)
    })
    .catch((err) => {
        console.log(err)
    })
})

app.delete('/api/notes:id', (req,res) => {
    Note.findOneAndRemove({ _id: req.params.id }).then (note => {
        res.json(note)
    })
})

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
  })