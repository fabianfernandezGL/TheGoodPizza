import styled from 'styled-components'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { theme } from 'styles/theme'

import { AddressForm } from './AddressForm'

const { black } = theme.colors

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  width: 450px;
  padding: 25px;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Checkout/Address/Form',
  component: AddressForm,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof AddressForm>

const Template: ComponentStory<typeof AddressForm> = () => (
  <AddressForm onSubmitForm={() => {}} />
)

export const Default = Template.bind({})
