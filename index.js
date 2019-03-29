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
//   db.teacher_tracker.findAll()
//     .then(result => {
//       console.log(result.data.Values)
//       res.json(result.dataValues)
//     })
  var list = ['item1', 'item2', 'item3', 'foo', 'cherry']
  res.json(list)
  console.log('Here is the list')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(dirname + 'client/build/index.html'))
})

app.post('/api/updateForm', (req, res) => {
  console.log(req.body)
  db.log2.create({
    teacher_id: req.body.data.teacherID,
    student_lname: req.body.data.studentLName,
    student_fname: req.body.data.studentFName,
    intervention_type: req.body.data.interventionType,
    intervention_date: req.body.data.dateOfIntervention,
    follow_up_date: req.body.data.followupDate,
    notes: req.body.data.notes,
    point_of_contact: req.body.data.pointOfContact,
    teacher_lname: req.body.data.teacherLName,
    teacher_fname: req.body.data.teacherFName,
    name_of_contact: req.body.data.nameOfContact,
    student_id: req.body.data.studentID
  })
  res.send('The database has been updated')
})

const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)
