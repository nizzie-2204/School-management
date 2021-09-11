import axios from 'axios'

const axiosClient = axios.create({
	baseURL: 'localhost:8000/api/v1',
})

export default axiosClient
