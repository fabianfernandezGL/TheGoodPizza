import Logo from 'components/Logo'
import { Text } from 'components/Typography'
import SocialMedia from './SocialMedia'
import { theme } from 'styles/theme'
import { Stack } from '@mui/material'

const MainDescription = () => {
  return (
    <Stack spacing={3}>
      <Logo width={101} />
      <Text color={theme.colors.black.DEFAULT}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
        scelerisque vulputate est iaculis bibendum curabitur.
      </Text>
      <SocialMedia />
    </Stack>
  )
}

export default MainDescription
