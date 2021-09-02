const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Student = require('../models/studentModel');
const Teacher = require('../models/teacherModel');

exports.verifyToken = async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer ')
	) {
		token = req.headers.authorization.split(' ')[1];
	}
	if (!token) {
		const error = new Error('You are not logged in');
		error.statusCode = 401;
		return next(error);
	}

	const decoded = await jwt.verify(token, process.env.APP_SECRET);

	req.decoded = decoded;
	next();
};
