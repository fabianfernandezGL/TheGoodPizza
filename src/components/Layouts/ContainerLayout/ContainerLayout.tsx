import { ContainerLayoutProps, Corner } from 'global.types'
import styled from 'styled-components'
import MainLayout from '../MainLayout'
import { Grid } from '@mui/material'

const getRadiusValue = (
  corner: Corner,
  expectedCorner: Corner,
  value: string
) => {
  if (corner === expectedCorner) {
    return value
  }
  return '0'
}

interface LayoutProps {
  readonly backgroundColor?: string
  readonly backgroundImg?: string
  readonly radiusValue: string
  readonly roundCorner: Corner
  readonly withPadding: boolean
  readonly height?: string
}

const Layout = styled.div<LayoutProps>`
  padding: ${(props) => (props.withPadding ? '6.5rem' : '0')};
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

const ContainerLayout = (props: ContainerLayoutProps) => {
  return (
    <MainLayout>
      <Grid container>
        <Grid item sm={props.colSpan}>
          <Layout
            backgroundColor={props.backgroundColor}
            backgroundImg={props.backgroundImg}
            radiusValue={props.radiusValue}
            roundCorner={props.roundCorner}
            withPadding={props.withPadding}
            height={props.height}
          >
            {props.children}
          </Layout>
        </Grid>
      </Grid>
    </MainLayout>
  )
}

export default ContainerLayout
