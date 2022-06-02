import Logo from 'components/Logo'
import { TypographyText } from 'components/Typography/Typography'
import SocialMedia from './SocialMedia'
import { theme } from 'styles/theme'
import { Grid } from '@mui/material'

const MainDescription = () => {
  return (
    <>
      <Grid container>
        <Grid item sm={24}>
          <Logo width={101} />
        </Grid>
        <Grid item sm={24}>
          <TypographyText color={theme.colors.black.DEFAULT}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            scelerisque vulputate est iaculis bibendum curabitur.
          </TypographyText>
        </Grid>
        <Grid item sm={24}>
          <SocialMedia />
        </Grid>
      </Grid>
    </>
  )
}

export default MainDescription
