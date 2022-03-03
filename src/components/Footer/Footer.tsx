import MenuOptions from 'constants/menuOptions'
import { MenuItemData } from 'global.types'
import { Row } from 'antd'

const Footer = () => {
  return (
    <Row>
      {MenuOptions.filter((option: MenuItemData) => option.showInFooter).map(
        (option: MenuItemData, idx: number) => (
          <p key={idx}>{option.name}</p>
        )
      )}
    </Row>
  )
}

export default Footer
