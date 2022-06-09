import { theme } from 'styles/theme'
import MainDescription from './MainDescription/MainDescription'
import OurLinks from './OurLinks/OurLinks'
import ImportantStuff from './ImportantStuff/ImportantStuff'
import OurFeed from './OurFeed/OurFeed'
import { Grid } from '@mui/material'
import SectionLayout from 'components/Layouts/SectionLayout'

const Footer = () => {
  return (
    <SectionLayout
      shapeSpan={12}
      shapeColor={theme.colors.orange.DEFAULT}
      cornerToRound={'rightUp'}
      radiusValue={'367.5px'}
      height="451px"
    >
      <Grid container m={8} justifyContent={'space-around'}>
        <Grid item sm={2}>
          <MainDescription />
        </Grid>
        <Grid item sm={1}>
          <OurLinks />
        </Grid>
        <Grid item sm={2}>
          <ImportantStuff />
        </Grid>
        <Grid item sm={2}>
          <OurFeed />
        </Grid>
      </Grid>
    </SectionLayout>
  )
}

export default Footer
