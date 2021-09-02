const User = require('../models/userModel');
const Teacher = require('../models/teacherModel');
const Student = require('../models/studentModel');
const createPassword = require('../utils/createPassword');
const createUsername = require('../utils/createUsername');

exports.createUser = async (req, res, next) => {
	try {
		if (req.body.role === 'student') {
			const password = createPassword();

			const data = await Student.find({ role: 'student' })
				.sort({ _id: -1 })
				.limit(1)
				.then((res) => res)
				.catch((error) => {
					console.log(error);
				});
			const userInDB = await data;
			const userInfo = {
				username: createUsername(
					userInDB[0]?.username?.slice(-5),
					req.body.role
				),
				password: password,
				...req.body,
			};
			const user = await Student.create(userInfo);
			res.status(200).json({
				status: 'success',
				data: { username: user.username, password: password },
			});
		} else if (req.body.role === 'teacher') {
			const password = createPassword();

			const data = await Teacher.find({ role: 'teacher' })
				.sort({ _id: -1 })
				.limit(1)
				.then((res) => res)
				.catch((error) => {
					console.log(error);
				});
			const userInfo = {
				username: createUsername(data[0]?.username?.slice(-5), req.body.role),
				password: password,
				...req.body,
			};

			const user = await Teacher.create(userInfo);
			res.status(200).json({
				status: 'success',
				data: { username: user.username, password: password },
			});
		} else {
			const user = await User.create(req.body);
			res.status(200).json({
				status: 'success',
				data: user,
			});
		}
	} catch (error) {
		next(error);
	}
};

exports.getAllUsers = async (req, res, next) => {
	try {
		const users =
			(await User.find()) || (await Student.find()) || (await Teacher.find());

		res.status(200).json({ status: 'success', data: users });
	} catch (error) {
		next(error);
	}
};

exports.getUser = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.id).select('-password');

		if (!user) {
			const error = new Error('User does not exist: ' + userId);
			error.statusCode = 404;
			return next(error);
		}

		res.status(200).json({ status: 'success', data: user });
	} catch (error) {
		next(error);
	}
};

exports.updateUser = async (req, res, next) => {
	try {
		const user = await User.findByIdAndUpdate(
			req.params.id,
			{ ...req.body },
			{ new: true, runValidators: true }
		);

		res.status(200).json({ status: 'success', data: user });
	} catch (error) {
		next(error);
	}
};

exports.deleteUser = async (req, res, next) => {
	try {
		await User.findByIdAndDelete(req.params.id);

		res
			.status(200)
			.json({ status: 'success', message: 'User has been deleted' });
	} catch (error) {
		next(error);
	}
};
