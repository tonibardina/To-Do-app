const { addTask } = require('../../services/tasks')

function _addTask (req, res) {
  const { title } = req.body
  console.log('this is req >>' + title)
  if (title.trim().length) {
    addTask(title)
  }
  res.redirect('/')
}

module.exports = _addTask
