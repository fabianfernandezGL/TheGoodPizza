import styled from 'styled-components'

import { theme } from 'styles/theme'

import Logo from './Logo'

const { black } = theme.colors

const Layout = styled.div`
  height: 300px;
  width: 300px;
  padding: 50px 50px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Logo/White',
  component: Logo,
}

export const DefaultState = () => <Logo width={200} />
DefaultState.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]
