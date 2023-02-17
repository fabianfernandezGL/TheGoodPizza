import { ComponentStory, ComponentMeta } from '@storybook/react'

import { theme } from 'styles/theme'

import MenuItem from './MenuItem'

const { black } = theme.colors

export default {
  title: 'Menu/MenuItem',
  component: MenuItem,
  decorators: [
    (Story: any) => (
      <div style={{ padding: '3em', backgroundColor: black.DEFAULT }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
)

export const Text = Template.bind({})
Text.args = {
  data: {
    href: '#',
    name: 'Item',
    showInFooter: false,
    showWhenAuthActive: true,
    showWhenAuthInactive: true,
  },
}
