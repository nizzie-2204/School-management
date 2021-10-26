const mongoose = require('mongoose')
const Schema = mongoose.Schema

const examSchema = new Schema(
	{
		name: { type: String, required: true, unique: true },
		startAt: { type: Date, required: true },
		semester: {
			type: String,
			enum: [
				'Giữa học kỳ 1',
				'Cuối học kỳ 1',
				'Giữa học kỳ 2',
				'Cuối học kì 2',
			],
			default: 'Giữa học kì 1',
		},
		duration: { type: Number, default: 45 },
		subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
		grade: { type: Number, enum: [1, 2, 3, 4, 5], default: 1 },
		examFile: [],
		examResult: [{ type: Schema.Types.ObjectId, ref: 'ExamResult' }],
	},
	{ timestamps: true }
)

const Exam = mongoose.model('Exam', examSchema)

module.exports = Exam
