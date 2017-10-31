let tasks = require('../data/tasks.json')

function getPendingTasks () {
  return tasks.filter(task => !task.completed)
}

function getCompletedTasks () {
  return tasks.filter(task => task.completed)
}

function removeTask (id) {
  tasks = tasks.filter(post => post.id !== +id)
}

let counter = 10

function addTask (title) {
  const newTask = {
    title,
    id: ++counter,
    createdAt: +new Date(),
    completed: false
  }
  tasks.push(newTask)
}

module.exports = { getPendingTasks, getCompletedTasks, addTask, removeTask }
