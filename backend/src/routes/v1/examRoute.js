const express = require('express')
const upload = require('../../middlewares/uploadFiles')

const {
	createExam,
	getExam,
	getAllExams,
	updateExam,
	deleteExam,
} = require('../../controllers/examController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const cache = require('../../middlewares/routeCache')
const Router = express.Router()

// Allow admin to use these routes verifyToken, permit('admin'),
Router.route('/exams')
	.post(verifyToken, permit('admin', 'teacher', 'student'), createExam)
	.get(
		verifyToken,
		cache(300),
		permit('admin', 'teacher', 'student'),
		getAllExams
	)

Router.route('/exams/:id')
	.get(verifyToken, cache(300), permit('admin', 'teacher', 'student'), getExam)
	.put(verifyToken, permit('admin', 'teacher', 'student'), updateExam)
	.delete(verifyToken, permit('admin', 'teacher', 'student'), deleteExam)

module.exports = Router
