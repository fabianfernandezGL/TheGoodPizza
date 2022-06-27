import { Grid } from '@mui/material'
import SectionLayout from 'components/Layouts/SectionLayout'
import MainBG from '../../images/home/bg.png'

interface LoginLayoutProps {
  children: JSX.Element | JSX.Element[]
}

const height = '980px'

export default function LoginLayout({
  children,
}: LoginLayoutProps): JSX.Element {
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
        mt={24}
        mb={8}
      >
        <Grid item xs={12} sm={6}>
          {children}
        </Grid>
        <Grid item xs={12} sm={1} />
      </Grid>
    </SectionLayout>
  )
}
