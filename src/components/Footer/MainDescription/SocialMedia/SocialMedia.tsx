import { Stack, useTheme } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'

const SocialMedia = () => {
  const theme = useTheme()
  const icons = [
    FacebookIcon,
    TwitterIcon,
    LinkedInIcon,
    YouTubeIcon,
    InstagramIcon,
  ]

  return (
    <Stack direction="row" spacing={2.5}>
      {icons.map((Icon, idx) => (
        <Icon
          htmlColor={theme.palette.background.default}
          fontSize="large"
          key={`social-icon-${idx}`}
        />
      ))}
    </Stack>
  )
}

export default SocialMedia
