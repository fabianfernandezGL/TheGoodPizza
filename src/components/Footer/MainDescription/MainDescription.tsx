import { Stack } from '@mui/material'

import Logo from 'components/Logo'
import { theme } from 'styles/theme'
import { Text } from 'components/Typography'

import SocialMedia from './SocialMedia'

const MainDescription = () => {
  return (
    <Stack spacing={4}>
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
