import { ContainerLayoutProps, Corner } from 'global.types'
import styled from 'styled-components'
import { Col, Row } from 'antd'

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
  readonly backgroundColor: string
  readonly radiusValue: string
  readonly roundCorner: Corner
}

const Layout = styled.div<LayoutProps>`
  padding: 6.5rem;
  border-top-left-radius: ${(props) =>
    getRadiusValue(props.roundCorner, 'leftUp', props.radiusValue)};
  border-top-right-radius: ${(props) =>
    getRadiusValue(props.roundCorner, 'rightUp', props.radiusValue)};
  border-bottom-left-radius: ${(props) =>
    getRadiusValue(props.roundCorner, 'leftDown', props.radiusValue)};
  border-bottom-right-radius: ${(props) =>
    getRadiusValue(props.roundCorner, 'rightDown', props.radiusValue)};
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
`

const ContainerLayout = (props: ContainerLayoutProps) => {
  return (
    <Row align="bottom">
      <Col span={props.colSpan}>
        <Layout
          backgroundColor={props.backgroundColor}
          radiusValue={props.radiusValue}
          roundCorner={props.roundCorner}
        >
          {props.children}
        </Layout>
      </Col>
    </Row>
  )
}

export default ContainerLayout
