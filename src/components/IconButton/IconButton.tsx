import styled from 'styled-components'
import { IconButton as IconButtonMui, IconButtonProps } from '@mui/material'

import { theme } from 'styles/theme'

const CustomIconButton = styled(IconButtonMui)({
  padding: '10px',
  gap: '10px',
  width: '28px',
  height: '28px',
  background: theme.colors.gray.light,
}) as typeof IconButtonMui

const IconButton = (props: IconButtonProps) => {
  return <CustomIconButton {...props}>{props.children}</CustomIconButton>
}

export default IconButton
