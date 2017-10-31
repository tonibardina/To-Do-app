const express = require('express')

const router = express.Router()

const showPendingTasks = require('./handlers/showPendingTasks.js')
const showCompletedTasks = require('./handlers/showCompletedTasks.js')
const addTask = require('./handlers/addTask.js')
const removeTaskById = require('./handlers/removeTaskById.js')

router.get('/', showPendingTasks)
router.get('/completed', showCompletedTasks)

router.route('/task/:id')
  .delete(removeTaskById)

router.post('/new', addTask)

module.exports = router
