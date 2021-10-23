import axiosClient from './axios'

const token =
	localStorage.getItem('token') ||
	localStorage.getItem('teacherToken') ||
	localStorage.getItem('studentToken')

const examAPI = {
	getAllExams: async () => {
		return await axiosClient.get('/exams', {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getExam: async (id) => {
		return await axiosClient.get(`/exams/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addExam: async (data) => {
		return await axiosClient.post('/exams', data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},

	updateExam: async (data) => {
		return await axiosClient.put(`/exams/${data.id}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
	},

	deleteExam: async (id) => {
		return await axiosClient.delete(`/exams/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default examAPI
