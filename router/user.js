const express = require('express');
const { users, create, remove } = require('../controller/user');

const userRouter = express.Router()


userRouter.route('/').get(users).post(create)
userRouter.route('/:id').delete(remove)


module.exports = userRouter
