const express = require('express');
const { newses,create } = require('../controller/news');
const checkPermission = require('../middleware/auth');


const newsRouter = express.Router()

newsRouter.route('/').get(checkPermission, newses).post(checkPermission, create)




module.exports = newsRouter

