import { theme } from '../../styles/theme'
import styled from 'styled-components'
import { BigTitle } from './Typography'

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
  component: BigTitle,
}

export const Black = () => (
  <>
    <BigTitle color={black.DEFAULT} margin="0">
      Big Title
    </BigTitle>
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
    <BigTitle color={yellow.DEFAULT} margin="0">
      Big Title
    </BigTitle>
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
    <BigTitle color={white.DEFAULT} margin="0">
      Big Title
    </BigTitle>
  </>
)

White.decorators = [
  (Story: any) => (
    <Layout color={black.DEFAULT}>
      <Story />
    </Layout>
  ),
]
