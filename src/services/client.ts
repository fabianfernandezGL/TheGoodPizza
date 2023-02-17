import axios, { AxiosError } from 'axios'

import { getAuthToken } from 'utils/tokenHelper'

import { refreshToken } from './auth'

const API_URL = process.env.REACT_APP_API_BASE_URL
const apiClient = axios.create({ baseURL: API_URL })
const apiConfig = {
  headers: { Authorization: `Bearer ${getAuthToken()}` },
}

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

export { apiClient, apiConfig }
