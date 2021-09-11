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
const Router = express.Router()

// Allow admin to use these routes verifyToken, permit('admin'),

Router.route('/exams')
	.post(verifyToken, permit('admin'), upload.array('examImages[]'), createExam)
	.get(verifyToken, permit('admin', 'teacher', 'student'), getAllExams)

Router.route('/exams/:id')
	.get(verifyToken, permit('admin', 'teacher', 'student'), getExam)
	.put(verifyToken, permit('admin'), upload.array('examImages[]'), updateExam)
	.delete(verifyToken, permit('admin'), deleteExam)

module.exports = Router
