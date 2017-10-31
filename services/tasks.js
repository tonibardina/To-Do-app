var moment = require('moment')

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
    createdAt: moment().format("dddd, MMMM Do YYYY, h:mm:ss a"),
    completed: false
  }
  tasks.push(newTask)
}

function changeStatusToCompleted (id) {
  tasks = tasks.map(task => {
    if (task.id === +id) {
      task.completed = true
    }
    return task
  })
}

function markAllAsCompleted () {
  tasks = tasks.map(task => {
    if (task.comppleted !== true) {
      task.completed = true
    }
    return task
  })
}

module.exports = { getPendingTasks, getCompletedTasks, addTask, removeTask, changeStatusToCompleted, markAllAsCompleted }
