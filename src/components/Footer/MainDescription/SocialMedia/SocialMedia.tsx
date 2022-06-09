import { Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

const SocialMedia = () => {
  return (
    <Grid item container sm={12} spacing={3}>
      <Grid item>
        <FacebookIcon fontSize="large" />
      </Grid>
      <Grid item>
        <TwitterIcon fontSize="large" />
      </Grid>
      <Grid item>
        <LinkedInIcon fontSize="large" />
      </Grid>
      <Grid item>
        <YouTubeIcon fontSize="large" />
      </Grid>
      <Grid item>
        <InstagramIcon fontSize="large" />
      </Grid>
    </Grid>
  )
}

export default SocialMedia
