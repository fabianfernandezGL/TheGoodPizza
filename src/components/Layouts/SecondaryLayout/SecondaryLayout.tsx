import { Grid } from '@mui/material'
import SectionLayout from 'components/Layouts/SectionLayout'
import { HugeTitle } from 'components/Typography/Typography'

interface SecondaryLayoutProps {
  children?: JSX.Element | JSX.Element[]
  backgroundImg: string
  title: string
}

const height = '664px'

export default function SecondaryLayout({
  children,
  backgroundImg,
  title,
}: SecondaryLayoutProps): JSX.Element {
  return (
    <SectionLayout
      shapeImg={backgroundImg}
      cornerToRound="rightDown"
      shapeSpan={12}
      shapeHeight={height}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={32}
        mb={8}
      >
        <Grid item mb={22} xs={7}>
          <HugeTitle align="center">{title}</HugeTitle>
        </Grid>
        {children && (
          <Grid item mt={12} xs={10}>
            {children}
          </Grid>
        )}
      </Grid>
    </SectionLayout>
  )
}
