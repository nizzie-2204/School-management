const Admin = require('../models/adminModel')

exports.createAdmin = async (req, res, next) => {
	try {
		const user = await Admin.create(req.body)

		const { password, ...info } = user._doc

		res.status(200).json({
			status: 'success',
			data: info,
		})
	} catch (error) {
		next(error)
	}
}

exports.getAllAdmins = async (req, res, next) => {
	try {
		const users = await Admin.find()

		res.status(200).json({ status: 'success', data: users })
	} catch (error) {
		next(error)
	}
}

exports.getAdmin = async (req, res, next) => {
	try {
		const user = await Admin.findById(req.params.id).select('-password')

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

exports.updateAdmin = async (req, res, next) => {
	try {
		const user = await Admin.findByIdAndUpdate(
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

exports.deleteAdmin = async (req, res, next) => {
	try {
		const user = await Admin.findByIdAndDelete(req.params.id)

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
