const express = require('express')
const {
	createTeacherType,
	updateTeacherType,
	deleteTeacherType,
	getAllTeacherTypes,
	getTeacherType,
} = require('../../controllers/teacherTypeController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const cache = require('../../middlewares/routeCache')
const Router = express.Router()

// Allow admin to use these routes

Router.route('/teacher-types')
	.post(verifyToken, permit('admin'), createTeacherType)
	.get(
		verifyToken,

		permit('admin', 'teacher', 'student'),
		getAllTeacherTypes
	)

Router.route('/teacher-types/:id')
	.get(
		verifyToken,

		permit('admin', 'teacher', 'student'),
		getTeacherType
	)
	.put(verifyToken, permit('admin'), updateTeacherType)
	.delete(verifyToken, permit('admin'), deleteTeacherType)

module.exports = Router
