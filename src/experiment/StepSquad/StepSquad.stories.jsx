import React from 'react'

import StepSquad from './'
import Frame from '../../component/Frame'

export default {
  title: 'Numbers/StepSquad',
  component: StepSquad,
}

const Template = (args) => (
  <Frame args={args} name="StepSquad">
    <StepSquad {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 180,
  height: 180,
}
