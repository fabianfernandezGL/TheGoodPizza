import { theme } from '../../styles/theme'
import styled from 'styled-components'
import Button from './Button'

const { black } = theme.colors

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
    <Button variant="outlined">Button</Button>
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
    <Button variant="outlined">Button</Button>
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
    <Button variant="outlined">Button</Button>
  </>
)

Large.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]
