import { Grid } from '@mui/material'
import Button from 'components/Button'

export default function SignUpButtons(): JSX.Element {
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
            Sign Up
          </Button>
        </Grid>
        <Grid item xs={8} mb={4}>
          <Button fullWidth type="submit" variant="outlined" color="error">
            Sign Up with Google
          </Button>
        </Grid>
        <Grid item xs={8}>
          <Button fullWidth type="submit" variant="outlined" color="error">
            Sign Up with Facebook
          </Button>
        </Grid>
      </Grid>
    </>
  )
}
