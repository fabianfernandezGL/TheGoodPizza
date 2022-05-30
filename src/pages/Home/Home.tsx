import { Col, Row, Space } from 'antd'
import Button from 'components/Button'
import ContainerLayout from 'components/Layouts/ContainerLayout'
import {
  TypographyBigTitle,
  TypographySmallTitle,
} from 'components/Typography/Typography'
import styled from 'styled-components'
import { theme } from 'styles/theme'
import MainBG from '../../images/home/bg.png'

interface HomeProps {}
interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  height: 1080px;
  text-align: center;
  width: 100%;
`

const title = 'Welcome!'
const subtitle = 'Make yourself at home'

export default function Home({}: HomeProps): JSX.Element {
  // Logic here...

  return (
    <Layout>
      <Row align="middle">
        <Col span={10}>
          <ContainerLayout
            colSpan={10}
            radiusValue="388px"
            roundCorner="rightDown"
            withPadding={false}
          >
            <img src={MainBG} width="763" />
          </ContainerLayout>
        </Col>
        <Col span={14}>
          <TypographyBigTitle
            data-testid="title"
            color={theme.colors.yellow.DEFAULT}
            margin="0"
          >
            {title.toUpperCase()}
          </TypographyBigTitle>
          <TypographySmallTitle
            data-testid="title"
            color={theme.colors.yellow.DEFAULT}
          >
            {subtitle}
          </TypographySmallTitle>
          <Space>
            <Col>
              <Button type="default">Log In</Button>
            </Col>
            <Col>
              <Button type="primary">Sign Up</Button>
            </Col>
          </Space>
        </Col>
      </Row>
    </Layout>
  )
}
