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

		res.status(200).json({ status: 'success', data: teacher })
	} catch (error) {
		next(error)
	}
}

exports.getTeacher = async (req, res, next) => {
	try {
		const user = await Teacher.findById(req.params.id).select('-password')

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
		)

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
