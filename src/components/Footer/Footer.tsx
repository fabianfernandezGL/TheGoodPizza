import ContainerLayout from 'components/Layouts/ContainerLayout'
import { theme } from 'styles/theme'
import { Col, Row } from 'antd'
import MainDescription from './MainDescription'
import styled from 'styled-components'
import OurLinks from './OurLinks'
import ImportantStuff from './ImportantStuff/ImportantStuff'
import OurFeed from './OurFeed/OurFeed'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`

const Footer = () => {
  return (
    <Layout>
      <ContainerLayout
        backgroundColor={theme.colors.orange.DEFAULT}
        radiusValue="367.5px"
        roundCorner="rightUp"
        colSpan={24}
      >
        <Row justify="space-between" align="stretch">
          <Col span={6}>
            <MainDescription />
          </Col>
          <Col span={3}>
            <OurLinks />
          </Col>
          <Col span={3}>
            <ImportantStuff />
          </Col>
          <Col span={3}>
            <OurFeed />
          </Col>
        </Row>
      </ContainerLayout>
    </Layout>
  )
}

export default Footer
