import { Link } from '@mui/material'
import { Text } from 'components/Typography'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { selectUserInfo } from 'redux/slices/user'
import { theme } from 'styles/theme'
import { logOut } from 'redux/slices/user'

export function IsUser() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUserInfo)

  const logOutUser = () => {
    dispatch(logOut)
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
