import axiosClient from './axios'

const subjectAPI = {
	getALlSubjects: async () => {
		const token = localStorage.getItem('token')

		return await axiosClient.get('/subjects', {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getSubject: async (id) => {
		const token = localStorage.getItem('token')

		return await axiosClient.get(`/subjects/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addSubject: async (data) => {
		const token = localStorage.getItem('token')

		return await axiosClient.post('/subjects', data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})
	},

	updateSubject: async (data) => {
		const token = localStorage.getItem('token')

		return await axiosClient.put(`/subjects/${data._id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})
	},

	deleteSubject: async (id) => {
		const token = localStorage.getItem('token')

		return await axiosClient.delete(`/subjects/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default subjectAPI
