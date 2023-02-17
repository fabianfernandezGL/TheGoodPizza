import { Grid } from '@mui/material'

import Button from 'components/Button'

export default function LoginButtons(): JSX.Element {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={8} mb={10} mt={8}>
          <Button fullWidth type="submit" variant="contained" color="success">
            Log In
          </Button>
        </Grid>
        <Grid item xs={8} mb={4}>
          <Button fullWidth variant="outlined" color="error">
            Log In with Google
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button fullWidth variant="outlined" color="error">
            Log In with Facebook
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
