import { theme } from '../../styles/theme'
import styled from 'styled-components'
import { Subtitle } from './Typography'

const { white, black, yellow } = theme.colors

interface LayoutProps {
  color: string
}

const Layout = styled.div<LayoutProps>`
  height: 100px;
  width: 200px;
  padding: 25px;
  background-color: ${(props) => props.color};
`

export default {
  title: 'Typography/Subtitle',
  component: Subtitle,
}

export const Black = () => (
  <>
    <Subtitle color={black.DEFAULT} margin="0">
      Subtitle
    </Subtitle>
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
    <Subtitle color={yellow.DEFAULT} margin="0">
      Subtitle
    </Subtitle>
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
    <Subtitle color={white.DEFAULT} margin="0">
      Subtitle
    </Subtitle>
  </>
)

White.decorators = [
  (Story: any) => (
    <Layout color={black.DEFAULT}>
      <Story />
    </Layout>
  ),
]
