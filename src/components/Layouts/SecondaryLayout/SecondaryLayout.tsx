import { Grid } from '@mui/material'
import SectionLayout from 'components/Layouts/SectionLayout'
import { BigTitle, HugeTitle, SmallTitle } from 'components/Typography'

interface SecondaryLayoutProps {
  children?: JSX.Element | JSX.Element[]
  backgroundImg: string
  title: string
  smallTitle?: string
  bigTitle?: string
}

const height = '664px'
const titleHeight = '408px'

export default function SecondaryLayout({
  children,
  backgroundImg,
  title,
  bigTitle,
  smallTitle,
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
        <Grid item mb={2} xs={7} height={titleHeight}>
          <HugeTitle align="center">{title}</HugeTitle>
          {bigTitle && <BigTitle align="center">{bigTitle}</BigTitle>}
          {smallTitle && <SmallTitle align="center">{smallTitle}</SmallTitle>}
        </Grid>
        {children && (
          <Grid item mt={6} xs={10}>
            {children}
          </Grid>
        )}
      </Grid>
    </SectionLayout>
  )
}
