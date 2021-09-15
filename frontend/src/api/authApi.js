import axiosClient from './axios'

const authAPI = {
	login: async (user) => {
		return await axiosClient.post('/login', user, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
	},
	logout: async (token, id) => {
		return await axiosClient.post({
			url: '/logout',
			headers: { Authorization: `Bearer ${token}` },
			body: JSON.stringify(id),
		})
	},
}

export default authAPI
