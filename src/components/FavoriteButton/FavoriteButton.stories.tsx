import styled from 'styled-components'

import { theme } from 'styles/theme'

import { FavoriteButton } from './FavoriteButton'
import { ComponentMeta, ComponentStory } from '@storybook/react'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Form/Favorite Button',
  component: FavoriteButton,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof FavoriteButton>

const Template: ComponentStory<typeof FavoriteButton> = (args) => (
  <FavoriteButton {...args} />
)

export const Default = Template.bind({})
Default.args = {
  defaultTextDisplay: 'It is a default',
  isDefault: false,
  nonDefaultTextDisplay: 'It is not a default',
}
