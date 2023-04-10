const express = require('express')
const {addTodo} = require('../services/todoservice/addtask')
const {getTodo} = require('../services/todoservice/gettask')
const {deleteTodo} = require('../services/todoservice/deletetask')
const { updateTodo } = require('../services/todoservice/updatetask')

const todoRoute = express.Router()
todoRoute.route('/createtask').post(addTodo)
todoRoute.route('/gettask').get(getTodo)
todoRoute.route('/deletetask/:id').delete(deleteTodo)
todoRoute.route('/updatetask/:id').put(updateTodo)


module.exports = {todoRoute}