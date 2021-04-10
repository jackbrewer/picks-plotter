import React from 'react'

import Rotator from './'
import Frame from '../../structure/Frame'

export default {
  title: 'Example/Rotator',
  component: Rotator,
}

const Template = (args) => (
  <Frame name="Rotator">
    <Rotator {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {}

export const Star = Template.bind({})
Star.args = {
  count: 100,
  scale: 14,
  rotate: 1.25,
  width: 400,
  height: 400,
}
