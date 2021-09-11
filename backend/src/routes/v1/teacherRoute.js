const express = require('express')
const {
	createTeacher,
	getAllTeachers,
	getTeacher,
	updateTeacher,
	deleteTeacher,
} = require('../../controllers/teacherController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const Router = express.Router()

// Allow admin to use these routes

Router.route('/teachers')
	.post(verifyToken, permit('admin'), createTeacher)
	.get(verifyToken, permit('admin', 'teacher', 'student'), getAllTeachers)

Router.route('/teachers/:id')
	.get(verifyToken, permit('admin', 'teacher', 'student'), getTeacher)
	.put(verifyToken, permit('admin'), updateTeacher)
	.delete(verifyToken, permit('admin'), deleteTeacher)

module.exports = Router
