const express = require('express')
var moment = require('moment')
const bodyParser = require('body-parser')
var cookieSession = require('cookie-session')

const app = express()

const routes = require('./routes')
const { setTasks } = require('./services/tasks')

app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cookieSession({
  name: 'taks',
  keys: ['dfkjrkjf'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use((req, res, next) => {
  req.session.tasks = req.session.tasks || []
  setTasks(req.session.tasks)
  next()
})

app.use((req, res, next) => {
  if (Object.keys(req.body).length) {
    console.log('This is req.body: ')
    console.log(req.body)
    console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))
  }
  if (Object.keys(req.params).length) {
    console.log('This is req.params: ')
    console.log(req.params)
    console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))
  }
  if (req.session) {
    console.log('This is req.session: ')
    console.log(req.session)
    console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))
    console.log('---------------')
  }
  next()
})

app.use(routes)

app.listen(3000)
console.log('Listening on PORT 3000...')
