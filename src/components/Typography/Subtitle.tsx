import { SubtitleProps } from 'global.types'

const Subtitle = (props: SubtitleProps) => {
  return (
    <h4 style={{ color: props.color, fontWeight: 700 }}>{props.children}</h4>
  )
}

export default Subtitle
