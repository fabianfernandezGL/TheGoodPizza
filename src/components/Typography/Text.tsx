import { TextProps } from 'global.types'

const Text = (props: TextProps) => {
  return <p style={{ color: props.color }}>{props.children}</p>
}

export default Text
