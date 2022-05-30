import { theme } from '../../styles/theme'
import styled from 'styled-components'
import { TypographyBigTitle } from './Typography'

const { white, black, yellow } = theme.colors

interface LayoutProps {
  color: string
}

const Layout = styled.div<LayoutProps>`
  height: 150px;
  width: 400px;
  padding: 25px;
  background-color: ${(props) => props.color};
`

export default {
  title: 'Typography/Big Title',
  component: TypographyBigTitle,
}

export const Black = () => (
  <>
    <TypographyBigTitle color={black.DEFAULT} margin="0">
      Big Title
    </TypographyBigTitle>
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
    <TypographyBigTitle color={yellow.DEFAULT} margin="0">
      Big Title
    </TypographyBigTitle>
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
    <TypographyBigTitle color={white.DEFAULT} margin="0">
      Big Title
    </TypographyBigTitle>
  </>
)

White.decorators = [
  (Story: any) => (
    <Layout color={black.DEFAULT}>
      <Story />
    </Layout>
  ),
]
