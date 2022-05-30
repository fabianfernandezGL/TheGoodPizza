import { theme } from '../../styles/theme'
import styled from 'styled-components'
import { TypographyText } from './Typography'

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
  component: TypographyText,
}

export const Black = () => (
  <>
    <TypographyText color={black.DEFAULT} margin="0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi dolores,
      minus quod ipsam, perspiciatis aliquid necessitatibus vel, exercitationem
      debitis est quasi a! Quod quos odio consectetur aliquam obcaecati. Facere.
    </TypographyText>
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
    <TypographyText color={yellow.DEFAULT} margin="0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi dolores,
      minus quod ipsam, perspiciatis aliquid necessitatibus vel, exercitationem
      debitis est quasi a! Quod quos odio consectetur aliquam obcaecati. Facere.
    </TypographyText>
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
    <TypographyText color={white.DEFAULT} margin="0">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. At modi dolores,
      minus quod ipsam, perspiciatis aliquid necessitatibus vel, exercitationem
      debitis est quasi a! Quod quos odio consectetur aliquam obcaecati. Facere.
    </TypographyText>
  </>
)

White.decorators = [
  (Story: any) => (
    <Layout color={black.DEFAULT}>
      <Story />
    </Layout>
  ),
]
