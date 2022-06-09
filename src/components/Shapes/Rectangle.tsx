import { ShapeProps, Corner } from 'global.types'
import styled from 'styled-components'
import { Grid } from '@mui/material'

interface LayoutProps {
  readonly backgroundColor?: string
  readonly backgroundImg?: string
  readonly radiusValue: string
  readonly roundCorner: Corner | undefined
  readonly height?: string
}

const getRadiusValue = (
  corner: Corner | undefined,
  expectedCorner: Corner,
  value: string
) => {
  if (corner === expectedCorner) {
    return value
  }
  return '0'
}

const Layout = styled.div<LayoutProps>`
  border-top-left-radius: ${(props) =>
    getRadiusValue(props.roundCorner, 'leftUp', props.radiusValue)};
  border-top-right-radius: ${(props) =>
    getRadiusValue(props.roundCorner, 'rightUp', props.radiusValue)};
  border-bottom-left-radius: ${(props) =>
    getRadiusValue(props.roundCorner, 'leftDown', props.radiusValue)};
  border-bottom-right-radius: ${(props) =>
    getRadiusValue(props.roundCorner, 'rightDown', props.radiusValue)};
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : ''};
  background: ${(props) =>
    props.backgroundImg ? `url(${props.backgroundImg}) no-repeat center` : ''};
  background-size: cover;
  height: ${(props) => props.height || 'auto'};
`

const Rectangle = (props: ShapeProps) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Grid item sm={props.colSpan}>
        <Layout
          backgroundColor={props.backgroundColor}
          backgroundImg={props.backgroundImg}
          radiusValue={props.radiusValue}
          roundCorner={props.roundCorner}
          height={props.height}
        />
      </Grid>
    </Grid>
  )
}

export default Rectangle
