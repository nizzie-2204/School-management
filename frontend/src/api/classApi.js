import axiosClient from './axios'

const token =
	localStorage.getItem('token') ||
	localStorage.getItem('teacherToken') ||
	localStorage.getItem('studentToken')

const classAPI = {
	getALlClasses: async () => {
		return await axiosClient.get('/classes', {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	getClass: async (id) => {
		return await axiosClient.get(`/classes/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	addClass: async (data) => {
		return await axiosClient.post('/classes', data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})
	},

	updateClass: async (data) => {
		return await axiosClient.put(`/classes/${data._id}`, data, {
			headers: {
				Authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
		})
	},

	deleteClass: async (id) => {
		return await axiosClient.delete(`/classes/${id}`, {
			headers: { Authorization: `Bearer ${token}` },
		})
	},

	updateStudentClass: async (data) => {
		if (data.time && data.day) {
			return await axiosClient.patch(`/classes/${data.classId}`, data, {
				headers: { Authorization: `Bearer ${token}` },
			})
		} else {
			return await axiosClient.patch(`/classes/${data.studentId}`, data, {
				headers: { Authorization: `Bearer ${token}` },
			})
		}
	},
}

export default classAPI
