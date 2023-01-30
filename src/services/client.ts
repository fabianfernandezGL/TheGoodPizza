import axios, { AxiosError } from 'axios'
import { refreshToken } from './user'

const API_URL = process.env.REACT_APP_API_BASE_URL
const apiClient = axios.create({ baseURL: API_URL })

apiClient.interceptors.response.use(
  (response) => {
    return response
  },
  async (error): Promise<AxiosError> => {
    const originalRequest = error.config

    if (
      !originalRequest.headers['skip-auth'] &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true
      await refreshToken()
      return apiClient(originalRequest)
    }

    return Promise.reject(error)
  }
)

export { apiClient }
