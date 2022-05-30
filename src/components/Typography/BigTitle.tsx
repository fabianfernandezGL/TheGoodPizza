import { BigTitleProps } from 'global.types'

const BigTitle = (props: BigTitleProps) => {
  return <h2 style={{ color: props.color }}>{props.children}</h2>
}

export default BigTitle
