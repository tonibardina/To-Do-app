const express = require('express')

const router = express.Router()

const showPendingTasks = require('./handlers/showPendingTasks.js')
const showCompletedTasks = require('./handlers/showCompletedTasks.js')
const addTask = require('./handlers/addTask.js')
const removeTaskById = require('./handlers/removeTaskById.js')
const markAsCompleted = require('./handlers/markAsCompleted.js')
const markAllTasks = require('./handlers/markAllTasks.js')

router.get('/', showPendingTasks)
router.get('/completed', showCompletedTasks)

router.route('/task/:id')
  .delete(removeTaskById)
  .get(markAsCompleted)

router.post('/new', addTask)

router.get('/markAll', markAllTasks)

module.exports = router
