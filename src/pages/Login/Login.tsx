import Button from 'components/Button'
import TextField from 'components/Form/Textfield'
import { SmallTitle } from 'components/Typography/Typography'
import LoginLayout from './LoginLayout'

export default function Login(): JSX.Element {
  return (
    <LoginLayout>
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
          placeholder="hello"
          mt={3}
        />
        <Button type="submit" variant="contained" color="success">
          Log In
        </Button>
      </form>
    </LoginLayout>
  )
}
