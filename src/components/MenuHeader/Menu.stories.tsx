import MenuHeader from './Menu'
import { theme } from '../../styles/theme'

const { black } = theme.colors

export default {
  title: 'Menu/Full Menu',
  component: MenuHeader,
}

export const DefaultState = () => <MenuHeader />
DefaultState.decorators = [
  (Story: any) => (
    <div style={{ padding: '3em', backgroundColor: black.DEFAULT }}>
      <Story />
    </div>
  ),
]
