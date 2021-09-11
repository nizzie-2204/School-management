import axiosClient from './axios'

const examAPI = {
	getAllExams: async (token) => {
		return await axiosClient.get({
			url: '/exams',
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getExam: async (token, id) => {
		return await axiosClient.get({
			url: `/exams/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addExam: async (token, data) => {
		let formData = new FormData()

		formData.append('startDate', data.startDate)
		formData.append('startAt', data.startAt)
		formData.append('name', data.name)
		formData.append('semester', data.semester)
		formData.append('subjectId', data.subjectId)
		formData.append('grade', data.grade)
		formData.append('duration', data.duration)
		formData.append('startDate', data.startDate)

		data.examImages.forEach((image) => formData.append('examImages[]', image))

		return await axiosClient.post({
			url: '/exams',
			data: formData,
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data',
			},
		})
	},

	updateExam: async (token, id, data) => {
		let formData = new FormData()

		formData.append('startDate', data.startDate)
		formData.append('startAt', data.startAt)
		formData.append('name', data.name)
		formData.append('semester', data.semester)
		formData.append('subjectId', data.subjectId)
		formData.append('grade', data.grade)
		formData.append('duration', data.duration)
		formData.append('startDate', data.startDate)

		data.examImages.forEach((image) => formData.append('examImages[]', image))

		return await axiosClient.put({
			url: `/exams/${id}`,
			data: formData,
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data',
			},
		})
	},

	deleteExam: async (token, id) => {
		return await axiosClient.delete({
			url: `/exams/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default examAPI
