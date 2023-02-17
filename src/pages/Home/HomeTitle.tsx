import { Stack } from '@mui/material'

import { BigTitle, SmallTitle } from 'components/Typography'
import { theme } from 'styles/theme'

const title = 'Welcome!'
const subtitle = 'Make yourself at home'

export default function HomeTitle(): JSX.Element {
  return (
    <Stack justifyContent="center" alignItems="center" mb={4}>
      <BigTitle data-testid="title" align="center" margin="0">
        {title.toUpperCase()}
      </BigTitle>
      <SmallTitle
        data-testid="subtitle"
        align="center"
        color={theme.colors.yellow.DEFAULT}
      >
        {subtitle}
      </SmallTitle>
    </Stack>
  )
}
