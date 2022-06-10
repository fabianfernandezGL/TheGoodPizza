import { theme } from '../../styles/theme'
import styled from 'styled-components'
import { SmallTitle } from './Typography'

const { white, black, yellow } = theme.colors

interface LayoutProps {
  color: string
}

const Layout = styled.div<LayoutProps>`
  height: 100px;
  width: 300px;
  padding: 25px;
  background-color: ${(props) => props.color};
`

export default {
  title: 'Typography/Small Title',
  component: SmallTitle,
}

export const Black = () => (
  <>
    <SmallTitle color={black.DEFAULT} margin="0">
      Small Title
    </SmallTitle>
  </>
)

Black.decorators = [
  (Story: any) => (
    <Layout color={white.DEFAULT}>
      <Story />
    </Layout>
  ),
]

export const Yellow = () => (
  <>
    <SmallTitle color={yellow.DEFAULT} margin="0">
      Small Title
    </SmallTitle>
  </>
)

Yellow.decorators = [
  (Story: any) => (
    <Layout color={black.DEFAULT}>
      <Story />
    </Layout>
  ),
]

export const White = () => (
  <>
    <SmallTitle color={white.DEFAULT} margin="0">
      Small Title
    </SmallTitle>
  </>
)

White.decorators = [
  (Story: any) => (
    <Layout color={black.DEFAULT}>
      <Story />
    </Layout>
  ),
]
