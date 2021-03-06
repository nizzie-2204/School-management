const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const Schema = mongoose.Schema

const teacherSchema = new mongoose.Schema(
	{
		username: { type: String, unique: true, trim: true },
		password: { type: String, trim: true },
		name: { type: String, trim: true, required: true },
		role: {
			type: String,
			enum: ['admin', 'student,', 'teacher'],
			default: 'teacher',
			required: true,
		},
		address: { type: String, required: true },
		dateOfBirth: { type: Date, required: true },
		gender: { type: String, required: true },
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		phone: {
			type: String,
			required: true,
			trim: true,
		},
		isLoggedIn: { type: Boolean, default: false },
		visitingTime: { type: Number, default: 0 },
		teacherType: { type: Schema.Types.ObjectId, ref: 'TeacherType' },
		timetable: [
			{
				time: { type: String, required: true, default: '07:30 - 08:05' },
				content: [
					{
						day: { type: String, required: true, default: 'Monday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Tuesday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Wednesday' },
						subject: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						class: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Thursday' },
						subject: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						class: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Friday' },
						subject: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						class: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
				],
			},
			{
				time: { type: String, required: true, default: '08:10 - 08:45' },
				content: [
					{
						day: { type: String, required: true, default: 'Monday' },
						subject: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						class: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Tuesday' },
						subject: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						class: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Wednesday' },
						subject: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						class: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Thursday' },
						subject: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						class: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Friday' },
						subject: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						class: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
				],
			},
			{
				time: { type: String, required: true, default: '09:10 - 09:45' },
				content: [
					{
						day: { type: String, required: true, default: 'Monday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Tuesday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Wednesday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Thursday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Friday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
				],
			},
			{
				time: { type: String, required: true, default: '09:50 - 10:25' },
				content: [
					{
						day: { type: String, required: true, default: 'Monday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Tuesday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Wednesday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Thursday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
					{
						day: { type: String, required: true, default: 'Friday' },
						subjectId: {
							type: Schema.Types.ObjectId,
							ref: 'Subject',
						},
						classId: { type: Schema.Types.ObjectId, ref: 'Class' },
					},
				],
			},
		],
		classId: { type: Schema.Types.ObjectId, ref: 'Class' },
	},
	{ timestamps: true }
)

teacherSchema.pre('save', function (next) {
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

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher
