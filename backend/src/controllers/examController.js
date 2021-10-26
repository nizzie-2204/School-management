const Exam = require('../models/examModel')

exports.createExam = async (req, res, next) => {
	try {
		const exam = await Exam.create(req.body)

		res.status(200).json({ status: 'success', data: exam })
	} catch (error) {
		next(error)
	}
}

exports.updateExam = async (req, res, next) => {
	try {
		const newExam = await Exam.findByIdAndUpdate(
			req.params.id,
			{ ...req.body },
			{ new: true, runValidators: true }
		)

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
		const exam = await Exam.findByIdAndDelete(req.params.id)

		if (!exam) {
			const error = new Error('Exam does not exist:')
			error.statusCode = 404
			return next(error)
		}

		res
			.status(200)
			.json({ status: 'success', message: 'Exam has been deleted' })
	} catch (error) {
		next(error)
	}
}

exports.getAllExams = async (req, res, next) => {
	try {
		const exams = await Exam.find()
			.populate('subjectId')
			.populate({
				path: 'examResult',
				populate: {
					path: 'studentId',
					populate: {
						path: 'classId',
					},
				},
			})

		res.status(200).json({ status: 'success', data: exams })
	} catch (error) {
		next(error)
	}
}

exports.getExam = async (req, res, next) => {
	try {
		const exam = await Exam.findOne({ _id: req.params.id })
			.populate('examResult')
			.populate('subjectId')

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
