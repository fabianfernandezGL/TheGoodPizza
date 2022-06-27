import { theme } from 'styles/theme'
import MainDescription from './MainDescription/MainDescription'
import OurLinks from './OurLinks/OurLinks'
import ImportantStuff from './ImportantStuff/ImportantStuff'
import OurFeed from './OurFeed/OurFeed'
import { Grid } from '@mui/material'
import SectionLayout from 'components/Layouts/SectionLayout'

const footerSections = [
  <OurLinks key="ourLinks" />,
  <ImportantStuff key="importantStuff" />,
  <OurFeed key="ourFeed" />,
]

const Footer = () => {
  return (
    <SectionLayout
      shapeSpan={12}
      shapeColor={theme.colors.orange.DEFAULT}
      cornerToRound={'rightUp'}
      radiusValue={'367.5px'}
      shapeHeight="451px"
    >
      <Grid container m={8} justifyContent={'space-around'}>
        <Grid item sm={2} xs={12}>
          <MainDescription />
        </Grid>
        <Grid item container sm={8} xs={12}>
          {footerSections.map((section, idx) => (
            <Grid item key={idx}>
              {section}
            </Grid>
          ))}
        </Grid>
      </Grid>
    </SectionLayout>
  )
}

export default Footer
