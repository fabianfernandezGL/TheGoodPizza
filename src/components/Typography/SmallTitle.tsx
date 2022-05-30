import { SmallTitleProps } from 'global.types'

const SmallTitle = (props: SmallTitleProps) => {
  return <h3 style={{ color: props.color }}>{props.children}</h3>
}

export default SmallTitle
