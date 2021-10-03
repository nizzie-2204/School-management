import axiosClient from './axios'

const authAPI = {
	login: async (user) => {
		return await axiosClient.post('/login', user, {
			headers: {
				'Content-Type': 'application/json',
			},
		})
	},
	logout: async (id) => {
		const token =
			localStorage.getItem('token') ||
			localStorage.getItem('teacherToken') ||
			localStorage.getItem('studentToken')

		return await axiosClient.post('/logout', id, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default authAPI
