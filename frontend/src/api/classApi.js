import axiosClient from './axios'

const classAPI = {
	getALlClasses: async (token) => {
		return await axiosClient.get({
			url: '/classes',
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getClass: async (token, id) => {
		return await axiosClient.get({
			url: `/classes/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addClass: async (token, data) => {
		return await axiosClient.post({
			url: '/classes',
			headers: {
				Authorization: `Bearer ${token}`,
				ContentType: 'application/json',
			},
			body: JSON.stringify(data),
		})
	},

	updateClass: async (token, id, data) => {
		return await axiosClient.put({
			url: `/classes/${id}`,
			headers: { Authorization: `Bearer ${token}` },
			body: JSON.stringify(data),
		})
	},

	deleteClass: async (token, id) => {
		return await axiosClient.delete({
			url: `/classes/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default classAPI
