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
			(await Teacher.findOne({ username: req.body.username })) ||
			(await Student.findOne({ username: req.body.username }))
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

			const newUser =
				(await Admin.findOne({ username: req.body.username }).select(
					'-password'
				)) ||
				(await Student.findOneAndUpdate(
					{ username: req.body.username },
					{ $inc: { visitingTime: 1 }, isLoggedIn: true },
					{
						new: true,
						runValidators: true,
					}
				)
					.populate('classId')
					.select('-password')
					.lean()) ||
				(await Teacher.findOneAndUpdate(
					{ username: req.body.username },
					{ $inc: { visitingTime: 1 }, isLoggedIn: true },
					{
						new: true,
						runValidators: true,
					}
				)
					.populate({
						path: 'teacherType',
						populate: {
							path: 'subjects',
						},
					})
					.populate('classId')
					.select('-password')
					.lean())
			res.status(200).json({
				status: 'success',
				data: { token: token, user: newUser },
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

exports.logout = async (req, res, next) => {
	try {
		// const a = await Student.findById(req.body.id).select('-password')
		// res.json({ data: a })
		const user =
			(await Admin.findById(req.body.id).select('-password')) ||
			(await Student.findByIdAndUpdate(
				req.body.id,
				{
					$set: { isLoggedIn: false },
				},
				{
					new: true,
					runValidators: true,
				}
			)
				.select('-password')
				.lean()) ||
			(await Teacher.findByIdAndUpdate(
				req.body.id,
				{
					$set: { isLoggedIn: false },
				},
				{
					new: true,
					runValidators: true,
				}
			)
				.select('-password')
				.lean())

		res.json({ message: 'Logout successful', data: user })
	} catch (error) {
		next(error)
	}
}
