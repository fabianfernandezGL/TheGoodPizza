import styled from 'styled-components'
import TextField from './Textfield'
import { theme } from '../../styles/theme'

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
      label="Email"
      error="This is an error!"
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
