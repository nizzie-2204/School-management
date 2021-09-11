import axiosClient from './axios'

const authAPI = {
	login: async (username, password) => {
		return axiosClient.post({
			url: '/login',
			headers: { ContentType: 'application/json' },
			body: JSON.stringify({ username, password }),
		})
	},
	logout: async (token, id) => {
		return axiosClient.post({
			url: '/logout',
			headers: { Authorization: `Bearer ${token}` },
			body: JSON.stringify(id),
		})
	},
}

export default authAPI
