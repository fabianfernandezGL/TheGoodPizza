import { Grid } from '@mui/material'

import MainBG from 'images/home/bg.png'
import SectionLayout from 'components/Layouts/SectionLayout'

interface PrimaryLayoutProps {
  children: JSX.Element | JSX.Element[]
}

const height = '985px'

export default function PrimaryLayout({
  children,
}: PrimaryLayoutProps): JSX.Element {
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
        mt={32}
        mb={8}
      >
        <Grid item xs={12} sm={4}>
          {children}
        </Grid>
        <Grid item xs={12} sm={2} />
      </Grid>
    </SectionLayout>
  )
}
