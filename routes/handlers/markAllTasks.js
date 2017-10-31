const {markAllAsCompleted} = require('../../services/tasks')

function markAllTasks (req, res) {
  markAllAsCompleted()
  res.send('All marked!')
}

module.exports = markAllTasks
