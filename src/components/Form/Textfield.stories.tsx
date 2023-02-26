import styled from 'styled-components'
import { FieldError, useForm } from 'react-hook-form'

import { theme } from 'styles/theme'

import TextField from './Textfield'

const { black } = theme.colors

const Layout = styled.div`
  width: 80%;
  background-color: ${black.DEFAULT};
  padding: 2%;
`

export default {
  title: 'Form/Textfield',
  component: TextField,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
}

export const Normal = () => {
  const { control } = useForm()

  return (
    <TextField
      name="errorTextInput"
      label="Email"
      type="email"
      placeholder="example@goodpizzaclub.com"
      control={control}
    />
  )
}

export const Error = () => {
  const { control } = useForm()

  return (
    <TextField
      name="errorTextInput"
      label="Email"
      type="email"
      fieldError={{ message: 'This is an error!' } as FieldError}
      placeholder="example@goodpizzaclub.com"
      control={control}
    />
  )
}
