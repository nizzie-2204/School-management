const jwt = require('jsonwebtoken');

exports.permit = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.decoded.role)) {
			const error = new Error(
				'You do not have permissions to perform this action'
			);
			error.statusCode = 403;
			return next(error);
		}
		next();
	};
};
