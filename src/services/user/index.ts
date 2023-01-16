import { LoginProps } from 'global.types'
import { apiClient } from 'services/client'

const LOGIN_URI = '/auth/login'

const loginUser = async (credentials: LoginProps) => {
  return apiClient.post(LOGIN_URI, credentials)
}

export { loginUser }
