import axiosClient from './axios'

const studentAPI = {
	getALlStudents: async (token) => {
		return await axiosClient.get({
			url: '/students',
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getStudent: async (token, id) => {
		return await axiosClient.get({
			url: `/students/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addStudent: async (token, data) => {
		return await axiosClient.post({
			url: '/students',
			headers: {
				Authorization: `Bearer ${token}`,
				ContentType: 'application/json',
			},
			body: JSON.stringify(data),
		})
	},

	updateStudent: async (token, id, data) => {
		return await axiosClient.put({
			url: `/students/${id}`,
			headers: { Authorization: `Bearer ${token}` },
			body: JSON.stringify(data),
		})
	},

	deleteStudent: async (token, id) => {
		return await axiosClient.delete({
			url: `/students/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default studentAPI
