const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const teacherSchema = new mongoose.Schema(
	{
		username: { type: String, unique: true, trim: true },
		password: { type: String, trim: true },
		name: { type: String, trim: true, required: true },
		role: {
			type: String,
			enum: ['admin', 'student,', 'teacher'],
			default: 'admin',
			required: true,
		},
		address: { type: String, required: true },
		dateOfBirth: { type: Date, required: true },
		gender: { type: String, required: true },
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		phone: {
			type: String,
			required: true,
			trim: true,
		},
		isClassHeadTeacher: { type: Boolean, default: false },
		subject: Array,
		// classId:
	},
	{ timestamps: true }
);

teacherSchema.pre('save', function (next) {
	let user = this;

	bcrypt.hash(user.password, 10, (err, hash) => {
		if (err) {
			return next(err);
		} else {
			user.password = hash;
			next();
		}
	});
});

const Teacher = mongoose.model('Teacher', teacherSchema, 'users');

module.exports = Teacher;
