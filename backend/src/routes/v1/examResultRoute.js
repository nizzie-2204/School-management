const express = require('express')
const upload = require('../../middlewares/uploadFiles')

const {
	createExamResult,
	getAllExamResults,
	getExamResult,
	updateExamResult,
	deleteExamResult,
} = require('../../controllers/examResultController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const Router = express.Router()

// Allow admin to use these routes verifyToken, permit('admin'),

Router.route('/exam-results')
	.post(verifyToken, permit('admin', 'teacher', 'student'), createExamResult)
	.get(verifyToken, permit('admin', 'teacher', 'student'), getAllExamResults)

Router.route('/exam-results/:id')
	.get(verifyToken, permit('admin', 'teacher', 'student'), getExamResult)
	.put(verifyToken, permit('admin', 'teacher', 'student'), updateExamResult)
	.delete(verifyToken, permit('admin', 'teacher', 'student'), deleteExamResult)

module.exports = Router
