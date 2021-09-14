import axiosClient from './axios'

const authAPI = {
	login: async (user) => {
		return axiosClient.post('/login', user, {
			headers: {
				'Content-Type': 'application/json',
			},
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
