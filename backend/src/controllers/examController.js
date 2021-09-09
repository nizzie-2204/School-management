const Exam = require('../models/examModel')

exports.createExam = async (req, res, next) => {
	try {
		// const newExam = await Exam.create(req.body)
		let exam = new Exam({
			...req.body,
		})

		if (!req.files || Object.keys(req.files).length === 0) {
			res.status(404).json({ status: 'fail', message: 'No files found' })
		}

		if (req.files) {
			let path = ''
			req.files.forEach((file) => {
				path = path + file.path + ','
			})

			path = path.substring(0, path.lastIndexOf(','))

			exam.examImages = path
		}

		await Exam.create(exam)

		res.status(200).json({ status: 'success', data: exam })
	} catch (error) {
		next(error)
	}
}

exports.updateExam = async (req, res, next) => {
	try {
		const exam = { ...req.body }

		if (req.files) {
			let path = ''
			req.files.forEach((file) => {
				path = path + file.path + ','
			})

			path = path.substring(0, path.lastIndexOf(','))

			exam.examImages = path
		}

		const newExam = await Exam.findByIdAndUpdate(req.params.id, exam, {
			new: true,
			runValidators: true,
		})

		if (!newExam) {
			const error = new Error('Exam does not exist: ' + userId)
			error.statusCode = 404
			return next(error)
		}

		res.status(200).json({ status: 'success', data: newExam })
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
		const exams = await Exam.find()

		res.status(200).json({ status: 'success', data: exams })
	} catch (error) {
		next(error)
	}
}

exports.getExam = async (req, res, next) => {
	try {
		const exam = await Exam.findById(req.params.id)

		if (!exam) {
			const error = new Error('Exam does not exist: ' + userId)
			error.statusCode = 404
			return next(error)
		}

		res.status(200).json({ status: 'success', data: exam })
	} catch (error) {
		next(error)
	}
}
