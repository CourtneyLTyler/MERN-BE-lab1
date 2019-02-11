const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/schema.js')

const app = express()

app.set('port', process.env.PORT || 3002)
app.use(parser.json())
app.use(cors())
app.use(express.static('client/build'))


app.listen(app.get('port'), () => {
    console.log('Server listening on port ' + app.get('port'))
  })