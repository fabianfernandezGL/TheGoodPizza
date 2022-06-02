import ContainerLayout from 'components/Layouts/ContainerLayout'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import MainDescription from './MainDescription/MainDescription'
import OurLinks from './OurLinks/OurLinks'
import ImportantStuff from './ImportantStuff/ImportantStuff'
import OurFeed from './OurFeed/OurFeed'
import { Grid } from '@mui/material'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  width: 100%;
`

const Footer = () => {
  return (
    <Layout>
      <ContainerLayout
        backgroundColor={theme.colors.orange.DEFAULT}
        radiusValue="367.5px"
        roundCorner="rightUp"
        colSpan={24}
        withPadding
      >
        <Grid container>
          <Grid item sm={3}>
            <MainDescription />
          </Grid>
          <Grid item sm={2}>
            <OurLinks />
          </Grid>
          <Grid item sm={2}>
            <ImportantStuff />
          </Grid>
          <Grid item sm={3}>
            <OurFeed />
          </Grid>
        </Grid>
      </ContainerLayout>
    </Layout>
  )
}

export default Footer
