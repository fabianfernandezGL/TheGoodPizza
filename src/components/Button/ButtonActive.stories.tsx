import { theme } from '../../styles/theme'
import styled from 'styled-components'
import Button from './Button'

const { black, red } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  height: 150px;
  width: 400px;
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Button/Primary',
  component: Button,
}

export const Small = () => (
  <>
    <Button color={red.DEFAULT} size="small" type="primary">
      Button
    </Button>
  </>
)

Small.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]

export const Middle = () => (
  <>
    <Button type="primary">Button</Button>
  </>
)

Middle.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]

export const Large = () => (
  <>
    <Button color={red.DEFAULT} size="large" type="primary">
      Button
    </Button>
  </>
)

Large.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]
