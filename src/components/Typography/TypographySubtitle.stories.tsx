import { theme } from '../../styles/theme'
import styled from 'styled-components'
import { TypographySubtitle } from './Typography'

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
  component: TypographySubtitle,
}

export const Black = () => (
  <>
    <TypographySubtitle color={black.DEFAULT} margin="0">
      Subtitle
    </TypographySubtitle>
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
    <TypographySubtitle color={yellow.DEFAULT} margin="0">
      Subtitle
    </TypographySubtitle>
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
    <TypographySubtitle color={white.DEFAULT} margin="0">
      Subtitle
    </TypographySubtitle>
  </>
)

White.decorators = [
  (Story: any) => (
    <Layout color={black.DEFAULT}>
      <Story />
    </Layout>
  ),
]
