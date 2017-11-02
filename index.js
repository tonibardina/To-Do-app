const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express()

const routes = require('./routes')
const { setTasks } = require('./services/tasks')

app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use((req, res, next) => {
  req.session.tasks = req.session.tasks || []
  setTasks(req.session.tasks)
  next()
})

app.use(routes)

app.listen(3000)
console.log('Listening on PORT 3000...')
