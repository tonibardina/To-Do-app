const { getPendingTasks } = require('../../services/tasks')

function showPendingTasks (req, res) {
  const title = 'TODO Tasks'
  const noTasks = 'No tasks'
  const todoTasks = getPendingTasks()

  if (todoTasks[0] !== undefined) {
    res.render('todo', { tasks: todoTasks, title })
  } else {
    res.render('todo', {noTasks, tasks: todoTasks, title})
  }
}

module.exports = showPendingTasks
