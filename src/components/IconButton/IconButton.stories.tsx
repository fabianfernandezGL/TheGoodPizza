import { theme } from '../../styles/theme'
import styled from 'styled-components'
import IconButton from './IconButton'
import { PhotoAlbumSharp } from '@mui/icons-material'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  height: 150px;
  width: 400px;
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'IconButton/Primary',
  component: IconButton,
}

export const Default = () => (
  <>
    <IconButton>
      <PhotoAlbumSharp />
    </IconButton>
  </>
)

Default.decorators = [
  (Story: any) => (
    <Layout>
      <Story />
    </Layout>
  ),
]
