const mongoose = require('mongoose')

const typeTeacherSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
	},
	grade: { type: String, required: true },
	subjects: Array,
})

const TypeTeacher = mongoose.model('Subject', typeTeacherSchema)

module.exports = TypeTeacher
