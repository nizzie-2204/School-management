const User = require('../models/userModel')
const createPassword = require('../utils/createPassword')
const createUsername = require('../utils/createUsername')

exports.createUser = async (req, res, next) => {
	try {
		const user = await User.create(req.body)

		const { password, ...info } = user._doc

		res.status(200).json({
			status: 'success',
			data: info,
		})
	} catch (error) {
		next(error)
	}
}

exports.getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find()

		res.status(200).json({ status: 'success', data: users })
	} catch (error) {
		next(error)
	}
}

exports.getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id).select('-password')

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

exports.updateUser = async (req, res, next) => {
	try {
		const user = await User.findByIdAndUpdate(
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

exports.deleteUser = async (req, res, next) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id)

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