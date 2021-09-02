exports.errorHandler = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;

	if (err.errors) {
		err.statusCode = 400;
		err.message = [];
		for (let p in err.errors) {
			err.message.push(err.error[p].properties.message);
		}
	}

	res.status(err.statusCode).json({ status: 'fail', message: err.message });
};
