import styled from 'styled-components'
import { theme } from '../../styles/theme'

const { black } = theme.colors

const MainLayout = styled.div`
  padding: 2rem 6.5rem 6.5rem 6.5rem;
  height: 100vh;
  max-height: 100vh;
  background-color: ${black.DEFAULT};
`

export default MainLayout
