import axiosClient from './axios'

const subjectAPI = {
	getALlSubjects: async (token) => {
		return await axiosClient.get({
			url: '/subjects',
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getSubject: async (token, id) => {
		return await axiosClient.get({
			url: `/subjects/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addSubject: async (token, data) => {
		return await axiosClient.post({
			url: '/subjects',
			headers: {
				Authorization: `Bearer ${token}`,
				ContentType: 'application/json',
			},
			body: JSON.stringify(data),
		})
	},

	updateSubject: async (token, id, data) => {
		return await axiosClient.put({
			url: `/subjects/${id}`,
			headers: { Authorization: `Bearer ${token}` },
			body: JSON.stringify(data),
		})
	},

	deleteSubject: async (token, id) => {
		return await axiosClient.delete({
			url: `/subjects/${id}`,
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default subjectAPI
