import styled from 'styled-components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { theme } from 'styles/theme'

import { PaymentDisplay } from './PaymentDisplay'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Payment/Display',
  component: PaymentDisplay,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof PaymentDisplay>

const Template: ComponentStory<typeof PaymentDisplay> = (args) => (
  <PaymentDisplay {...args} />
)

export const Default = Template.bind({})
Default.args = {
  payment: {
    cardNumber: '5352579176355697',
    cvv: '458',
    expiration: '07/2023',
    isDefault: true,
    name: 'Personal',
    nameOnCard: 'John Doe',
  },
  index: 1,
}

export const NonDefault = Template.bind({})
NonDefault.args = {
  payment: {
    cardNumber: '4249474738843770',
    cvv: '523',
    expiration: '03/2026',
    isDefault: false,
    name: 'Work',
    nameOnCard: 'Jane Smith',
  },
  index: 1,
}
