import { AxiosError } from 'axios'
import { LoginProps, SignUpProps, User } from 'global.types'
import { apiClient } from 'services/client'
import { clearTokens, getRefreshToken, setTokens } from 'utils/tokenHelper'

const LOGIN_URI = '/auth/login'
const REGISTER_URI = '/auth/register'
const REFRESH_TOKENS_URI = '/auth/refresh-tokens'

const loginUser = (credentials: LoginProps) => {
  return apiClient
    .post(LOGIN_URI, credentials, { headers: { 'skip-auth': true } })
    .then(({ data }) => {
      const { tokens, user } = data as User
      setTokens(tokens)
      return user
    })
}

const registerUser = (credentials: SignUpProps) => {
  return apiClient
    .post(REGISTER_URI, credentials, { headers: { 'skip-auth': true } })
    .then(({ data }) => {
      const { tokens, user } = data as User
      setTokens(tokens)
      return user
    })
}

const refreshToken = () => {
  return apiClient
    .post(REFRESH_TOKENS_URI, {
      refreshToken: getRefreshToken(),
    })
    .then(({ data }) => {
      setTokens({
        refresh: data.refresh,
        access: data.access,
      })
    })
    .catch((err: AxiosError) => {
      clearTokens()
      throw err
    })
}

export { loginUser, registerUser, refreshToken }
