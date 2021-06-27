import React from 'react'

import CircleHatchSpiral from './'

import Frame from '../../structure/Frame'

export default {
  title: 'Example/CircleHatchSpiral',
  component: CircleHatchSpiral,
}

const Template = (args) => (
  <Frame name="CircleHatchSpiral" seeded refresh>
    <CircleHatchSpiral {...args} />
  </Frame>
)

export const Default = Template.bind({})
Default.args = {
  printWidth: 180,
  printHeight: 180,
  width: 180,
  height: 180,
  numPoints: 220,
  pointRadius: 5,
  angleDiff: 3.2,
  distance: 1.8,
}
