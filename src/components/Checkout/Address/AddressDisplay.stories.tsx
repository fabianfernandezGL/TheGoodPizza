import styled from 'styled-components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { theme } from 'styles/theme'

import { AddressDisplay } from './AddressDisplay'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Address/Display',
  component: AddressDisplay,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof AddressDisplay>

const Template: ComponentStory<typeof AddressDisplay> = (args) => (
  <AddressDisplay {...args} />
)

export const Default = Template.bind({})
Default.args = {
  address: {
    city: 'San José',
    isDefault: true,
    name: 'Office',
    phoneNumber: '88888888',
    state: 'SJO',
    street1: 'Some place',
    zip: '323232',
    street2: 'This is to be specific',
  },
  index: 0,
}

export const NonDefault = Template.bind({})
NonDefault.args = {
  address: {
    city: 'Paraiso',
    isDefault: false,
    name: 'Home',
    phoneNumber: '88888888',
    state: 'CA',
    street1: 'Some place',
    zip: '323232',
    street2: 'This is to be specific',
  },
  index: 0,
}
