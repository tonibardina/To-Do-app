const { changeStatusToCompleted } = require('../../services/tasks')

function markAsCompleted (req, res) {
  const { id } = req.params
  changeStatusToCompleted(id)
  res.send(`marked as completed with this id: ${id}...`)
}

module.exports = markAsCompleted
