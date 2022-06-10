import { Grid } from '@mui/material'
import { BigTitle, SmallTitle } from 'components/Typography/Typography'
import { theme } from 'styles/theme'

const title = 'Welcome!'
const subtitle = 'Make yourself at home.'

export default function HomeTitle(): JSX.Element {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      mb={4}
    >
      <Grid item>
        <BigTitle
          data-testid="title"
          color={theme.colors.yellow.DEFAULT}
          margin="0"
        >
          {title.toUpperCase()}
        </BigTitle>
        <SmallTitle color={theme.colors.yellow.DEFAULT}>{subtitle}</SmallTitle>
      </Grid>
    </Grid>
  )
}
