import { PageLayoutProps } from 'global.types'
import styled from 'styled-components'
import ContainerLayout from '../ContainerLayout'
import { Grid } from '@mui/material'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  text-align: center;
  width: 100%;
`

const PageLayout = (props: PageLayoutProps) => {
  return (
    <Layout>
      <Grid container>
        <Grid item sm={props.spanImg}>
          <ContainerLayout
            colSpan={24}
            radiusValue="388px"
            roundCorner="rightDown"
            withPadding={false}
            backgroundImg={props.img}
            height={'834px'}
          />
        </Grid>
        <Grid item sm={props.spanContent}>
          {props.children}
        </Grid>
      </Grid>
    </Layout>
  )
}

export default PageLayout
