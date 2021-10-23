import axiosClient from './axios'

const token =
	localStorage.getItem('token') ||
	localStorage.getItem('teacherToken') ||
	localStorage.getItem('studentToken')

const examResultAPI = {
	getAllExamResults: async () => {
		return await axiosClient.get('/exam-results', {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getExamResult: async (id) => {
		return await axiosClient.get(`/exam-results/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addExam: async (data) => {
		return await axiosClient.post('/exam-results', data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},

	updateExam: async (data) => {
		return await axiosClient.put(`/exam-results/${data.id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},

	deleteExam: async (id) => {
		return await axiosClient.delete(`/exam-results/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default examResultAPI
