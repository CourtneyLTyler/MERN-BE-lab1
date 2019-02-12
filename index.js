const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const Note = require('./db/model');
// const NoteData = require('./db/seed')

const app = express()
app.use(cors())


app.use(parser.json())

// app.use(express.static('client/build'))
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// router.route('/bears/:bear_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)


app.set('port', process.env.PORT || 3002)

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

// show route
app.get('/api/notes/:id', (req, res) => {

    Note.findOne({ _id: req.params.id })
    .then((notes) => {
        res.json(notes)
    })
    .catch((err) => {
        console.log(err)
    })
})

// create route
app.post('/api/notes', (req, res) => {
    Note.create(req.body)
      .then((note) => {
        res.json(note)
      })
      .catch((err) => {
        console.log(err)
      })
  })

app.put('/api/notes/:id', (req,res) => {
    Note.findOneAndUpdate({ _id: req.params.id }).then (note => {
        res.json(note)
    })
    .catch((err) => {
        console.log(err)
    })
})


app.delete('/api/notes/:id', (req,res) => {
    Note.findOneAndRemove({ _id: req.params.id }).then (note => {
        res.json(note)
    })
})

app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
  })

