const express = require('express')
const { login, logout } = require('../../controllers/authController')
const { verifyToken } = require('../../middlewares/auth')

const Router = express.Router()

Router.route('/login').post(login)
Router.route('/logout').post(verifyToken, logout)

module.exports = Router
