const ExamResult = require('../models/examResultModel')

exports.createExamResult = async (req, res, next) => {
	try {
		const examResult = await ExamResult.create({
			...req.body,
		})

		res.status(200).json({ status: 'success', data: examResult })
	} catch (error) {
		next(error)
	}
}

exports.getAllExamResults = async (req, res, next) => {
	try {
		const examResults = await ExamResult.find()

		res.status(200).json({ status: 'success', data: examResults })
	} catch (error) {
		next(error)
	}
}

exports.getExamResult = async (req, res, next) => {
	try {
		const examResult = await ExamResult.findById(req.params.id).populate(
			'studentId'
		)

		if (!examResult) {
			const error = new Error('Exam result does not exist: ' + userId)
			error.statusCode = 404
			return next(error)
		}

		res.status(200).json({ status: 'success', data: examResult })
	} catch (error) {
		next(error)
	}
}

exports.updateExamResult = async (req, res, next) => {
	try {
		const newExamResult = await ExamResult.findByIdAndUpdate(
			req.params.id,
			{ ...req.body },
			{
				new: true,
				runValidators: true,
			}
		)
		if (!newExamResult) {
			const error = new Error('Exam result does not exist')
			error.statusCode = 404
			return next(error)
		}
		res.status(200).json({ status: 'success', data: newExamResult })
	} catch (error) {
		next(error)
	}
}

exports.deleteExamResult = async (req, res, next) => {
	try {
		const exam = await ExamResult.findById(req.params.id)

		if (!exam) {
			const error = new Error('Exam result does not exist:')
			error.statusCode = 404
			return next(error)
		}

		res
			.status(200)
			.json({ status: 'success', message: 'Exam result has been deleted' })
	} catch (error) {
		next(error)
	}
}
