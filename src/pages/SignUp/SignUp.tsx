import TextField from 'components/Form/Textfield'
import PrimaryLayout from 'components/Layouts/PrimaryLayout'
import { SmallTitle } from 'components/Typography'
import LoginButtons from './SignUpButtons'

export default function SignUp(): JSX.Element {
  return (
    <PrimaryLayout>
      <SmallTitle>Happy to have you!</SmallTitle>
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
        <TextField label="Name" type="text" placeholder="John Doe" mt={3} />
        <TextField
          label="Phone Number"
          type="tel"
          placeholder="+(506) 1234 5678"
          mt={3}
        />
        <LoginButtons />
      </form>
    </PrimaryLayout>
  )
}
