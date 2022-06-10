import { theme } from '../../styles/theme'
import styled from 'styled-components'
import { Text } from './Typography'

const { white, black, yellow } = theme.colors

interface LayoutProps {
  color: string
}

const Layout = styled.div<LayoutProps>`
  height: 200px;
  width: 400px;
  padding: 25px;
  background-color: ${(props) => props.color};
`

export default {
  title: 'Typography/Simple Text',
  component: Text,
}

export const Black = () => (
  <>
    <Text color={black.DEFAULT} margin="0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi dolores,
      minus quod ipsam, perspiciatis aliquid necessitatibus vel, exercitationem
      debitis est quasi a! Quod quos odio consectetur aliquam obcaecati. Facere.
    </Text>
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
    <Text color={yellow.DEFAULT} margin="0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi dolores,
      minus quod ipsam, perspiciatis aliquid necessitatibus vel, exercitationem
      debitis est quasi a! Quod quos odio consectetur aliquam obcaecati. Facere.
    </Text>
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
    <Text color={white.DEFAULT} margin="0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi dolores,
      minus quod ipsam, perspiciatis aliquid necessitatibus vel, exercitationem
      debitis est quasi a! Quod quos odio consectetur aliquam obcaecati. Facere.
    </Text>
  </>
)

White.decorators = [
  (Story: any) => (
    <Layout color={black.DEFAULT}>
      <Story />
    </Layout>
  ),
]
