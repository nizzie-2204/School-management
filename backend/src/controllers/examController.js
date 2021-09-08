const Exam = require('../models/examModel')

exports.createExam = async (req, res, next) => {
	try {
		// const newExam = await Exam.create(req.body)
		let exam = new Exam({
			...req.body,
		})
		if (req.files) {
			let path = ''
			req.files.forEach((file) => {
				path = path + file.path + ','
			})

			path = path.substring(0, path.lastIndexOf(','))

			exam.examImages = path
		}

		res.status(200).json({ status: 'success', data: exam })
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
