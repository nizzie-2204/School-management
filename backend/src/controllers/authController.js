const jwt = require('jsonwebtoken')
const Admin = require('../models/adminModel')
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
			(await Admin.findOne({ username: req.body.username })) ||
			(await Student.findOne({ username: req.body.username })) ||
			(await Teacher.findOne({ username: req.body.username }))

		if (!user) {
			const err = new Error('Username is not correct!')
			err.statusCode = 400
			return next(err)
		}

		console.log(user)

		// Check if use existed and password is not correct
		if (bcrypt.compareSync(req.body.password, user.password)) {
			const token = jwt.sign(
				{ userID: user._id, role: user.role },
				process.env.APP_SECRET
			)

			const data =
				(await Admin.findOne({ username: req.body.username }).select({
					password: -1,
				})) ||
				(await Student.findOne({ username: req.body.username }).select({
					password: -1,
				})) ||
				(await Teacher.findOne({ username: req.body.username }).select({
					password: -1,
				}))

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
