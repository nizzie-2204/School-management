const Student = require('../models/studentModel')
const createPassword = require('../utils/createPassword')
const createUsername = require('../utils/createUsername')

exports.createStudent = async (req, res, next) => {
	try {
		const password = createPassword()

		// Get last document
		const data = await Student.find()
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

		const user = await Student.create(userInfo)
		res.status(200).json({
			status: 'success',
			data: {
				...user._doc,
				password: password,
			},
		})
	} catch (error) {
		next(error)
	}
}

exports.getAllStudents = async (req, res, next) => {
	try {
		const students = await Student.find()
			.populate('classId')
			.select('-password')
			.lean()
		res.status(200).json({ status: 'success', data: students })
	} catch (error) {
		next(error)
	}
}

exports.getStudent = async (req, res, next) => {
	try {
		const user = await Student.findById(req.params.id)
			.select('-password')
			.lean()

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

exports.updateStudent = async (req, res, next) => {
	try {
		const user = await Student.findByIdAndUpdate(
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

exports.deleteStudent = async (req, res, next) => {
	try {
		const user = await Student.findByIdAndDelete(req.params.id)

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
