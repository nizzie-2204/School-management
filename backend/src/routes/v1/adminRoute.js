const express = require('express')
const {
	createAdmin,
	getAllAdmins,
	getAdmin,
	updateAdmin,
	deleteAdmin,
} = require('../../controllers/adminController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const Router = express.Router()

// Allow admin to use these routes verifyToken, permit('admin'),

Router.route('/admins')
	.post(createAdmin)
	.get(verifyToken, permit('admin'), getAllAdmins)

Router.route('/admins/:id')
	.get(verifyToken, permit('admin'), getAdmin)
	.put(verifyToken, permit('admin'), updateAdmin)
	.delete(verifyToken, permit('admin'), deleteAdmin)

module.exports = Router
