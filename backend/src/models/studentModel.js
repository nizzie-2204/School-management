const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const studentSchema = new mongoose.Schema(
	{
		username: { type: String, trim: true, unique: true },
		password: { type: String, trim: true, unique: true },
		name: { type: String, trim: true, required: true },
		role: {
			type: String,
			enum: ['admin', 'student', 'teacher'],
			default: 'admin',
			required: true,
		},
		address: { type: String, required: true },
		dateOfBirth: { type: Date, required: true },
		gender: { type: String, required: true },
		parents: {
			father: {
				name: { type: String, required: true },
				email: { type: String, required: true, unique: true },
				phone: {
					type: String,
					required: true,
					trim: true,
				},
				dateOfBirth: { type: Date, required: true },
				address: { type: String, required: true },
			},
			mother: {
				name: { type: String, required: true },
				email: { type: String, required: true, unique: true },
				phone: {
					type: String,
					required: true,
					trim: true,
				},
				dateOfBirth: { type: Date, required: true },
				address: { type: String, required: true },
			},
		},
		isLoggedIn: { type: Boolean, default: false },
		visitingTime: { type: Number, default: 0 },
		classId: { type: String, required: true },
	},
	{ timestamps: true }
)

studentSchema.pre('save', function (next) {
	let user = this
	bcrypt.hash(user.password, 10, (error, hash) => {
		if (error) {
			return next(error)
		} else {
			user.password = hash
			next()
		}
	})
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student
