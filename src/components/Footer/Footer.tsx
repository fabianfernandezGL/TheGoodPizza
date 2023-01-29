import { theme } from 'styles/theme'
import MainDescription from './MainDescription/MainDescription'
import OurLinks from './OurLinks/OurLinks'
import ImportantStuff from './ImportantStuff/ImportantStuff'
import OurFeed from './OurFeed/OurFeed'
import { Stack } from '@mui/material'
import SectionLayout from 'components/Layouts/SectionLayout'
import { Fragment } from 'react'

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
      <Stack p={8} direction="row" justifyContent="space-around">
        <MainDescription />
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
          width="100%"
          mt={8}
        >
          {footerSections.map((section, idx) => (
            <Fragment key={idx}>{section}</Fragment>
          ))}
        </Stack>
      </Stack>
    </SectionLayout>
  )
}

export default Footer
