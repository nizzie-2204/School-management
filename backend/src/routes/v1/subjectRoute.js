const express = require('express')
const {
	createSubject,
	updateSubject,
	deleteSubject,
	getAllSubjects,
	getSubject,
} = require('../../controllers/subjectController')
const { permit } = require('../../middlewares/permit')
const { verifyToken } = require('../../middlewares/auth')
const Router = express.Router()

// Allow admin to use these routes

Router.route('/subjects')
	.post(verifyToken, permit('admin'), createSubject)
	.get(verifyToken, permit('admin'), getAllSubjects)

Router.route('/subjects/:id')
	.get(verifyToken, permit('admin'), getSubject)
	.put(verifyToken, permit('admin'), updateSubject)
	.delete(verifyToken, permit('admin'), deleteSubject)

module.exports = Router
