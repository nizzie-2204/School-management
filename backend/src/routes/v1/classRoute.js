const express = require('express')
const {
	createClass,
	updateClass,
	getAllClasses,
	getClass,
	deleteClass,
	updateStudentAndTimetable,
} = require('../../controllers/classController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const Router = express.Router()

// Allow admin to use these routes verifyToken, permit('admin'),

Router.route('/classes')
	.post(verifyToken, permit('admin'), createClass)
	.get(verifyToken, permit('admin', 'teacher', 'student'), getAllClasses)

Router.route('/classes/:id')
	.get(verifyToken, permit('admin', 'teacher', 'student'), getClass)
	.put(verifyToken, permit('admin', 'teacher', 'student'), updateClass)
	.delete(verifyToken, permit('admin'), deleteClass)
	.patch(verifyToken, permit('admin'), updateStudentAndTimetable)

module.exports = Router
