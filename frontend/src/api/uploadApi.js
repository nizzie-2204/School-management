import axiosClient from './axios'

const token =
	localStorage.getItem('token') ||
	localStorage.getItem('teacherToken') ||
	localStorage.getItem('studentToken')

const uploadAPI = {
	upload: async (files) => {
		let formData = new FormData()
		files.forEach((file) => {
			formData.append('files[]', file)
		})

		console.log(formData.get('files'))

		return await axiosClient.post('/upload', formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
				Authorization: `Bearer ${token}`,
			},
		})
	},
	destroy: async (data) => {
		let formData = new FormData()

		return await axiosClient.post('/destroy', data, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},
}

export default uploadAPI
