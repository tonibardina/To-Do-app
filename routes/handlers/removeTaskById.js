const { removeTask } = require('../../services/tasks')

function removeTaskById (req, res) {
  const { id } = req.params
  removeTask(id)
  res.send(`removed post w/ id ${id}...`)
}

module.exports = removeTaskById
