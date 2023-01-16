import { Tokens } from 'global.types'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const AUTH_ACCESS_KEY = 'auth-access-token'
const AUTH_REFRESH_KEY = 'auth-refresh-token'

export const setTokens = ({ access, refresh }: Tokens) => {
  cookies.set(AUTH_ACCESS_KEY, access.token, {
    expires: new Date(access.expires),
  })
  cookies.set(AUTH_REFRESH_KEY, refresh.token, {
    expires: new Date(refresh.expires),
  })
}
