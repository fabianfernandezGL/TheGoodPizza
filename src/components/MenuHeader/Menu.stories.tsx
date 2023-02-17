import styled from 'styled-components'

import { theme } from 'styles/theme'

import MenuHeader from './Menu'

const { black } = theme.colors

const Layout = styled.div`
  height: 50vh;
  width: 100%;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Menu/Full Menu',
  component: MenuHeader,
}

export const DefaultState = () => <MenuHeader isAuthenticated={true} />
DefaultState.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]
