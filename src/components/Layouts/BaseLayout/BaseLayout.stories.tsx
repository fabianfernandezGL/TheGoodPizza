import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BigText, BigTitle } from 'components/Typography'
import BaseLayout from './BaseLayout'

export default {
  title: 'Layouts/Base',
  component: BaseLayout,
} as ComponentMeta<typeof BaseLayout>

const Template: ComponentStory<typeof BaseLayout> = () => (
  <BaseLayout>
    <BigTitle>Simple title</BigTitle>
    <BigText>This is the content</BigText>
  </BaseLayout>
)

export const Default = Template.bind({})
