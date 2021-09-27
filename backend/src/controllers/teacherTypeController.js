const TeacherType = require('../models/teacherTypeModel')

exports.createTeacherType = async (req, res, next) => {
	try {
		const teacherType = await TeacherType.create(req.body)

		res.status(200).json({ status: 'success', data: teacherType })
	} catch (error) {
		next(error)
	}
}

exports.updateTeacherType = async (req, res, next) => {
	try {
		const teacherType = await TeacherType.findByIdAndUpdate(
			req.params.id,
			{ ...req.body },
			{ new: true, runValidators: true }
		)

		if (!teacherType) {
			const error = new Error('Teacher type does not exist')
			error.statusCode = 404
			return next(error)
		}

		res.status(200).json({ status: 'success', data: teacherType })
	} catch (error) {
		next(error)
	}
}

exports.deleteTeacherType = async (req, res, next) => {
	try {
		await TeacherType.findByIdAndDelete(req.params.id)

		res
			.status(200)
			.json({ status: 'success', message: 'Teacher type has been deleted' })
	} catch (error) {
		next(error)
	}
}

exports.getAllTeacherTypes = async (req, res, next) => {
	try {
		const teacherTypes = await TeacherType.find()
		// res.json('test')
		res.status(200).json({ status: 'success', data: teacherTypes })
	} catch (error) {
		next(error)
	}
}

exports.getTeacherType = async (req, res, next) => {
	try {
		const teacherType = await TeacherType.findOne({
			_id: req.params.id,
		}).populate('subjects')

		if (!teacherType) {
			const error = new Error('Teacher type does not exist')
			error.statusCode = 404
			return next(error)
		}

		res.status(200).json({ status: 'success', data: teacherType })
	} catch (error) {
		next(error)
	}
}
