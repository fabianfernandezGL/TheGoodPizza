import { SmallTitle, Text } from 'components/Typography/Typography'
import LoginLayout from './LoginLayout'

export default function Login(): JSX.Element {
  return (
    <LoginLayout>
      <SmallTitle>Welcome back!</SmallTitle>
      <Text>Here the login form!</Text>
    </LoginLayout>
  )
}
