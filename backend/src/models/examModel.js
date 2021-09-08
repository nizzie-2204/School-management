const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = new Schema(
	{
		startDate: { type: Date, required: true, default: Date.now },
		startAt: { type: String, required: true },
		name: { type: String, required: true },
		schoolYear: { type: String, default: '2021-2022' },
		semester: {
			type: String,
			enum: ['Giữa học kì 1', 'Học kì 1', 'Giữa học kì 2', 'Học kì 2'],
			default: 'Giữa học kì 1',
		},
		subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
		grade: { type: Number, enum: [1, 2, 3, 4, 5], default: 1 },
		examImages: { type: String, required: true },
		duration: { type: Number, enum: [45, 60], default: 45 },
	},
	{ timestamps: true }
)

const Exam = mongoose.model('Exam', examSchema)

module.exports = Exam
