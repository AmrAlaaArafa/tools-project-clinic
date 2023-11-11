const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 5000

app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/users', db.getUsers)
app.post('/signUp',db.signUp)
app.post('/signIn',db.signIn)
app.post('/addSlot',db.addSlot)
app.post('/viewSlots',db.viewSlots)
app.post('/viewAvailableSlots',db.viewAvailableSlots)
app.patch('/reserveSlot',db.reserveSlot)
app.patch('/getReservations',db.getReservations)
app.patch('/updateReservation',db.updateReservation)
app.patch('/cancelReservation',db.cancelReservation)
app.get('/getDoctors',db.getDoctors)





