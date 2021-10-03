const Class = require('../models/classModel')

exports.createClass = async (req, res, next) => {
	try {
		const newClass = await Class.create(req.body)

		res.status(200).json({ status: 'success', data: newClass })
	} catch (error) {
		next(error)
	}
}

exports.updateClass = async (req, res, next) => {
	try {
		const newClass = await Class.findByIdAndUpdate(
			req.params.id,
			{ ...req.body },
			{ new: true, runValidators: true }
		)

		res.status(200).json({ status: 'success', data: newClass })
	} catch (error) {
		next(error)
	}
}

exports.getAllClasses = async (req, res, next) => {
	try {
		const classes = await Class.find().populate('teacherId')

		res.status(200).json({ status: 'success', data: classes })
	} catch (error) {
		next(error)
	}
}

exports.getClass = async (req, res, next) => {
	try {
		const newClass = await Class.findById(req.params.id)
		// .populate({
		// 	// path: 'timetable',
		// 	// populate: {
		// 	// 	path: 'content',
		// 	// 	populate: {
		// 	// 		path: 'subjectId',
		// 	// 		model: 'Subject',
		// 	// 	},
		// 	// },
		// 	path: 'teacherId',
		// 	select: '-username -password',
		// })
		// .populate('students')

		if (!newClass) {
			const error = new Error('Class does not exist')
			error.status(404)
			return next(error)
		}

		res.status(200).json({ status: 'success', data: newClass })
	} catch (error) {
		next(error)
	}
}

exports.deleteClass = async (req, res, next) => {
	try {
		if (!req.params.id) {
			const error = new Error('Id does not exist')
			error.status(404)
			return next(error)
		} else {
			await Class.findByIdAndDelete(req.params.id)

			res
				.status(200)
				.json({ status: 'success', message: 'Class has been deleted' })
		}
	} catch (error) {
		next(error)
	}
}

exports.updateStudentInClass = async (req, res, next) => {
	try {
		// Add student
		if (!req.body.oldClassId) {
			// Push student to new class
			const newClass = await Class.updateOne(
				{ _id: req.body.newClassId },
				{ $addToSet: { students: req.body.studentId } }
			)
		}

		// Delete student
		else if (!req.body.newClassId) {
			// Remove student from old class
			const oldClass = await Class.updateOne(
				{
					_id: req.body.oldClassId,
				},
				{
					$pull: { students: req.body.studentId },
				}
			)
		}

		// Update student
		else {
			// Push student to new class
			const newClass = await Class.updateOne(
				{ _id: req.body.newClassId },
				{ $addToSet: { students: req.body.studentId } }
			)

			// Remove student from old class
			const oldClass = await Class.updateOne(
				{
					_id: req.body.oldClassId,
				},
				{
					$pull: { students: req.body.studentId },
				}
			)
		}

		res
			.status(200)
			.json({ status: 'success', message: 'Update class successfully' })
	} catch (error) {
		next(error)
	}
}
