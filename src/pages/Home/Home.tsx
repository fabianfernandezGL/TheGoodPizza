import { Grid } from '@mui/material'
import Button from 'components/Button'
import ContainerLayout from 'components/Layouts/ContainerLayout'
import {
  TypographyBigTitle,
  TypographySmallTitle,
} from 'components/Typography/Typography'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import MainBG from '../../images/home/bg.png'

interface HomeProps {}
interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  text-align: center;
  width: 100%;
`

const title = 'Welcome!'
const subtitle = 'Make yourself at home'

export default function Home({}: HomeProps): JSX.Element {
  // Logic here...

  return (
    <Layout>
      <Grid container>
        <Grid item sm={4}>
          <ContainerLayout
            colSpan={24}
            radiusValue="388px"
            roundCorner="rightDown"
            withPadding={false}
            backgroundImg={MainBG}
            height={'1080px'}
          />
        </Grid>
        <Grid item sm={6}>
          <TypographyBigTitle
            data-testid="title"
            color={theme.colors.yellow.DEFAULT}
            margin="0"
          >
            {title.toUpperCase()}
          </TypographyBigTitle>
          <TypographySmallTitle color={theme.colors.yellow.DEFAULT}>
            {subtitle}
          </TypographySmallTitle>
          <Grid container>
            <Grid item>
              <Button variant="outlined">Log In</Button>
            </Grid>
            <Grid item>
              <Button variant="contained">Sign Up</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}
