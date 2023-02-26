import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { theme } from 'styles/theme'

import MenuHeader from './Menu'

const { black } = theme.colors

const Layout = styled.div`
  height: 30vh;
  width: 100%;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Menu/Full Menu',
  component: MenuHeader,
  parameters: {
    storyshots: { disable: true },
  },
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof MenuHeader>

const Template: ComponentStory<typeof MenuHeader> = (args) => (
  <MenuHeader {...args} />
)
export const Default = Template.bind({})
Default.args = {
  isAuthenticated: false,
}
