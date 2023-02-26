import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { theme } from 'styles/theme'

import Logo from './Logo'

const { yellow } = theme.colors

const Layout = styled.div`
  padding: 3%;
  background-color: ${yellow.DEFAULT};
`

export default {
  title: 'Menu/Logo',
  component: Logo,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof Logo>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  color: 'white',
  width: 200,
}
