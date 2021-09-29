import axiosClient from './axios'

const token = localStorage.getItem('token')

const typeTeacherAPI = {
	getAllTypeTeacher: async () => {
		return await axiosClient.get('/teacher-types/', {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getTypeTeacher: async (id) => {
		return await axiosClient.get(`/teacher-types/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addTypeTeacher: async (data) => {
		return await axiosClient.post('/teacher-types', data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})
	},

	updateTypeTeacher: async (data) => {
		return await axiosClient.put(`/teacher-types/${data._id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})
	},

	deleteTypeTeacher: async (id) => {
		return await axiosClient.delete(`/teacher-types/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default typeTeacherAPI
