import { Col, Row } from 'antd'
import Subtitle from 'components/Typography/Subtitle'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import feed1 from '../../../images/feed/feed1.png'
import feed2 from '../../../images/feed/feed2.png'
import feed3 from '../../../images/feed/feed3.png'
import feed4 from '../../../images/feed/feed4.png'
import feed5 from '../../../images/feed/feed5.png'
import feed6 from '../../../images/feed/feed6.png'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin-top: 50px;
`

const imgs = [feed1, feed2, feed3, feed4, feed5, feed6]

const OurFeed = () => {
  return (
    <Layout>
      <Row gutter={[0, 24]} align="bottom">
        <Col span={24}>
          <Subtitle color={theme.colors.white.DEFAULT}>Our Feed</Subtitle>
        </Col>

        <Row gutter={[0, 8]} align="bottom">
          {imgs.map((img, idx) => {
            return (
              <Col span={8} key={idx}>
                <img src={img} width="69" />
              </Col>
            )
          })}
        </Row>
      </Row>
    </Layout>
  )
}

export default OurFeed
