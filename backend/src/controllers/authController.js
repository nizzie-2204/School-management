const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Student = require('../models/studentModel');
const Teacher = require('../models/teacherModel');
const bcrypt = require('bcryptjs');

exports.login = async (req, res, next) => {
	try {
		const { username, password } = req.body;

		// Check if email and password exist
		if (!username || !password) {
			res.json('Please provide email and password!');
		}

		// Check if use existed and username is not correct
		const user =
			(await User.findOne({ username: req.body.username })) ||
			(await Student.findOne({ username: req.body.username })) ||
			(await Teacher.findOne({ username: req.body.username }));

		if (!user) {
			res.json('Username is not correct');
		}

		// Check if use existed and password is not correct
		if (bcrypt.compareSync(req.body.password, user.password)) {
			const token = jwt.sign(
				{ userID: user._id, role: user.role },
				process.env.APP_SECRET
			);

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
				));

			res.status(200).json({
				status: 'success',
				data: { token: token, user: data },
			});
		} else {
			res.json('Password is not correct');
		}
	} catch (error) {}
};
