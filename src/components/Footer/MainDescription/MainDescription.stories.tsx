import { theme } from 'styles/theme'
import MainDescription from './MainDescription'

const { orange } = theme.colors

export default {
  title: 'Footer/Main Description',
  component: MainDescription,
}

export const DefaultState = () => <MainDescription />
DefaultState.decorators = [
  (Story: any) => (
    <div style={{ padding: '3em', backgroundColor: orange.DEFAULT }}>
      <Story />
    </div>
  ),
]
