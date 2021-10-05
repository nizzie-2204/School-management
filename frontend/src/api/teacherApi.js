import axiosClient from './axios'

const token = localStorage.getItem('token')

const teacherAPI = {
	getALlTeachers: async () => {
		return await axiosClient.get('/teachers', {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getTeacher: async (id) => {
		return await axiosClient.get(`/teachers/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addTeacher: async (data) => {
		return await axiosClient.post('/teachers', data, {
			headers: {
				Authorization: `Bearer ${token}`,
				ContentType: 'application/json',
			},
		})
	},

	updateTeacher: async (data) => {
		return await axiosClient.put(`/teachers/${data._id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
				ContentType: 'application/json',
			},
		})
	},

	updateClassTeacher: async (id) => {
		return await axiosClient.patch(
			`/teachers/${id}`,
			{},
			{
				headers: { Authorization: `Bearer ${token}` },
			}
		)
	},

	deleteTeacher: async (id) => {
		return await axiosClient.delete(`/teachers/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default teacherAPI
