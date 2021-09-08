const Exam = require('../models/examModel')

exports.createExam = async (req, res, next) => {
	try {
		const newExam = await Exam.create(req.body)

		res.status(200).json({ status: 'success', data: newExam })
	} catch (error) {
		next(error)
	}
}

exports.updateExam = async (req, res, next) => {
	try {
	} catch (error) {
		next(error)
	}
}

exports.deleteExam = async (req, res, next) => {
	try {
	} catch (error) {
		next(error)
	}
}

exports.getAllExams = async (req, res, next) => {
	try {
	} catch (error) {
		next(error)
	}
}

exports.getExam = async (req, res, next) => {
	try {
	} catch (error) {
		next(error)
	}
}
