const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = new mongoose.model({
	startDate: { type: Date, required: true, default: new Date.now() },
	startAt: { type: String, required: true },
	schoolYear: { type: String, required: true },
	subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
	grade: { type: Number, required: true, enum: [1, 2, 3, 4, 5], default: 1 },
	name: { type: String, required: true },
	files: { type: String, required: true },
	duration: { type: Number, required: true, enum: [45, 60], default: 45 },
})

const Exam = mongoose.model('Exam', examSchema)

module.exports = Exam
