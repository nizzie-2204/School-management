const express = require('express')
const {
	createClass,
	updateClass,
	getAllClasses,
	getClass,
	deleteClass,
	updateStudentInClass,
} = require('../../controllers/classController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const Router = express.Router()

// Allow admin to use these routes verifyToken, permit('admin'),

Router.route('/classes')
	.post(verifyToken, permit('admin'), createClass)
	.get(verifyToken, permit('admin'), getAllClasses)

Router.route('/classes/:id')
	.get(verifyToken, permit('admin', 'teacher', 'student'), getClass)
	.put(verifyToken, permit('admin'), updateClass)
	.delete(verifyToken, permit('admin'), deleteClass)
	.patch(verifyToken, permit('admin'), updateStudentInClass)

module.exports = Router
