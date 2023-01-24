import styled from 'styled-components'
import { Button as ButtonMui, ButtonProps } from '@mui/material'

const CustomButton = styled(ButtonMui)({
  'border-radius': '200px',
  paddingRight: '20px',
  paddingLeft: '20px',
}) as typeof ButtonMui

const Button = (props: ButtonProps) => {
  return <CustomButton {...props}>{props.children}</CustomButton>
}

export default Button
