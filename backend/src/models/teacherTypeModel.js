const mongoose = require('mongoose')
const Schema = mongoose.model

const teacherTypeSchema = Schema(
	{
		isClassHeadTeacher: { type: Boolean, default: false },
		nameType: { type: String, required: true, unique: true },
		subjects: [{ type: Schema.Types.ObjectId, ref: 'Subject' }],
	},
	{ timestamps: true }
)

const TeacherType = mongoose.model('TeacherType', teacherTypeSchema)

module.exports = TeacherType
