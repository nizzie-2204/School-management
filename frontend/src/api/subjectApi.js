import axiosClient from './axios'

const token =
	localStorage.getItem('token') ||
	localStorage.getItem('teacherToken') ||
	localStorage.getItem('studentToken')

const subjectAPI = {
	getALlSubjects: async () => {
		return await axiosClient.get('/subjects', {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getSubject: async (id) => {
		return await axiosClient.get(`/subjects/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addSubject: async (data) => {
		return await axiosClient.post('/subjects', data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})
	},

	updateSubject: async (data) => {
		return await axiosClient.put(`/subjects/${data._id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})
	},

	deleteSubject: async (id) => {
		return await axiosClient.delete(`/subjects/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default subjectAPI
