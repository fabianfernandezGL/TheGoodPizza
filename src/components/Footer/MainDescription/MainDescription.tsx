import { Col, Row } from 'antd'
import Logo from 'components/Logo'
import { TypographyText } from 'components/Typography/Typography'
import SocialMedia from './SocialMedia'
import { theme } from 'styles/theme'

const MainDescription = () => {
  return (
    <>
      <Row gutter={[0, 28.16]}>
        <Col span={24}>
          <Logo width={101} />
        </Col>
        <Col span={24}>
          <TypographyText color={theme.colors.black.DEFAULT}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
            scelerisque vulputate est iaculis bibendum curabitur.
          </TypographyText>
        </Col>
        <Col span={24}>
          <SocialMedia />
        </Col>
      </Row>
    </>
  )
}

export default MainDescription
