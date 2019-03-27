const express = require('express')
const path = require('path')
const cors = require('cors')
const db = require('./models')
const bodyParser = require('body-parser')

const app = express()

const dirname = __dirname

app.use(express.static(path.join(dirname, 'client/build')))
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api/getList', (req, res) => {
  var list = ['item1', 'item2', 'item3', 'foo', 'cherry']
  res.json(list)
  console.log('Here is the list')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(dirname + 'client/build/index.html'))
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)
