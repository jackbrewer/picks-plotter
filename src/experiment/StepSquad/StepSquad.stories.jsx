import React from 'react'

import StepSquad from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Numbers/StepSquad',
  component: StepSquad,
}

const Template = (args) => (
  <Frame name="StepSquad">
    <StepSquad {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  width: 180,
  height: 180,
}
