import axios from 'axios'

const API_URL = process.env.REACT_APP_API_BASE_URL
const apiClient = axios.create({ baseURL: API_URL })

export { apiClient }
