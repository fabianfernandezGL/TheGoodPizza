import styled from 'styled-components'
import { Button as ButtonMui, ButtonProps } from '@mui/material'

const CustomButton = styled(ButtonMui)({
  'border-radius': '200px',
}) as typeof ButtonMui

const Button = (props: ButtonProps) => {
  return <CustomButton {...props}>{props.children}</CustomButton>
}

export default Button
