const express = require('express')
const {
	createStudent,
	getAllStudents,
	getStudent,
	updateStudent,
	deleteStudent,
} = require('../../controllers/studentController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const Router = express.Router()

// Allow admin to use these routes
Router.route('/students')
	.post(verifyToken, permit('admin'), createStudent)
	.get(verifyToken, permit('admin'), getAllStudents)

Router.route('/students/:id')
	.get(verifyToken, permit('admin'), getStudent)
	.put(verifyToken, permit('admin'), updateStudent)
	.delete(verifyToken, permit('admin'), deleteStudent)

module.exports = Router
