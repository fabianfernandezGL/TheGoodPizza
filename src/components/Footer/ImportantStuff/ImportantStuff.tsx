import { Col, Row } from 'antd'
import MenuOption from 'components/MenuHeader/MenuItem'
import { MenuItemData } from 'global.types'
import { theme } from 'styles/theme'
import styled from 'styled-components'
import {
  TypographySubtitle,
  TypographyText,
} from 'components/Typography/Typography'

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  margin-top: 50px;
`

const MenuOptions = [
  {
    name: (
      <TypographyText color={theme.colors.black.DEFAULT}>
        Terms & Conditions
      </TypographyText>
    ),
    href: '',
    span: 24,
  },
  {
    name: (
      <TypographyText color={theme.colors.black.DEFAULT}>
        Privacy Policy
      </TypographyText>
    ),
    href: '',
    span: 24,
  },
  {
    name: (
      <TypographyText color={theme.colors.black.DEFAULT}>
        Careers
      </TypographyText>
    ),
    href: '',
    span: 24,
  },
]

const ImportantStuff = () => {
  return (
    <Layout>
      <Row gutter={[0, 24]} align="bottom">
        <Col span={24}>
          <TypographySubtitle color={theme.colors.white.DEFAULT}>
            Important Stuff!
          </TypographySubtitle>
        </Col>
        <Col span={24}>
          {MenuOptions.map((option: MenuItemData, idx: number) => (
            <MenuOption key={idx} item={option} />
          ))}
        </Col>
      </Row>
    </Layout>
  )
}

export default ImportantStuff
