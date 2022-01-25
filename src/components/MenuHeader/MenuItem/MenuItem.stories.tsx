import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { theme } from '../../../styles/theme'
import MenuItem from './MenuItem'
import { SettingOutlined } from '@ant-design/icons'
import logo from '../../../images/logo-white.svg'

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
  item: {
    href: '#',
    span: 1,
    name: 'Item',
  },
}

export const Icon = Template.bind({})
Icon.args = {
  item: {
    href: '#',
    span: 1,
    icon: SettingOutlined,
  },
}

export const Logo = Template.bind({})
Logo.args = {
  item: {
    href: '#',
    span: 1,
    img: {
      path: logo,
      width: 60,
    },
  },
}
