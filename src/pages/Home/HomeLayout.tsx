import { Grid } from '@mui/material'
import SectionLayout from 'components/Layouts/SectionLayout'
import MainBG from '../../images/home/bg.png'

interface HomeLayoutProps {
  children: JSX.Element[]
}

const height = '1080px'

export default function HomeLayout({ children }: HomeLayoutProps): JSX.Element {
  return (
    <SectionLayout
      shapeImg={MainBG}
      cornerToRound="rightDown"
      shapeSpan={4}
      height={height}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        height={height}
      >
        <Grid item sm={8}>
          {children}
        </Grid>
      </Grid>
    </SectionLayout>
  )
}
