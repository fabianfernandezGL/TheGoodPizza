import { Divider, Link } from '@mui/material'
import { Box } from '@mui/system'
import TextField from 'components/Form/Textfield'
import { SmallTitle, Text } from 'components/Typography'
import LoginButtons from './LoginButtons'
import { theme } from 'styles/theme'
import routes from '../../constants/routes.json'
import PrimaryLayout from 'components/Layouts/PrimaryLayout'

export default function Login(): JSX.Element {
  return (
    <PrimaryLayout>
      <SmallTitle>Welcome back!</SmallTitle>
      <form>
        <TextField
          label="Email"
          type="email"
          placeholder="example@goodpizzaclub.com"
          mt={3}
        />
        <TextField
          label="Password"
          type="password"
          placeholder="••••••••••"
          mt={3}
        />
        <LoginButtons />
      </form>
      <Box mt={5} mx="auto" width="50%">
        <Divider color={theme.colors.white.DEFAULT} />
      </Box>
      <Text mt={2} align="center" color={theme.colors.white.DEFAULT}>
        Not on <strong>Good Pizza Club</strong> yet?{' '}
        <Link href={routes.SIGN_UP}>Sign up</Link>
      </Text>
    </PrimaryLayout>
  )
}
