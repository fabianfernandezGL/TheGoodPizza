import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Text } from 'components/Typography'
import SecondaryLayout from './SecondaryLayout'
import sampleBg from 'images/menu/bg.png'

export default {
  title: 'Layouts/Secondary',
  component: SecondaryLayout,
} as ComponentMeta<typeof SecondaryLayout>

const Template: ComponentStory<typeof SecondaryLayout> = (args) => (
  <SecondaryLayout {...args} backgroundImg={sampleBg}>
    <Text>This is the content</Text>
  </SecondaryLayout>
)

export const Default = Template.bind({})
Default.args = {
  title: 'Simple Title',
  bigTitle: 'Big Tittle',
  smallTitle: 'Small Title',
}
