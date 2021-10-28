const express = require('express')
const { upload, destroy } = require('../../controllers/uploadController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const Router = express.Router()

// Allow admin to use these routes
Router.route('/upload').post(verifyToken, permit('admin', 'student'), upload)

Router.route('/destroy').post(verifyToken, permit('admin'), destroy)

module.exports = Router
