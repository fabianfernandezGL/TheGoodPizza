import styled from 'styled-components'
import { theme } from 'styles/theme'

const { black } = theme.colors

const MainLayout = styled.div`
  height: 100vh;
  max-height: 100vh;
  background-color: ${black.DEFAULT};
`

export default MainLayout
