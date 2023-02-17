import styled from 'styled-components'

import { theme } from 'styles/theme'

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
  title: 'Button/Primary',
  component: Button,
}

export const Small = () => (
  <>
    <Button variant="contained" size="small">
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

export const Medium = () => (
  <>
    <Button variant="contained" size="medium">
      Button
    </Button>
  </>
)

Medium.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]

export const Large = () => (
  <>
    <Button variant="contained" size="large">
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
