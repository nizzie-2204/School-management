const Teacher = require('../models/teacherModel')
const createPassword = require('../utils/createPassword')
const createUsername = require('../utils/createUsername')

exports.createTeacher = async (req, res, next) => {
	try {
		const password = createPassword()

		// Get last document
		const data = await Teacher.find()
			.sort({ _id: -1 })
			.limit(1)
			.then((res) => res)
			.catch((error) => {
				console.log(error)
			})

		const userInfo = {
			username: createUsername(data[0]?.username?.slice(-5), req.body.role),
			password: password,
			...req.body,
		}

		const user = await Teacher.create(userInfo)
		res.status(200).json({
			status: 'success',
			data: { username: user.username, password: password },
		})
	} catch (error) {
		next(error)
	}
}

exports.getAllTeachers = async (req, res, next) => {
	try {
		const teacher = await Teacher.find()
			.select('-password')
			.populate('teacherType')

		res.status(200).json({ status: 'success', data: teacher })
	} catch (error) {
		next(error)
	}
}

exports.getTeacher = async (req, res, next) => {
	try {
		const user = await Teacher.findById(req.params.id)
			.select('-password')
			.populate('classId teacherType')

		if (!user) {
			const error = new Error('User does not exist: ' + userId)
			error.statusCode = 404
			return next(error)
		}

		res.status(200).json({ status: 'success', data: user })
	} catch (error) {
		next(error)
	}
}

exports.updateTeacher = async (req, res, next) => {
	try {
		const user = await Teacher.findByIdAndUpdate(
			req.params.id,
			{ ...req.body },
			{ new: true, runValidators: true }
		).select('-username -password')
		if (!user) {
			const error = new Error('User does not exist: ' + userId)
			error.statusCode = 404
			return next(error)
		}
		res.status(200).json({ status: 'success', data: user })
	} catch (error) {
		next(error)
	}
}

exports.updateClassAndTimetable = async (req, res, next) => {
	try {
		if (
			req.body.time &&
			req.body.day &&
			req.body.subjectId &&
			req.body.classId &&
			req.body.teacherId
		) {
			const newTimetable = await Teacher.updateOne(
				{
					_id: req.body.teacherId,
				},
				{
					$set: {
						'timetable.$[outer].content.$[inner].subjectId': req.body.subjectId,
						'timetable.$[outer].content.$[inner].classId': req.body.classId,
					},
				},
				{
					arrayFilters: [
						{
							'outer._id': req.body.time,
						},
						{
							'inner._id': req.body.day,
						},
					],
				}
			)

			res.status(200).json({
				status: 'success',
				message: 'Update timetable successfully',
				data: req.body,
			})
		} else if (
			req.body.time &&
			req.body.day &&
			!req.body.subjectId &&
			!req.body.classId &&
			req.body.teacherId
		) {
			const newTimetable = await Teacher.updateOne(
				{
					_id: req.body.teacherId,
				},
				{
					$unset: {
						'timetable.$[outer].content.$[inner].subjectId': '',
						'timetable.$[outer].content.$[inner].classId': '',
					},
				},
				{
					arrayFilters: [
						{
							'outer._id': req.body.time,
						},
						{
							'inner._id': req.body.day,
						},
					],
				}
			)

			res.status(200).json({
				status: 'success',
				message: 'Update timetable successfully',
				data: req.body,
			})
		} else {
			const user = await Teacher.findByIdAndUpdate(
				{ _id: req.params.id },
				{ $unset: { classId: '' } },
				{ new: true, runValidators: true }
			)

			if (!user) {
				const error = new Error('User does not exist: ' + userId)
				error.statusCode = 404
				return next(error)
			}

			res.status(200).json({ status: 'success', data: user })
		}
	} catch (error) {
		next(error)
	}
}

exports.deleteTeacher = async (req, res, next) => {
	try {
		const user = await Teacher.findByIdAndDelete(req.params.id)

		if (!user) {
			const error = new Error('User does not exist: ' + userId)
			error.statusCode = 404
			return next(error)
		}

		res
			.status(200)
			.json({ status: 'success', message: 'User has been deleted' })
	} catch (error) {
		next(error)
	}
}
