import { theme } from 'styles/theme'

import SocialMedia from './SocialMedia'

const { orange } = theme.colors

export default {
  title: 'Footer/Social Media',
  component: SocialMedia,
}

export const DefaultState = () => <SocialMedia />
DefaultState.decorators = [
  (Story: any) => (
    <div style={{ padding: '3em', backgroundColor: orange.DEFAULT }}>
      <Story />
    </div>
  ),
]
