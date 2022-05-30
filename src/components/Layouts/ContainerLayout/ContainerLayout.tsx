import { ContainerLayoutProps, Corner } from 'global.types'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import MainLayout from '../MainLayout'

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

// interface MainLayoutProps {}
interface LayoutProps {
  readonly backgroundColor?: string
  readonly radiusValue: string
  readonly roundCorner: Corner
  readonly withPadding: boolean
}

// const MainLayout = styled.div<MainLayoutProps>`
//   background-color: ;
// `

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
`

const ContainerLayout = (props: ContainerLayoutProps) => {
  return (
    <MainLayout>
      <Row align="bottom">
        <Col span={props.colSpan}>
          <Layout
            backgroundColor={props.backgroundColor}
            radiusValue={props.radiusValue}
            roundCorner={props.roundCorner}
            withPadding={props.withPadding}
          >
            {props.children}
          </Layout>
        </Col>
      </Row>
    </MainLayout>
  )
}

export default ContainerLayout
