const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const adminSchema = new mongoose.Schema(
	{
		username: { type: String, trim: true, unique: true, required: true },
		password: { type: String, trim: true, required: true },
		name: { type: String, trim: true, required: true },
		role: {
			type: String,
			enum: ['admin', 'student,', 'teacher'],
			default: 'admin',
			required: true,
		},
	},
	{ timestamps: true }
)

adminSchema.pre('save', function (next) {
	let user = this

	bcrypt.hash(user.password, 10, (err, hash) => {
		if (err) {
			return next(err)
		} else {
			user.password = hash
			next()
		}
	})
})

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin
