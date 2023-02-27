import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Text } from 'components/Typography'
import PrimaryLayout from './PrimaryLayout'

export default {
  title: 'Layouts/Primary',
  component: PrimaryLayout,
} as ComponentMeta<typeof PrimaryLayout>

const Template: ComponentStory<typeof PrimaryLayout> = () => (
  <PrimaryLayout>
    <Text>This is the content</Text>
  </PrimaryLayout>
)

export const Default = Template.bind({})
