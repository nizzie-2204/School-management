import axiosClient from './axios'

const examResultAPI = {
	getAllExamResults: async (token) => {
		return await axiosClient.get({
			url: '/exam-results',
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getExamResult: async (token, id) => {
		return await axiosClient.get({
			url: `/exam-results/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addExam: async (token, data) => {
		let formData = new FormData()

		formData.append('studentId', data.studentId)
		formData.append('subjectId', data.subjectId)
		formData.append('classId', data.classId)

		data.examResultImages.forEach((image) =>
			formData.append('examResultImages[]', image)
		)

		return await axiosClient.post({
			url: '/exam-results',
			data: formData,
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data',
			},
		})
	},

	updateExam: async (token, id, data) => {
		let formData = new FormData()

		formData.append('studentId', data.studentId)
		formData.append('subjectId', data.subjectId)
		formData.append('classId', data.classId)

		data.examResultImages.forEach((image) =>
			formData.append('examResultImages[]', image)
		)

		return await axiosClient.put({
			url: `/exam-results/${id}`,
			data: formData,
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'multipart/form-data',
			},
		})
	},

	deleteExam: async (token, id) => {
		return await axiosClient.delete({
			url: `/exam-results/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default examResultAPI
