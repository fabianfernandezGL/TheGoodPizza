import { Stack } from '@mui/material'
import styled from 'styled-components'
import StarRateIcon from '@mui/icons-material/StarRate'

import { theme } from 'styles/theme'
import Button from 'components/Button'
import { Text } from 'components/Typography'

const ButtonStructure = styled(Button)({
  textDecoration: 'none',
  textTransform: 'capitalize',
})

const renderDefaultContent = (isDefault: boolean, text: string) => {
  let textColor = theme.colors.white.DEFAULT
  if (isDefault) {
    textColor = theme.colors.gray.light
  }
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Text color={textColor}>{text}</Text>
      <StarRateIcon
        fontSize="small"
        color={isDefault ? 'disabled' : 'primary'}
      />
    </Stack>
  )
}

type FavoriteButtonProps = {
  defaultTextDisplay: string
  nonDefaultTextDisplay: string
  isDefault: boolean
  setDefault: () => void
}

export function FavoriteButton({
  isDefault,
  defaultTextDisplay,
  nonDefaultTextDisplay,
  setDefault,
}: FavoriteButtonProps) {
  return (
    <ButtonStructure variant="text" disabled={isDefault} onClick={setDefault}>
      {renderDefaultContent(
        isDefault,
        isDefault ? defaultTextDisplay : nonDefaultTextDisplay
      )}
    </ButtonStructure>
  )
}
