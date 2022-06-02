import { PageLayoutProps } from 'global.types'
import styled from 'styled-components'
import { Col, Row } from 'antd'
import ContainerLayout from '../ContainerLayout'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  text-align: center;
  width: 100%;
`

const PageLayout = (props: PageLayoutProps) => {
  return (
    <Layout>
      <Row align="middle">
        <Col span={props.spanImg}>
          <ContainerLayout
            colSpan={24}
            radiusValue="388px"
            roundCorner="rightDown"
            withPadding={false}
            backgroundImg={props.img}
            height={'834px'}
          />
        </Col>
        <Col span={props.spanContent}>{props.children}</Col>
      </Row>
    </Layout>
  )
}

export default PageLayout
