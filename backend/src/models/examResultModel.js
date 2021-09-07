const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examResultSchema = new mongoose.model({
	studentId: { type: mongoose.Types.ObjectId, ref: 'Student' },
	score: { type: Number },
	files: { type: String, required: true },
	subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
	classId: { type: Schema.Types.Object, ref: 'Class' },
})

const ExamResult = mongoose.model('ExamResult', examResultSchema)

module.exports = ExamResult
