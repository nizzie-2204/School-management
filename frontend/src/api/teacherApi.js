import axiosClient from './axios'

const teacherAPI = {
	getALlTeachers: async (token) => {
		return await axiosClient.get({
			url: '/teachers',
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getTeacher: async (token, id) => {
		return await axiosClient.get({
			url: `/teachers/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addTeacher: async (token, data) => {
		return await axiosClient.post({
			url: '/teachers',
			headers: {
				Authorization: `Bearer ${token}`,
				ContentType: 'application/json',
			},
			body: JSON.stringify(data),
		})
	},

	updateTeacher: async (token, id, data) => {
		return await axiosClient.put({
			url: `/teachers/${id}`,
			headers: { Authorization: `Bearer ${token}` },
			body: JSON.stringify(data),
		})
	},

	deleteTeacher: async (token, id) => {
		return await axiosClient.delete({
			url: `/teachers/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default teacherAPI
