const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examResultSchema = new Schema(
	{
		studentId: { type: mongoose.Types.ObjectId, ref: 'Student' },
		score: { type: Number, default: 0 },
		examResultImages: [],
		comment: { type: String },
	},
	{ timestamps: true }
)

const ExamResult = mongoose.model('ExamResult', examResultSchema)

module.exports = ExamResult
