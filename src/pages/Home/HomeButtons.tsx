import { Grid } from '@mui/material'
import Button from 'components/Button'
import routes from 'constants/routes.json'

export default function HomeButtons(): JSX.Element {
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Button
          variant="outlined"
          size="large"
          href={`${routes.MAIN_ROOT}${routes.LOGIN}`}
        >
          Log In
        </Button>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          size="large"
          href={`${routes.MAIN_ROOT}${routes.SIGN_UP}`}
        >
          Sign Up
        </Button>
      </Grid>
    </Grid>
  )
}
