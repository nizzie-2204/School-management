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
	.post(
		verifyToken,
		permit('admin'),
		upload.array('examResultImages[]'),
		createExamResult
	)
	.get(verifyToken, permit('admin'), getAllExamResults)

Router.route('/exam-results/:id')
	.get(verifyToken, permit('admin'), getExamResult)
	.put(
		verifyToken,
		permit('admin'),
		upload.array('examResultImages[]'),
		updateExamResult
	)
	.delete(verifyToken, permit('admin'), deleteExamResult)

module.exports = Router
