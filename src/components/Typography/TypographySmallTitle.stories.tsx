import { theme } from '../../styles/theme'
import styled from 'styled-components'
import { TypographySmallTitle } from './Typography'

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
  component: TypographySmallTitle,
}

export const Black = () => (
  <>
    <TypographySmallTitle color={black.DEFAULT} margin="0">
      Small Title
    </TypographySmallTitle>
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
    <TypographySmallTitle color={yellow.DEFAULT} margin="0">
      Small Title
    </TypographySmallTitle>
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
    <TypographySmallTitle color={white.DEFAULT} margin="0">
      Small Title
    </TypographySmallTitle>
  </>
)

White.decorators = [
  (Story: any) => (
    <Layout color={black.DEFAULT}>
      <Story />
    </Layout>
  ),
]
