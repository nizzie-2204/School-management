const Subject = require('../models/subjectModel')

exports.createSubject = async (req, res, next) => {
	try {
		const subject = await Subject.create(req.body)

		res.status(200).json({ status: 'success', data: subject })
	} catch (error) {
		next(error)
	}
}
exports.updateSubject = async (req, res, next) => {
	try {
		const subject = await Subject.findByIdAndUpdate(
			req.params.id,
			{ ...req.body },
			{ new: true, runValidators: true }
		)

		if (!subject) {
			const error = new Error('Subject does not exist: ' + userId)
			error.statusCode = 404
			return next(error)
		}

		res.status(200).json({ status: 'success', data: subject })
	} catch (error) {
		next(error)
	}
}
exports.deleteSubject = async (req, res, next) => {
	try {
		await Subject.findByIdAndDelete(req.params.id)

		res
			.status(200)
			.json({ status: 'success', message: 'Subject has been deleted' })
	} catch (error) {
		next(error)
	}
}
exports.getAllSubjects = async (req, res, next) => {
	try {
		const subjects = await Subject.find()

		res.status(200).json({ status: 'success', data: subjects })
	} catch (error) {
		next(error)
	}
}
exports.getSubject = async (req, res, next) => {
	try {
		const subject = await Subject.findById(req.params.id)

		if (!subject) {
			const error = new Error('Subject does not exist: ' + userId)
			error.statusCode = 404
			return next(error)
		}

		res.status(200).json({ status: 'success', data: subject })
	} catch (error) {
		next(error)
	}
}
