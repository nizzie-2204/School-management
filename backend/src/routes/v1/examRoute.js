const express = require('express')
const upload = require('../../middlewares/uploadFiles')

const { createExam } = require('../../controllers/examController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const Router = express.Router()

// Allow admin to use these routes verifyToken, permit('admin'),

Router.route('/exams').post(
	verifyToken,
	permit('admin'),
	upload.array('examImages[]'),
	createExam
)
// 	.get(verifyToken, permit('admin'), getAllClasses)

// Router.route('/classes/:id')
// 	.get(verifyToken, permit('admin'), getClass)
// 	.put(verifyToken, permit('admin'), updateClass)
// 	.delete(verifyToken, permit('admin'), deleteClass)

module.exports = Router
