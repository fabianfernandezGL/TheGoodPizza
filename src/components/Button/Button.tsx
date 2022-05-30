import { ButtonProps } from 'antd'
import { ButtonType } from 'antd/lib/button'
import styled, { StyledComponent } from 'styled-components'
import { theme } from 'styles/theme'

interface BaseProps {
  readonly color: string
  readonly size: string
}

const baseButton = styled.button<BaseProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${(props) => {
    if (props.size === 'small') {
      return '20px'
    } else if (props.size === 'large') {
      return '55px'
    }
    return '40px'
  }};
  gap: 10px;
  border-radius: 200px;
  height: ${(props) => {
    if (props.size === 'small') {
      return '45px'
    } else if (props.size === 'large') {
      return '117px'
    }
    return '56px'
  }};
  width: 225px;
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => {
    if (props.size === 'small') {
      return '12px'
    } else if (props.size === 'large') {
      return '30px'
    }
    return '20px'
  }};
  line-height: 25px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
`

const active = styled(baseButton)`
  background: ${(props) => props.color};
  color: ${theme.colors.white.DEFAULT};
  border-style: none;
`

const secondary = styled(baseButton)`
  background: transparent;
  border-color: ${(props) => props.color};
  border-style: solid;
  color: ${(props) => props.color};
`

const getButtonByType = (
  type: ButtonType
): StyledComponent<'button', any, BaseProps, never> => {
  if (type === 'primary') {
    return active
  }
  return secondary
}

const Button = (props: ButtonProps) => {
  const CustomButton = getButtonByType(props.type || 'primary')

  return (
    <CustomButton
      onClick={() => props.onClick}
      color={props.color || theme.colors.red.DEFAULT}
      size={props.size || 'middle'}
    >
      {props.children}
    </CustomButton>
  )
}

Button.defaultProps = {
  size: 'middle',
  color: theme.colors.red.DEFAULT,
}

export default Button
