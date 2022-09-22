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
      <Grid item xs={12} sm={4} md={2}>
        <Button
          data-testid="login-btn"
          variant="outlined"
          color="secondary"
          size="large"
          fullWidth
          href={`/${routes.LOGIN}`}
        >
          Log In
        </Button>
      </Grid>
      <Grid item xs={12} sm={4} md={2}>
        <Button
          data-testid="sign-up-btn"
          variant="contained"
          color="secondary"
          size="large"
          fullWidth
          href={`/${routes.SIGN_UP}`}
        >
          Sign Up
        </Button>
      </Grid>
    </Grid>
  )
}
