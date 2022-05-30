import { Col, Row } from 'antd'
import Logo from 'components/Logo'
import SocialMedia from './SocialMedia'

const MainDescription = () => {
  return (
    <>
      <Row gutter={[0, 28.16]}>
        <Col span={24}>
          <Logo width={101} />
        </Col>
        <Col span={24}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            scelerisque vulputate est iaculis bibendum curabitur.
          </p>
        </Col>
        <Col span={24}>
          <SocialMedia />
        </Col>
      </Row>
    </>
  )
}

export default MainDescription
