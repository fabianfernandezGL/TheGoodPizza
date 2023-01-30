import { Tokens } from 'global.types'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const AUTH_ACCESS_KEY = 'auth-access-token'
export const AUTH_REFRESH_KEY = 'auth-refresh-token'

export const setTokens = ({ access, refresh }: Tokens) => {
  cookies.set(AUTH_ACCESS_KEY, access.token, {
    expires: new Date(access.expires),
  })
  cookies.set(AUTH_REFRESH_KEY, refresh.token, {
    expires: new Date(refresh.expires),
  })
}

export const getAuthToken = () => {
  return cookies.get(AUTH_ACCESS_KEY)
}

export const getRefreshToken = () => {
  return cookies.get(AUTH_REFRESH_KEY)
}

export const clearTokens = () => {
  cookies.remove(AUTH_ACCESS_KEY)
  cookies.remove(AUTH_REFRESH_KEY)
}
