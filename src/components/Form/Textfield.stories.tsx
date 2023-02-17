import styled from 'styled-components'
import { FieldError } from 'react-hook-form'

import { theme } from 'styles/theme'

import TextField from './Textfield'

const { black } = theme.colors

const Layout = styled.div`
  width: 100%;
  background-color: ${black.DEFAULT};
  padding: 2%;
`

export default {
  title: 'Form/Textfield',
  component: TextField,
}

export const Normal = () => (
  <>
    <TextField
      name="errorTextInput"
      label="Email"
      type="email"
      placeholder="example@goodpizzaclub.com"
    />
  </>
)

Normal.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]

export const Error = () => (
  <>
    <TextField
      name="errorTextInput"
      label="Email"
      fieldError={{ message: 'This is an error!' } as FieldError}
      placeholder="example@goodpizzaclub.com"
    />
  </>
)

Error.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]
