import axiosClient from './axios'

const token =
	localStorage.getItem('token') ||
	localStorage.getItem('teacherToken') ||
	localStorage.getItem('studentToken')

const studentAPI = {
	getALlStudents: async () => {
		return await axiosClient.get('/students', {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getStudent: async (id) => {
		return await axiosClient.get(`/students/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addStudent: async (data) => {
		return await axiosClient.post('/students', data, {
			headers: {
				Authorization: `Bearer ${token}`,
				ContentType: 'application/json',
			},
		})
	},

	updateStudent: async (data) => {
		return await axiosClient.put(`/students/${data._id}`, data, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	deleteStudent: async (id) => {
		return await axiosClient.delete(`/students/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default studentAPI
