import styled from 'styled-components'

import { theme } from 'styles/theme'

import Pizzas from 'constants/pizzaOptions'
import { MenuOptionCard } from './MenuOptionCard'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Stack } from '@mui/material'

const { black } = theme.colors

const Layout = styled.div`
  width: auto;
  padding: 2%;
  background-color: ${black.DEFAULT};
`

export default {
  title: 'Our Menu/Pizza Card',
  component: MenuOptionCard,
  decorators: [
    (Story: any) => (
      <Layout>
        <Story />
      </Layout>
    ),
  ],
} as ComponentMeta<typeof MenuOptionCard>

const Template: ComponentStory<typeof MenuOptionCard> = (args) => {
  return (
    <Stack direction="row" spacing={5}>
      <MenuOptionCard {...args} data={Pizzas[2]} />
      <MenuOptionCard {...args} data={Pizzas[3]} />
      <MenuOptionCard {...args} data={Pizzas[4]} />
    </Stack>
  )
}

export const AuthState = Template.bind({})
AuthState.args = {
  isAuthenticated: true,
}

export const NonAuthtState = Template.bind({})
NonAuthtState.args = {
  isAuthenticated: false,
}
