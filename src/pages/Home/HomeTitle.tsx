import { Grid } from '@mui/material'
import {
  TypographyBigTitle,
  TypographySmallTitle,
} from 'components/Typography/Typography'
import { theme } from 'styles/theme'

const title = 'Welcome!'
const subtitle = 'Make yourself at home'

export default function HomeTitle(): JSX.Element {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <TypographyBigTitle
          data-testid="title"
          color={theme.colors.yellow.DEFAULT}
          margin="0"
        >
          {title.toUpperCase()}
        </TypographyBigTitle>
        <TypographySmallTitle color={theme.colors.yellow.DEFAULT}>
          {subtitle}
        </TypographySmallTitle>
      </Grid>
    </Grid>
  )
}
