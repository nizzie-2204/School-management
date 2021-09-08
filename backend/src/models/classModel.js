const mongoose = require('mongoose')
const Schema = mongoose.Schema

const classSchema = new Schema(
	{
		teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
		name: { type: String, required: true, unique: true },
		timetable: [
			{
				time: { type: String, default: '07:30 - 08:05' },
				content: [
					{
						day: { type: String, default: 'Monday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Tuesday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Wednesday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Thursday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Friday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
				],
			},
			{
				time: { type: String, default: '08:10 - 08:45' },
				content: [
					{
						day: { type: String, default: 'Monday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Tuesday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Wednesday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Thursday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Friday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
				],
			},
			{
				time: { type: String, default: '09:10 - 09:45' },
				content: [
					{
						day: { type: String, default: 'Monday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Tuesday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Wednesday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Thursday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Friday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
				],
			},
			{
				time: { type: String, default: '09:50 - 10:25' },
				content: [
					{
						day: { type: String, default: 'Monday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Tuesday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Wednesday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Thursday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
					{
						day: { type: String, default: 'Friday' },
						subjectId: { type: Schema.Types.ObjectId, ref: 'Subject' },
						teacherId: { type: Schema.Types.ObjectId, ref: 'Teacher' },
					},
				],
			},
		],
		students: [{ type: String, maxLength: 30 }],
		schoolYear: { type: String, default: '2021-2022' },
		grade: { type: Number, enum: [1, 2, 3, 4, 5], default: 1 },
		idClassOnline: { type: String },
	},
	{ timestamps: true }
)

const Class = mongoose.model('Class', classSchema)

module.exports = Class
