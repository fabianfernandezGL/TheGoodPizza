import { Link } from '@mui/material'

import { theme } from 'styles/theme'
import { Text } from 'components/Typography'
import { selectUserInfo, logOut } from 'redux/slices/user'
import { useAppDispatch, useAppSelector } from 'redux/hooks'

export function IsUser() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUserInfo)

  const logOutUser = () => {
    dispatch(logOut())
  }

  return (
    <>
      {user.name && (
        <Text color={theme.colors.white.DEFAULT}>
          {user.name}, not you?{' '}
          <Link color="primary" onClick={logOutUser} sx={{ cursor: 'pointer' }}>
            Click here
          </Link>
        </Text>
      )}
    </>
  )
}
