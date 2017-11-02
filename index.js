const express = require('express')
var moment = require('moment')
const bodyParser = require('body-parser')
var cookieSession = require('cookie-session')
var debug = require('debug')('middleware-log')

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
    debug('This is req.body: ')
    debug(req.body)
    debug(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))
  }
  if (Object.keys(req.params).length) {
    debug('This is req.params: ')
    debug(req.params)
    debug(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))
  }
  if (req.session) {
    debug('This is req.session: ')
    debug(req.session)
    debug(moment().format('dddd, MMMM Do YYYY, h:mm:ss a'))
    debug('---------------')
  }
  next()
})

app.use(routes)

app.listen(3000)
console.log('Listening on PORT 3000...')
