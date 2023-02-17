import { Grid } from '@mui/material'

import SectionLayout from 'components/Layouts/SectionLayout'
import MainBG from 'images/home/bg.png'

interface HomeLayoutProps {
  children: JSX.Element[]
}

const height = '980px'

export default function HomeLayout({ children }: HomeLayoutProps): JSX.Element {
  return (
    <SectionLayout
      shapeImg={MainBG}
      cornerToRound="rightDown"
      shapeSpan={4}
      shapeHeight={height}
    >
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        height={height}
        mt={46}
      >
        <Grid item xs={12} sm={8}>
          {children}
        </Grid>
      </Grid>
    </SectionLayout>
  )
}
