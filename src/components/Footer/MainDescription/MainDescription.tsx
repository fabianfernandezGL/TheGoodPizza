import Logo from 'components/Logo'
import { TypographyText } from 'components/Typography/Typography'
import SocialMedia from './SocialMedia'
import { theme } from 'styles/theme'
import { Grid } from '@mui/material'

const MainDescription = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <Logo width={101} />
        </Grid>
        <Grid item sm={12}>
          <TypographyText color={theme.colors.black.DEFAULT}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            scelerisque vulputate est iaculis bibendum curabitur.
          </TypographyText>
        </Grid>
        <SocialMedia />
      </Grid>
    </>
  )
}

export default MainDescription
