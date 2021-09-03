const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const Student = require('../models/studentModel')
const Teacher = require('../models/teacherModel')
const bcrypt = require('bcryptjs')

exports.login = async (req, res, next) => {
	try {
		const { username, password } = req.body

		if (!username || !password) {
			const err = new Error('Please provide email or password!')
			err.statusCode = 400
			return next(err)
		}

		// Check if user existed and username is not correct
		const user =
			(await User.findOne({ username: req.body.username })) ||
			(await Student.findOne({ username: req.body.username })) ||
			(await Teacher.findOne({ username: req.body.username }))

		if (!user) {
			const err = new Error('Username is not correct!')
			err.statusCode = 400
			return next(err)
		}

		// Check if use existed and password is not correct
		if (bcrypt.compareSync(req.body.password, user.password)) {
			const token = jwt.sign(
				{ userID: user._id, role: user.role },
				process.env.APP_SECRET
			)

			const data =
				(await User.findOne(
					{ username: req.body.username },
					{ password: false }
				)) ||
				(await Student.findOne(
					{ username: req.body.username },
					{ password: false }
				)) ||
				(await Teacher.findOne(
					{ username: req.body.username },
					{ password: false }
				))

			res.status(200).json({
				status: 'success',
				data: { token: token, user: data },
			})
		} else {
			const err = new Error('Password is not correct!')
			err.statusCode = 400
			return next(err)
		}
	} catch (error) {
		next(error)
	}
}
