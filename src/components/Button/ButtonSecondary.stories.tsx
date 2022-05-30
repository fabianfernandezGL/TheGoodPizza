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
  title: 'Button/Default',
  component: Button,
}

export const Small = () => (
  <>
    <Button color={red.DEFAULT} size="small" type="default">
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
    <Button color={red.DEFAULT} size="middle" type="default">
      Button
    </Button>
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
    <Button color={red.DEFAULT} size="large" type="default">
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
